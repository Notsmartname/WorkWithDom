function checkingElem(boxes, checkBoxes) {
    for (const elem of boxes) {
        if (!document.querySelector(elem)) {
            return false;
        }
    }
    return true;
}

function setColorItem(items, color) {
    for (let i = 0; i < items.length; i++) {
        items[i].style.background = color;
    }
}

let items = document.querySelectorAll('.item');
const boxes = [
    '.box__red',
    '.box__yellow',
    '.box__powderblue',
    '.box__black',
    '.box__reset',
];

const colors = [
    'red',
    'yellow',
    'powderblue',
    'black',
    'none',
];


checkBoxes = checkingElem(boxes);

if (checkBoxes) {
    for (let i = 0; i < boxes.length; i++) {
        box = document.querySelector(boxes[i]);
        box.addEventListener("click", () => {
            setColorItem(items, colors[i])
            document.body.style.background = colors[i];
        });        
    }
}



