"use strict";


/* const firebaseConfig = {
    // Put your own firebase configuration here

    apiKey: "AIzaSyC4qD7WEsY2nTF0I2Ap_6suZWfee_nLgWo",
    authDomain: "ghbiliapi.firebaseapp.com",
    projectId: "ghbiliapi",
    storageBucket: "ghbiliapi.appspot.com",
    messagingSenderId: "78307371409",
    appId: "1:78307371409:web:55b579f5a651e74467d230"

};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); */

const ghbiliApi = 'https://ghibliapi.herokuapp.com/films';
let movie;

async function fetchGhbiliApi(url) {
    const response = await fetch(url);
    // waits until the request completes...
    const movies = await response.json();
    console.log(movies);
    movie = movies[Math.floor(Math.random() * movies.length)];
    //console.log('movie is ', movie);
    renderMovie(movie);

    // const movieRef = collection(db, "movies");
    // await setDoc(doc(movieRef, movie.id), {
    //     like: 0,
    //     dislike: 0,
    //     comment: []
    // });
}

fetchGhbiliApi(ghbiliApi)



function renderMovie(movie) {
    const title = document.getElementById('movie__title');
    // console.log('renderMovie', movie)
    title.innerHTML = movie.title + '     ' + movie.original_title;

    const image = document.getElementById('movie__img');
    image.src = movie.image;

    const desc = document.getElementById('movie__description');
    desc.innerHTML = movie.description;
};

const refresh = document.getElementById('refresh')
refresh.addEventListener("click", nextPage());
function nextPage() {
    console.log('click');
    fetchGhbiliApi(ghbiliApi);
}
