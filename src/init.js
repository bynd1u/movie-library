import loadEvent from './events/loadEvent.js';
import dom from './dom.js';


loadEvent();

dom.input.addEventListener('keyup', () => {
    const searchValue = dom.input.value.toLowerCase();
    const items = document.querySelectorAll('.movie-item');
    items.forEach((item) => {
        const title = item.querySelector('.title').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
