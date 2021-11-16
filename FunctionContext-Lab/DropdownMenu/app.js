function solve() {
    let buttonForChooseStyle = document.getElementById('dropdown');
    let dropDownUnorderList = document.getElementById('dropdown-ul');
    let box = document.getElementById('box');

    buttonForChooseStyle.addEventListener('click', function () {   
        if(dropDownUnorderList.style.display !== 'block') {
            dropDownUnorderList.style.display = 'block';
        }

        else { 
            dropDownUnorderList.style.display = 'none';
            box.style.color = 'white';
            box.style.background = 'rgb(114, 112, 112)';
        }
    })

    dropDownUnorderList.addEventListener('click', e => {
        let color = e.target.textContent;
        box.style.color = 'black';
        box.style.background = color;
   })
}