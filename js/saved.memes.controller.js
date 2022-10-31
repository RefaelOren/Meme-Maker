'use strict';
let gIsMeme = false;

function renderSavedMemes() {
    const memes = getMemes();
    console.log(memes);
    const strHTML = memes
        .map(
            (meme) =>
                `<div class="saved-meme-wrapper">
                <img
                    src=${meme.url}
                    alt="meme"
                />
                <div class="edit-screen">
                   <span onclick="onEditMeme(${meme.selectedImgId})">edit</span>
                   <span onclick="onDeleteMeme(${meme.selectedImgId})">delete</span>
                </div>
            </div>    
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

function onDeleteMeme(id) {
    console.log('hey');
    console.log(gMemes);
    updateSavedMemes(id);
    renderSavedMemes();
    showMsg('Meme deleted');
}
