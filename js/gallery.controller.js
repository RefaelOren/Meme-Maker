'use strict';

let gIsRandomImg = false;

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
    document.querySelector('.editor').classList.add('show-editor');
    document.querySelector('.gallery').classList.add('hide-gallery');
    document.querySelector('.saved-memes').classList.remove('show-memes');
    document.querySelector('.li-gallery').classList.remove('active');
    focusOnText();
    renderMeme();
}

function onHideEditor() {
    document.querySelector('.editor').classList.remove('show-editor');
    document.querySelector('.gallery').classList.remove('hide-gallery');
    document.querySelector('.main-nav').classList.remove('show-nav');
    document.querySelector('.screen').style.transform = 'translateX(-120%)';
    document.querySelector('.control-panel input').value = '';
    document.querySelector('.saved-memes').classList.remove('show-memes');
    document.querySelector('.li-gallery').classList.add('active');
    document.querySelector('.li-memes').classList.remove('active');
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
    document.querySelector('.main-nav').classList.add('show-nav');
    document.querySelector('.screen').style.transform = 'translateX(0)';
}

function onHideNav() {
    document.querySelector('.main-nav').classList.remove('show-nav');
    document.querySelector('.screen').style.transform = 'translateX(-120%)';
}

function onShowSavedMems() {
    document.querySelector('.saved-memes').classList.add('show-memes');
    document.querySelector('.li-gallery').classList.remove('active');
    document.querySelector('.li-memes').classList.add('active');
    document.querySelector('.main-nav').classList.remove('show-nav');
    document.querySelector('.screen').style.transform = 'translateX(-120%)';
    document.querySelector('.editor').classList.remove('show-editor');
    document.querySelector('.gallery').classList.add('hide-gallery');
    renderSavedMemes();
}

function getRandomImg() {
    document.querySelector('.li-gallery').classList.remove('active');
    let randomId = getRandomInt(1, 18);
    gIsRandomImg = true;
    onSelectImg(randomId);
    gIsRandomImg = false;
}
