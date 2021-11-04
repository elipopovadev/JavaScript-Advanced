function lockedProfile() {
    let allRadios = document.querySelectorAll('input[type=radio]');

    for (const radio of allRadios) {
        radio.addEventListener("click", function () {
            if (radio.value = "unlock" && radio.checked) { 
                let profile = radio.parentElement;
                let buttonAboutContent = profile.lastElementChild;
                buttonAboutContent.addEventListener("click", function() {
                    let hidenFields = profile.lastElementChild.previousElementSibling;
                    if (buttonAboutContent.innerHTML == "Show more") {
                        hidenFields.style.display = "block";
                        buttonAboutContent.innerHTML = "Hide it";
                    } else {
                        hidenFields.style.display = "none";
                        buttonAboutContent.innerHTML = "Show more";
                    }
                });
            }
        })
    }
}


