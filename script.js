function getName() {
    const name = askName();
    if (name != null) {
        document.getElementById("user-name").innerHTML = "Hola " + name; 
    }
}

function askName() {
    return prompt("¿Cual es tu nombre?");
}
