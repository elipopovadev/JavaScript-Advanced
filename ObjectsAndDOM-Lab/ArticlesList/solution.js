function createArticle() {

    let parentSection = document.getElementById('articles');
    let title = document.getElementById('createTitle');
    let content = document.getElementById('createContent');

    if (title.value != ' ' && content.value != ' ') {
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        newArticle.appendChild(h3);
        newArticle.appendChild(p);
        parentSection.appendChild(newArticle);

        h3.innerHTML = title.value;
        p.innerHTML = content.value;

        title.value = ' ';
        content.value = ' ';
    }
}



