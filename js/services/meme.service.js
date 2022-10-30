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
        keywords: ['women', 'anima'],
    },
    {
        id: 7,
        url: 'img/gallery-imgs/7.jpg',
        keywords: ['smile', 'comic'],
    },
    {
        id: 8,
        url: 'img/gallery-imgs/8.jpg',
        keywords: ['woman', 'dog'],
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
        keywords: ['women', 'dog'],
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
        keywords: ['cat', 'anima'],
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
    dog: 12.8,
    anima: 12.8,
};

let gFilterBy = { txt: '', keyword: '' };

let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    url: '',
    lines: [
        {
            txt: '',
            size: 35,
            align: 'left',
            color: 'white',
            font: 'impact',
            stroke: 'black',
            cords: { x: 10, y: 5 },
        },
    ],
};

function getImgs() {
    let imgs = [];
    // filter by txt
    gImgs.forEach((img) => {
        if (
            img.keywords[0].includes(gFilterBy.txt.toLowerCase()) ||
            img.keywords[1].includes(gFilterBy.txt.toLowerCase())
        )
            imgs.push(img);
    });
    // filter by keywords
    if (gFilterBy.keyword && gFilterBy.keyword !== 'all') {
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
            txt: 'Text here...',
            size: 30,
            align: 'center',
            color: 'white',
            font: 'impact',
            stroke: 'black',
            cords: { x: 10, y: 50 },
        },
    ];
    if (gIsRandomImg) {
        let currLine = gMeme.lines[0];
        currLine.txt = makeLorem(2);
        currLine.size = getRandomInt(20, 35);
        currLine.color = getRandomColor();
        currLine.stroke = getRandomColor();
    }
}

function getImgById(id) {
    const img = gImgs[id - 1];
    return img;
}

function setLineText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setCurrLine() {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx = gMeme.lines.length - 1;
        return;
    }
    gMeme.selectedLineIdx -= 1;
}

function setClearLine() {
    gMeme.lines[gMeme.selectedLineIdx].txt = '';
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
    console.log(gMeme.lines[gMeme.selectedLineIdx]);
}

function setNewLine() {
    if (gMeme.selectedLineIdx === 2) return;
    gMeme.lines.push({
        txt: '',
        size: 30,
        align: 'left',
        color: 'white',
        font: 'impact',
        cords: { x: 10, y: 285 },
        stroke: 'black',
    });
    gMeme.selectedLineIdx += 1;
    if (gMeme.lines.length > 2) {
        gMeme.lines[gMeme.selectedLineIdx].cords.x = 10;
        gMeme.lines[gMeme.selectedLineIdx].cords.y = 175;
    }
}

function setFilter(filterBy) {
    gFilterBy.txt = filterBy;
}

function setFilterByKeyWord(keyword) {
    gFilterBy.keyword = keyword;
    if (gKeywordsFontSize[keyword] > 25) return;
    gKeywordsFontSize[keyword] += 5;
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function saveMeme() {
    let image = gElCanvas.toDataURL(`image/png`);
    gMeme.url = image;
    let savedMeme = JSON.parse(JSON.stringify(gMeme));
    gMemes.unshift(savedMeme);

    console.log(gMemes);
    saveToStorage(STORAGE_KEY, gMemes);
}
