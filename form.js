import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js'

const firebaseConfig = {
    apiKey: "AIzaSyDHZR3PomFbTDaMb2gF_qq-hKKLgVCjHmM",
    authDomain: "rivjera-57388.firebaseapp.com",
    projectId: "rivjera-57388",
    storageBucket: "rivjera-57388.appspot.com",
    messagingSenderId: "742671196740",
    appId: "1:742671196740:web:5014d4574df7de1a8e5211",
    measurementId: "G-6BK47EKEE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
gsap.from('.registration-block', {
    duration: 1, y: '100%'
})
const formData = {};

// used event deligation for taking input field data
document.querySelector('.form').addEventListener('input', (e) => {
    if (e.target.name === "kamb") {
        if (e.target.checked) {
            formData[e.target.name] = formData[e.target.name] ? [...new Set([...formData[e.target.name], e.target.value])] : [e.target.value]
        } else {
            const filteredData = formData.kamb.filter(val => val !== e.target.value);
            formData.kamb = [...filteredData];
        }
    } else {
        formData[e.target.name] = e.target.value;

    }
});

document.querySelector(".registruotis-btn").onclick = function (e) {
    e.preventDefault();
    set(ref(db, `${formData.email.split('@')[0] || 'Ananomous'}${Math.floor(Math.random() * 100)}`), {
        ...formData
    }).then(() => {
        alert('Data Added');
        document.querySelector(".form").reset();
    }).catch(error => {
        console.log(error)
    })
}
