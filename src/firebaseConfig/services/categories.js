import { collection, doc } from "firebase/firestore";

const categoriesRef = collection(db, 'categories');

console.log(categoriesRef)