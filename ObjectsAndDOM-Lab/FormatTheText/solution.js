function solve() {
    let inputSection = document.getElementById('input');
    let sentences = inputSection.innerHTML.split('.');
    sentences.pop();
    let outputSection = document.getElementById('output');

    for (let index = 0; index < sentences.length; index += 3) {  
        let createdParagraph = document.createElement('p');   
        sentences[index]? createdParagraph.innerHTML += sentences[index] + '.' : null;
        sentences[index + 1]? createdParagraph.innerHTML += sentences[index + 1] + '.' : null;
        sentences[index + 2]? createdParagraph.innerHTML += sentences[index + 2] + '.': null;
        outputSection.appendChild(createdParagraph);
    }
}


