import { initializeApp } from "firebase/app";

// методы для авторизации
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// методы для продуктов и т.п. (позже изменим)
import { getDatabase, ref } from "firebase/database";



const firebaseConfig = {
    apiKey: "AIzaSyCS7-Juf7ryrfdp41iQ-HiQW7MvQXd5qcg",
    authDomain: "goodfood-87bfe.firebaseapp.com",
    projectId: "goodfood-87bfe",
    storageBucket: "goodfood-87bfe.appspot.com",
    messagingSenderId: "292874348380",
    appId: "1:292874348380:web:bad6fa6bf590157641c399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// получаем нашего юзера и передаем инициализацию нашего проекта, для того 
//чтоб от нашего приложения мы получали конкретного юзера
export const firebaseAuth = getAuth(app)

// передаем данные (авторизация, регистрация и логаут(разлогиниться))
export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)