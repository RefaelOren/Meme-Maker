'use strict';

const STORAGE_KEY = 'memesDB';

let gMemes;

function getMemes() {
    let memes = loadFromStorage(STORAGE_KEY);
    if (memes) gMemes = memes;
    return gMemes;
}

function setEditMeme(id) {
    console.log(gMemes);
    const meme = gMemes.find((meme) => +meme.selectedImgId === +id);
    gMeme = meme;
}

function updateSavedMemes(id) {
    let idx = gMemes.findIndex((meme) => meme.selectedImgId === id);
    console.log(idx);
    gMemes.splice(idx, 1);
    saveToStorage(STORAGE_KEY, gMemes);
}
