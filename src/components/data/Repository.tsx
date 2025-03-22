import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  NewTransaction,
  TransactionFromFirestore,
} from "../../types";

// Načtení příjmů
export const getIncomes = async (): Promise<TransactionFromFirestore[]> => {
  try {
    const incomeCollectionRef = collection(db, "income");
    const data = await getDocs(incomeCollectionRef);
    return data.docs.map((doc) => ({
      ...(doc.data() as NewTransaction),
      id: doc.id,
    }));
  } catch (error) {
    console.error("Chyba při načítání příjmů:", error);
    throw error;
  }
};

// Načtení výdajů
export const getExpenses = async (): Promise<TransactionFromFirestore[]> => {
  try {
    const expenseCollectionRef = collection(db, "expense");
    const data = await getDocs(expenseCollectionRef);
    return data.docs.map((doc) => ({
      ...(doc.data() as NewTransaction),
      id: doc.id,
    }));
  } catch (error) {
    console.error("Chyba při načítání výdajů:", error);
    throw error;
  }
};

// Přidání záznamu
export const addData = async (
  collectionName: "income" | "expense",
  newData: NewTransaction
): Promise<void> => {
  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, newData);
  } catch (error) {
    console.error(`Chyba při přidávání dat do ${collectionName}:`, error);
    throw error;
  }
};

// Aktualizace záznamu
export const updateData = async (
  collectionName: "income" | "expense",
  docId: string,
  updatedData: NewTransaction
): Promise<void> => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
  } catch (error) {
    console.error(`Chyba při aktualizaci dat v ${collectionName}:`, error);
    throw error;
  }
};

// Mazání záznamu
export const deleteData = async (
  collectionName: "income" | "expense",
  docId: string
): Promise<void> => {
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
