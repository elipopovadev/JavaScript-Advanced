function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let extraDiv = document.getElementById("extra");

    if(button.innerHTML === "MORE") {
     extraDiv.style.display = "block";
     button.innerHTML = "LESS";
    } else {
        extraDiv.style.display = "none";
        button.innerHTML = "MORE";
    }
}