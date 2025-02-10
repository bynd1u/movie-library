import data from "../data.js";
import dom from "../dom.js";
import createItem from "../components/createItem.js";

const loadHandler = () => {
    data.items.forEach((item) => {
        const movie = createItem(item);
        dom.itemsList.appendChild(movie);
    });
    }

export default loadHandler;