import React, { useState, createContext, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from '@react-native-firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@handzy');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signUp(email, password, name) {
    setLoadingAuth(true);

    try {
      const value = await createUserWithEmailAndPassword(auth, email, password);
      const uid = value.user.uid;

      await setDoc(doc(db, 'users', uid), {
        nome: name,
        createdAt: new Date(),
      });

      let data = {
        uid: uid,
        nome: name,
        email: value.user.email,
      };

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
    }
  }

  async function signIn(email, password) {
    setLoadingAuth(true);

    try {
      const value = await signInWithEmailAndPassword(auth, email, password);
      const uid = value.user.uid;

      const userProfile = await getDoc(doc(db, 'users', uid));

      let data = {
        uid: uid,
        nome: userProfile.data().nome,
        email: value.user.email,
      };

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
    }
  }

  async function signOutUser() {
    await signOut(auth);
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('@handzy', JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signUp,
        signIn,
        loadingAuth,
        loading,
        signOut: signOutUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
