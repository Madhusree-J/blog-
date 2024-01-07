import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { auth, db } from './Firebase-config';


export const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
    await signOut(auth);
};


export const getBlogPosts = async () => {
    const blogCollection = collection(db, 'blogPosts');
    const blogSnapshot = await getDocs(blogCollection);
    return blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createBlogPost = async (title, content) => {
    await addDoc(collection(db, 'blogPosts'), {
        title,
        content,
        timestamp: new Date(),
    });
};