import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, writeBatch, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDj6fkA8jX8JPNFHlVQxgjodGJRKZmGN8I",
    authDomain: "michaela-paints.firebaseapp.com",
    projectId: "michaela-paints",
    storageBucket: "michaela-paints.appspot.com",
    messagingSenderId: "396638302259",
    appId: "1:396638302259:web:ffc4d8a8cdf2011d81b346",
    measurementId: "G-10M52GX5Z8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

// Get Docs
export const getDocuments = async () => {
    const collectionRef = collection(db, 'work');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const artworkMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return artworkMap;
}