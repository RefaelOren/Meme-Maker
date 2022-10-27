'use strict';
let gElCanvas;
let gCtx;

gElCanvas = document.querySelector('.canvas');
gCtx = gElCanvas.getContext('2d');

function renderMeme() {
    const meme = getMeme();
    const currImg = getImgById(meme.selectedImgId);
    const img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        const lines = meme.lines;
        lines.forEach(({ txt, size, cords, align, color, stroke }) => {
            drawText(txt, cords.x, cords.y, size, color, align, stroke);
        });
    };
    img.src = currImg.url;
}

function drawText(text, x, y, size, color, align, stroke) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = stroke;
    gCtx.fillStyle = color;
    gCtx.font = `${size}px poppins-ex-bold`;
    gCtx.textAlign = align;
    if (align === 'center') x = gElCanvas.width / 2;
    else if (align === 'right') x = gElCanvas.width;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function onTyping(txt) {
    setLineText(txt);
    renderMeme();
}

function onChangeColor(color) {
    document.querySelector('.fill-btn').style.color = color;
    setFontColor(color);
    renderMeme();
}

function onChangeStroke(color) {
    document.querySelector('.stroke-btn').style.color = color;
    setFontStroke(color);
    renderMeme();
}

function onChangeFontSize(diff) {
    setFontSize(diff);
    renderMeme();
}

function onAlignTxt(align) {
    console.log('hey', align);
    setAlignTxt(align);
    renderMeme();
}

function onAddLine() {
    setNewLine();
}

function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg'); //
    elLink.href = imgContent;
}
