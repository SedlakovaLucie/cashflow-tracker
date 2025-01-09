import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

// Funkce pro načtení příjmů
export const getIncomes = async () => {
  try {
    const incomeCollectionRef = collection(db, "income");
    const data = await getDocs(incomeCollectionRef);
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error("Chyba při načítání příjmů:", error);
    throw error;
  }
};

// Funkce pro načtení výdajů
export const getExpenses = async () => {
  try {
    const expenseCollectionRef = collection(db, "expense");
    const data = await getDocs(expenseCollectionRef);
    return data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.error("Chyba při načítání výdajů:", error);
    throw error;
  }
};

// Funkce pro přidání dat
export const addData = async (collectionName, newData) => {
  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, newData);
  } catch (error) {
    console.error(`Chyba při přidávání dat do ${collectionName}:`, error);
    throw error;
  }
};

// Funkce pro aktualizaci dat
export const updateData = async (collectionName, docId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
  } catch (error) {
    console.error(`Chyba při aktualizaci dat v ${collectionName}:`, error);
    throw error;
  }
};

// Funkce pro mazání dat
export const deleteData = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error(`Chyba při mazání dat v ${collectionName}:`, error);
    throw error;
  }
};

export default {
  getIncomes,
  getExpenses,
  addData,
  updateData,
  deleteData,
};
