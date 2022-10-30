'use strict';

const STORAGE_KEY = 'memesDB';

let gMemes = [];

function getMemes() {
    let memes = loadFromStorage(STORAGE_KEY);
    console.log(memes);

    if (memes) gMemes = memes;
    return gMemes;
}

function setEditMeme(id) {
    console.log(gMemes);
    const meme = gMemes.find((meme) => +meme.selectedImgId === +id);
    gMeme = meme;
    debugger;
}
