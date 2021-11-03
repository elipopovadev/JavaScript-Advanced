function attachEventsListeners() {
    let convertButtons = document.querySelectorAll('[type = button]');

    for (const clickButton of convertButtons) {
        clickButton.addEventListener("click", function () {
            let IdclickedButton = clickButton.id;
            let inputValue = Number(clickButton.previousElementSibling.value);
            let arrayFromAnotherButtons = Array.from(convertButtons).filter(button => button.id !== clickButton.id);

            if (IdclickedButton = "daysBtn") {
                let days = inputValue;
                convertDaysToAnotherTime(arrayFromAnotherButtons, days);
            } else if (IdclickedButton = "hoursBtn") {
                let days = inputValue / 24;
                convertDaysToAnotherTime(arrayFromAnotherButtons, days);
            } else if (IdclickedButton = "minutesBtn") {
                let days = inputValue / 1440;
                convertDaysToAnotherTime(arrayFromAnotherButtons, days);
            } else if (IdclickedButton = "secondsBtn") {
                let days = inputValue / 86400;
                convertDaysToAnotherTime(arrayFromAnotherButtons, days);
            }
        })
    }


    function convertDaysToAnotherTime(arrayFromAnotherButtons, days) {
        for (const element of arrayFromAnotherButtons) {
            let thisId = element.id;
            let thisButton = document.getElementById(thisId);
            if (thisId === "daysBtn") {
                thisButton.previousElementSibling.value = days;
            } else if (thisId === "hoursBtn") {
                thisButton.previousElementSibling.value = days * 24;
            } else if (thisId === "minutesBtn") {
                thisButton.previousElementSibling.value = days * 1440;
            } else if (thisId === "secondsBtn") {
                thisButton.previousElementSibling.value = days * 86400;
            }
        }
    }
}
