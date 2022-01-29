const copy = document.getElementById("copy-url");
//console.log(copy);
let alertDiv = document.createElement("div");

function notification(msg, className = "success") {
    let clearDiv = document.querySelector(".alert");
    if (clearDiv) {
        clearDiv.parentNode.removeChild(clearDiv);
    }

    alertDiv.className = "alert " + className;
    alertDiv.innerHTML = msg;
    document.querySelector(".popup").appendChild(alertDiv);

    setTimeout(() => alertDiv.classList.add("active"), 1);
    setTimeout(() => alertDiv.classList.remove("active"), 1000);
}

copy.addEventListener("click", copyUrl);

function copyUrl() {
    let input = document.getElementById("input-url");
    input.select();
    document.execCommand("copy");
    if (input.value === "") {
        notification("Error Link", "error");
    } else {
        notification("Success copy Link");
    }
}
