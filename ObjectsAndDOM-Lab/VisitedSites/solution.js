function solve() {
let count = 0;
let linkElements = document.querySelectorAll('.link-1 a')
for (const item of linkElements) {
    item.addEventListener('click',onLinkElementClick)
     };

     function onLinkElementClick(e) {
        let p = e.currentTarget.nextElementSibling;
        let count = Number(p.innerText.split(' ')[1]);
       count++;
       p.innerText = `visited ${count} times`;
     }
}

