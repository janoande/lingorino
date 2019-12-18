import wiktionaryQuery from './wiktionary.js';

function formatWordDefinition(wikiWord, langcode) {
    return wikiWord[langcode][0].definitions.map(x => x.definition).join("<br/>");
}

async function handleWordLookup(word, langcode) {
    let wordDefinition = await wiktionaryQuery(word);
    if (!wordDefinition || !wordDefinition[langcode] || wordDefinition.detail === "Page or revision not found.") {
        throw new Error(`Definition not found for "${word}".`);
    }
    return formatWordDefinition(wordDefinition, langcode);
}

export default handleWordLookup;
