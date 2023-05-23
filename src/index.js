import './style.css';

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
            <p>${data.name}</p>
            <button class="commentBtn" data-index="${i}">comment</button>
        </div>
        `;
    }
  });
};

populateData();