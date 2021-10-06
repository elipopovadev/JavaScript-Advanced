function growingWord() {
    let paragraph = document.querySelector("#exercise > p");
    if (!paragraph.style.fontSize) {
        paragraph.style.fontSize = "2px";
    }
    else {
        paragraph.style.fontSize = parseInt(paragraph.style.fontSize) * 2 + 'px';
    }

    let colorsElements = document.querySelector("#exercise > #colors");
    let firstColor = colorsElements.firstElementChild;
    let currentColor = colorsElements.firstElementChild.innerHTML.toLowerCase();
    paragraph.style.color = currentColor;
    colorsElements.appendChild(firstColor);
}