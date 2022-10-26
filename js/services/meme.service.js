'use strict';

const gImgs = [
    {
        id: 1,
        url: 'img/gallery-imgs/1.jpg',
        keywords: ['funny', 'cat'],
    },
    {
        id: 2,
        url: 'img/gallery-imgs/2.jpg',
        keywords: ['cat', 'baby'],
    },
    {
        id: 3,
        url: 'img/gallery-imgs/3.jpg',
        keywords: ['animal', 'baby'],
    },
    {
        id: 4,
        url: 'img/gallery-imgs/4.jpg',
        keywords: ['animal', 'men'],
    },
    {
        id: 5,
        url: 'img/gallery-imgs/5.jpg',
        keywords: ['woman', 'men'],
    },
    {
        id: 6,
        url: 'img/gallery-imgs/6.jpg',
        keywords: ['woman', 'comic'],
    },
    {
        id: 7,
        url: 'img/gallery-imgs/7.jpg',
        keywords: ['smile', 'comic'],
    },
    {
        id: 8,
        url: 'img/gallery-imgs/8.jpg',
        keywords: ['woman', 'funny'],
    },
];

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 20,
            align: 'left',
            color: 'white',
        },
    ],
};

function getMeme() {
    return gMeme;
}

function setImg(id) {
    gMeme.selectedImgId = id;
    gMeme.lines = [{ txt: '', size: 25, align: 'left', color: 'white' }];
}

function getImgById(id) {
    const img = gImgs[id - 1];
    return img;
}

function setLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function createImgs() {}
