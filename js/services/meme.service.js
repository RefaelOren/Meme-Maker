'use strict';

const gImgs = [
    {
        id: 1,
        url: 'http://127.0.0.1:5500/img/gallery-imgs/1.jpg',
        keywords: ['funny', 'cat'],
    },
    {
        id: 2,
        url: 'http://127.0.0.1:5500/img/gallery-imgs/2.jpg',
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
    {
        id: 9,
        url: 'img/gallery-imgs/9.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 10,
        url: 'img/gallery-imgs/10.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 11,
        url: 'img/gallery-imgs/11.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 12,
        url: 'img/gallery-imgs/12.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 13,
        url: 'img/gallery-imgs/13.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 14,
        url: 'img/gallery-imgs/14.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 15,
        url: 'img/gallery-imgs/15.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 16,
        url: 'img/gallery-imgs/16.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 17,
        url: 'img/gallery-imgs/17.jpg',
        keywords: ['woman', 'funny'],
    },
    {
        id: 18,
        url: 'img/gallery-imgs/18.jpg',
        keywords: ['woman', 'funny'],
    },
];

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 30,
            align: 'left',
            color: 'white',
            stroke: 'black',
            cords: { x: 10, y: 5 },
        },
    ],
};

function getMeme() {
    return gMeme;
}

function setImg(id) {
    gMeme.selectedImgId = id;
    gMeme.selectedLineIdx = 0;
    gMeme.lines = [
        {
            txt: '',
            size: 35,
            align: 'left',
            color: 'white',
            stroke: 'black',
            cords: { x: 10, y: 50 },
        },
    ];
}

function getImgById(id) {
    const img = gImgs[id - 1];
    return img;
}

function setLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setFontColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function setFontStroke(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color;
}

function setFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
}

function setAlignTxt(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align;
}

function setNewLine() {
    gMeme.lines.push({
        txt: '',
        size: 20,
        align: 'left',
        color: 'white',
        cords: { x: 10, y: 285 },
    });
}

function saveMemeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}
