import { addDoc, collection, getDocs, limit, query, serverTimestamp, where } from 'firebase/firestore';

import { IUser } from '@/@types/interfaces/user';
import { database } from '@/api/firebase';
import { passwordGenerator } from '@/utils/password-generator';

export const addUser = async (user: Omit<IUser, 'id' | 'createdDate' | 'updatedDate'>): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(database, 'users'), {
      ...user,
      password: await passwordGenerator(user.password),
      createdDate: serverTimestamp(),
      updatedDate: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    return null;
  }
};

export const checkEmailExist = async (email: string): Promise<boolean> => {
  const collectionRef = collection(database, 'users');
  const q = query(collectionRef, where('email', '==', email), limit(1));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.docs.length > 0) {
    const docSnap = querySnapshot.docs[0];
    const user: IUser = docSnap.data() as IUser;
    return user.active;
  }

  return false;
};
