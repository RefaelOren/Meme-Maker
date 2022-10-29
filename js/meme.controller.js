'use strict';
let gElCanvas;
let gCtx;
let gIsSaving = false;

gElCanvas = document.querySelector('.canvas');
gCtx = gElCanvas.getContext('2d');

function renderMeme() {
    const meme = getMeme();
    const currImg = getImgById(meme.selectedImgId);
    const img = new Image();
    img.src = currImg.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        const lines = meme.lines;
        let currLineIdx = meme.selectedLineIdx;
        lines.forEach(({ txt, size, cords, align, color, font, stroke }) => {
            drawText(txt, cords.x, cords.y, size, color, font, align, stroke);
        });
        if (gIsSaving) return;
        drawTextOutLine(
            lines[currLineIdx].cords.x,
            lines[currLineIdx].cords.y,
            lines[currLineIdx].size
        );
    };
}

function drawText(text, x, y, size, color, font, align, stroke) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = stroke;
    gCtx.fillStyle = color;
    gCtx.font = `${size}px ${font}`;
    gCtx.textAlign = align;
    if (align === 'center') x = gElCanvas.width / 2;
    else if (align === 'right') x = gElCanvas.width;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function drawTextOutLine(x, y, fontSize) {
    gCtx.strokeStyle = 'yellow';
    gCtx.lineWidth = 2;
    gCtx.strokeRect(x - 3, y - fontSize, gElCanvas.width - 15, fontSize + 5);
}

function onTyping(txt) {
    setLineText(txt);
    renderMeme();
}

function onAddLine() {
    setNewLine();
    document.querySelector('.control-panel input').value = '';
    renderMeme();
    focusOnText();
}

function onSwitchLine() {
    setCurrLine();
    document.querySelector('.control-panel input').value =
        gMeme.lines[gMeme.selectedLineIdx].txt;
    renderMeme();
    focusOnText();
}

function onClearLine() {
    setClearLine();
    document.querySelector('.control-panel input').value = '';
    renderMeme();
    focusOnText();
}

function onSaveMeme() {
    gIsSaving = true;
    renderMeme();
    setTimeout(() => {
        saveMeme();
        gIsSaving = false;
    }, 500);
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

function onSelectFont(font) {
    setFont(font);
    renderMeme();
}

function onDownloadImg(elLink) {
    gIsSaving = true;
    renderMeme();
    setTimeout(() => {
        const imgContent = gElCanvas.toDataURL('image/jpeg'); //
        elLink.href = imgContent;
        gIsSaving = false;
    }, 500);
}

function onUploadImg() {
    gIsSaving = true;
    renderMeme();
    setTimeout(() => {
        gIsSaving = false;
    }, 500);
    uploadImg();
}

function focusOnText() {
    document.querySelector('.control-panel input').focus();
}
