'use strict';

function renderSavedMemes() {
    const memes = getMemes();
    const strHTML = memes
        .map(
            (meme) =>
                `
                    <img
                        src=${meme.url}
                        onclick="onSelectImg(this.id)"
                        alt="meme"
                        id="${meme.id}"
                    />
       `
        )
        .join('');
    document.querySelector('.memes-container').innerHTML = strHTML;
}
