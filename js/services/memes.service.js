'use strict';

const STORAGE_KEY = 'memesDB';

let gMemes = [];

function getMemes() {
    let memes = loadFromStorage(STORAGE_KEY);
    console.log(memes);

    if (memes) gMemes = memes;
    return gMemes;
}
