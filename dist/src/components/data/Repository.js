"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.updateData = exports.addData = exports.getExpenses = exports.getIncomes = void 0;
const firestore_1 = require("firebase/firestore");
const firebase_1 = require("../../config/firebase");
// Načtení příjmů
const getIncomes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const incomeCollectionRef = (0, firestore_1.collection)(firebase_1.db, "income");
        const data = yield (0, firestore_1.getDocs)(incomeCollectionRef);
        return data.docs.map((doc) => (Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    }
    catch (error) {
        console.error("Chyba při načítání příjmů:", error);
        throw error;
    }
});
exports.getIncomes = getIncomes;
// Načtení výdajů
const getExpenses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expenseCollectionRef = (0, firestore_1.collection)(firebase_1.db, "expense");
        const data = yield (0, firestore_1.getDocs)(expenseCollectionRef);
        return data.docs.map((doc) => (Object.assign(Object.assign({}, doc.data()), { id: doc.id })));
    }
    catch (error) {
        console.error("Chyba při načítání výdajů:", error);
        throw error;
    }
});
exports.getExpenses = getExpenses;
// Přidání záznamu
const addData = (collectionName, newData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collectionRef = (0, firestore_1.collection)(firebase_1.db, collectionName);
        yield (0, firestore_1.addDoc)(collectionRef, newData);
    }
    catch (error) {
        console.error(`Chyba při přidávání dat do ${collectionName}:`, error);
        throw error;
    }
});
exports.addData = addData;
// Aktualizace záznamu
const updateData = (collectionName, docId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = (0, firestore_1.doc)(firebase_1.db, collectionName, docId);
        yield (0, firestore_1.updateDoc)(docRef, updatedData);
    }
    catch (error) {
        console.error(`Chyba při aktualizaci dat v ${collectionName}:`, error);
        throw error;
    }
});
exports.updateData = updateData;
// Mazání záznamu
const deleteData = (collectionName, docId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = (0, firestore_1.doc)(firebase_1.db, collectionName, docId);
        yield (0, firestore_1.deleteDoc)(docRef);
    }
    catch (error) {
        console.error(`Chyba při mazání dat v ${collectionName}:`, error);
        throw error;
    }
});
exports.deleteData = deleteData;
exports.default = {
    getIncomes: exports.getIncomes,
    getExpenses: exports.getExpenses,
    addData: exports.addData,
    updateData: exports.updateData,
    deleteData: exports.deleteData,
};
