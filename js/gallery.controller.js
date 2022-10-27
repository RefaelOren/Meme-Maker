'use strict';

function onInit() {
    renderGallery();
}

function renderGallery() {
    const imgs = getImgs();

    const strHTML = imgs
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

function onSelectImg(id) {
    setImg(id);
    renderMeme();
    document.querySelector('.editor').classList.add('show-editor');
    document.querySelector('.gallery').classList.add('hide-gallery');
}

function onSetFilterByText(filterBY) {
    setFilter(filterBY);
    renderGallery();
}

function onSetFilterByKeyWord(keyword) {
    setFilterByKeyWord(keyword);
    document.querySelector(
        `.${keyword}`
    ).style.fontSize = `${gKeywordsFontSize[keyword]}px`;
    renderGallery();
}
