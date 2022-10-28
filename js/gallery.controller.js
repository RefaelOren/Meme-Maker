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
                        alt="meme"
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

function onHideEditor() {
    document.querySelector('.editor').classList.remove('show-editor');
    document.querySelector('.gallery').classList.remove('hide-gallery');
    document.querySelector('.main-nav').style.transform = 'translateY(-120%)';
    document.querySelector('.screen').style.transform = 'translateX(-120%)';
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

function onToggleNav() {
    document.querySelector('.main-nav').style.transform = 'translateY(0)';
    document.querySelector('.screen').style.transform = 'translateX(0)';
}

function onHideNav() {
    document.querySelector('.main-nav').style.transform = 'translateY(-120%)';
    document.querySelector('.screen').style.transform = 'translateX(-120%)';
}

function getRandomImg() {
    let randomId = getRandomInt(1, 18);
    onSelectImg(randomId);
}
