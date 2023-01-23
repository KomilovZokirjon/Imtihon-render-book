let elForm = document.querySelector(".form")
let elEmail = document.querySelector(".email")
let elPas = document.querySelector(".pasInput")
let storage = window.localStorage

elForm.addEventListener("submit" , function (evt) {
    evt.preventDefault()

    let elValue = elEmail.value;
    let elPasValue = elPas.value;

    if (elValue === "zokirjonkomilov32@gmail.com" && elPasValue === "zokirjon009")  {

        window.location.replace("main.html")
    } else {
        alert("Parol yoki Login xato")
    }
})