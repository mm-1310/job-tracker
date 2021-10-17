import React, { Component } from "react"
import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import Title from './components/Title'
import Form from './components/Form'
import DisplayData from "./components/DisplayData";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8WQdixTkFOGEc1srpr7u9fI2-w08NkvQ",
    authDomain: "jobs-tracker-2a61a.firebaseapp.com",
    projectId: "jobs-tracker-2a61a",
    storageBucket: "jobs-tracker-2a61a.appspot.com",
    messagingSenderId: "535552249481",
    appId: "1:535552249481:web:5853c5b543defb88728058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class App extends Component {
    render() {
        return (
            <div className="main">
                <Title />

                <div style={{width: 'calc(100% - 200px)', margin: '50px auto 0 auto'}}>
                    <Form />
                    <DisplayData />
                </div>
            </div>
        )
    }
}

export default App
