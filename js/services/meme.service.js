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
        keywords: ['women', 'men'],
    },
    {
        id: 6,
        url: 'img/gallery-imgs/6.jpg',
        keywords: ['women', 'comic'],
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
        keywords: ['women', 'funny'],
    },
    {
        id: 12,
        url: 'img/gallery-imgs/12.jpg',
        keywords: ['women', 'funny'],
    },
    {
        id: 13,
        url: 'img/gallery-imgs/13.jpg',
        keywords: ['cat', 'funny'],
    },
    {
        id: 14,
        url: 'img/gallery-imgs/14.jpg',
        keywords: ['women', 'funny'],
    },
    {
        id: 15,
        url: 'img/gallery-imgs/15.jpg',
        keywords: ['cat', 'funny'],
    },
    {
        id: 16,
        url: 'img/gallery-imgs/16.jpg',
        keywords: ['men', 'funny'],
    },
    {
        id: 17,
        url: 'img/gallery-imgs/17.jpg',
        keywords: ['animal', 'funny'],
    },
    {
        id: 18,
        url: 'img/gallery-imgs/18.jpg',
        keywords: ['men', 'funny'],
    },
];

const gKeywordsFontSize = {
    funny: 12.8,
    animal: 12.8,
    men: 12.8,
    women: 12.8,
    cat: 12.8,
};

let gFilterBy = { txt: '', keyword: '' };

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 35,
            align: 'left',
            color: 'white',
            font: 'poppins',
            stroke: 'black',
            cords: { x: 10, y: 5 },
        },
    ],
};

function getImgs() {
    let imgs = [];
    gImgs.forEach((img) => {
        if (
            img.keywords[0].includes(gFilterBy.txt.toLowerCase()) ||
            img.keywords[1].includes(gFilterBy.txt.toLowerCase())
        )
            imgs.push(img);
    });

    if (gFilterBy.keyword) {
        let filterEdImgs = imgs.filter((img) =>
            img.keywords.includes(gFilterBy.keyword)
        );
        return filterEdImgs;
    }
    return imgs;
}

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
            font: 'poppins-ex-bold',
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
        size: 30,
        align: 'left',
        color: 'white',
        font: 'poppins-ex-bold',
        cords: { x: 10, y: 285 },
    });
}

function saveMemeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setFilter(filterBy) {
    gFilterBy.txt = filterBy;
}

function setFilterByKeyWord(keyword) {
    gFilterBy.keyword = keyword;
    gKeywordsFontSize[keyword] += 5;
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}
