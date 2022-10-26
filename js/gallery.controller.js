'use strict';

function onInit() {
    renderGallery();
}

function renderGallery() {
    const strHTML = gImgs
        .map(
            (img) =>
                `
                    <img
                        src=${img.url}
                        onclick="onSelectImg(this.id)"
                        alt=""
                        id="${img.id}"
                    />
    
        `
        )
        .join('');
    document.querySelector('.img-container').innerHTML = strHTML;
}

function onSelectImg(imgId) {
    console.log(imgId);
    setImg(imgId);
    renderMeme();
}
