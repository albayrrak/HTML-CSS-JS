const hesapla = document.getElementById("hesapla");

hesapla.addEventListener("click", () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    let images = document.getElementById("images");
    let result = document.querySelector(".result p");
    let bmi = weight / (((height / 100) * height) / 100);
    result.innerHTML = bmi.toFixed(2);

    if (bmi < 18.5) {
        images.innerHTML = `<img src="img/zayif.jpg">`;
    } else if (bmi < 25) {
        images.innerHTML = `<img src="img/normal.jpg">`;
    } else if (bmi < 30) {
        images.innerHTML = `<img src="img/kilolu.jpg">`;
    } else if (bmi < 35) {
        images.innerHTML = `<img src="img/obez.jpg">`;
    } else if (bmi >= 35) {
        images.innerHTML = `<img src="img/super-obez.jpg">`;
    } else {
        images.innerHTML = `<h4>Lütfen Değer Giriniz</h4>`;
    }
});
