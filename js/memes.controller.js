'use strict';
let gIsMeme = false;

function renderSavedMemes() {
    const memes = getMemes();
    const strHTML = memes
        .map(
            (meme) =>
                `
                    <img
                        src=${meme.url}
                        onclick="onSelectMeme(this.id)"
                        alt="meme"
                        id="${meme.id}"
                    />
       `
        )
        .join('');
    document.querySelector('.memes-container').innerHTML = strHTML;
}

function onSelectMeme(id) {}
