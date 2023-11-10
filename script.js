function changeName() {
    const name = prompt("¿Cual es tu nombre?");
    if (name != null) {
        document.getElementById("user-name").innerHTML = "Hola " + name; 
    }
}
