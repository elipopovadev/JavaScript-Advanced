function create(words) {
    let contentElement = document.getElementById("content");

    for (const word of words) {
        let divElement = document.createElement("div");
        let pElement = document.createElement("p");
        pElement.innerHTML = word;
        pElement.style.display = 'none';
        divElement.appendChild(pElement);

        divElement.addEventListener("click", e => {
            pElement.style.display = 'block';
        });

        contentElement.appendChild(divElement);
    }
}