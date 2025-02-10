import data from '../data.js';
import dom from '../dom.js';
import loadHandler from '../handlers/loadHandler.js';

const loadEvent = () => {
    document.addEventListener("DOMContentLoaded", loadHandler);
}

export default loadEvent;