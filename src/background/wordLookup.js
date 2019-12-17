const langs = require('langs');
import wiktionaryQuery from './wiktionary.js';

function handleWordLookup(word) {
    /* const language = (langs.where("1", langcode) || { name: "English"}).name;
     * browser.tabs.query({ active: true, currentWindow: true }).then(tabs => {
     *     const curTabIndex = tabs[0].index;
     *     browser.tabs.create({
     *         url: "https://en.wiktionary.org/w/index.php?search=" + encodeURIComponent(word) + "#" + encodeURIComponent(language),
     *         index: curTabIndex + 1
     *     });
     * }); */
    return wiktionaryQuery(word);
}

export default handleWordLookup;
