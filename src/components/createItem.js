const createItem = (movie) => {
  const item = document.createElement('div');
  item.classList.add('movie-item');
  item.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h2 class="title" >${movie.title}</h2>
  `;
  return item;
}

export default createItem;