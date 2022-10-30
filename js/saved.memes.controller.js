'use strict';
let gIsMeme = false;

function renderSavedMemes() {
    const memes = getMemes();
    console.log(memes);
    const strHTML = memes
        .map(
            (meme) =>
                `
                    <img
                        src=${meme.url}
                        onclick="onEditMeme(this.id)"
                        alt="meme"
                        id="${meme.selectedImgId}"
                    />
       `
        )
        .join('');
    document.querySelector('.memes-container').innerHTML = strHTML;
}

function onEditMeme(id) {
    setEditMeme(id);
    document.querySelector('.editor').classList.add('show-editor');
    document.querySelector('.saved-memes').classList.remove('show-memes');
    document.querySelector('.li-memes').classList.remove('active');
    document.querySelector('.gallery').classList.add('hide-gallery');
    focusOnText();
    renderMeme();
}
