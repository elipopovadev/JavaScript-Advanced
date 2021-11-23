function getArticleGenerator(articles) {
    let content = document.getElementById('content');
    let index = 0;

    return function () {
        if (index < articles.length) {
            let newArticle = document.createElement('article');
            newArticle.textContent = articles[index];
            content.insertBefore(newArticle, content.firstChild);
            index++;
        }
    }
}

