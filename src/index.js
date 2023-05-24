import './style.css';
import movie from './assets/movie.png';
import postComments from './modules/postCommnets.js';

const logo = document.getElementById('logo');
logo.src = movie;

const container = document.getElementById('cont');
container.appendChild(logo);

// submitting commnets
const submit = document.querySelector('.submit');
const userInput = document.getElementById('user-Input');
const userComment = document.getElementById('user-comment');

// closing the comment section
const closeBtn = document.getElementById('close-button');
const showMovie = document.getElementById('movie');

closeBtn.addEventListener('click', () => {
  showMovie.style.display = 'none';
});

// get data from Api
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  return data;
};

getData();

// display pokemon data
const items = document.getElementById('items');

const populateData = async () => {
  const data = await getData();
  const limit = 12;
  data.forEach((data, i) => {
    if (i < limit) {
      items.innerHTML += `
        <div class="poke">
            <img id="image" src=${data.image.medium}>
            <div class="pop">
                <div>
                    <p>${data.name}</p>
                    <button class="commentBtn" data-index="${i}">comment</button>
                </div>
                <i class="fa-regular fa-heart likeBtn" data-index="${i}"></i>
            </div>
        </div>
        `;
    }
  });
};

populateData();

items.addEventListener('click', async (event) => {
  if (event.target.classList.contains('commentBtn')) {
    const index = parseInt(event.target.dataset.index, 10);
    const data = await getData();
    const selectedMovie = data[index];

    const showinfo = document.getElementById('showinfo');
    showinfo.innerHTML = `
        <img class="pop-img" src=${selectedMovie.image.medium}>
        <p class="movieName">${selectedMovie.name}</p>
        <div class="info">
            <p class="sum">LANGUAGE: ${selectedMovie.language}</p>
            <p class="sum">STATUS: ${selectedMovie.status}</p>
            <p class="sum">PREMIERED: ${selectedMovie.premiered}</p>
            <p class="sum">ENDED: ${selectedMovie.ended}</p>
        </div>
        `;

    const showMovie = document.getElementById('movie');
    showMovie.style.display = 'block';

    submit.addEventListener('click', async (e) => {
      e.preventDefault();
      await postComments(selectedMovie.id, userInput.value, userComment.value);
      userComment.value = '';
      userInput.value = '';
    });
  }

  if (event.target.classList.contains('likeBtn')) {
    // const index = parseInt(event.target.dataset.index, 10);
    // console.log(index);
  }
});