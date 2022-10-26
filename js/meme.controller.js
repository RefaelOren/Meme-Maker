'use strict';
let gElCanvas;
let gCtx;
gElCanvas = document.querySelector('.canvas');
gCtx = gElCanvas.getContext('2d');

function renderMeme() {
    const meme = getMeme();
    const currImg = getImgById(meme.selectedImgId);
    console.log(currImg);

    const img = new Image();
    img.src = currImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        let currTxt = meme.lines[meme.selectedLineIdx].txt;
        let currFontSize = meme.lines[meme.selectedLineIdx].size;
        drawText(currTxt, 10, 50, currFontSize);
    };
}

function drawText(text, x, y, size) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = `${size}px poppins-ex-bold`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function onTyping(txt) {
    console.log('hello', txt);
    setLineText(txt);
    renderMeme();
}
