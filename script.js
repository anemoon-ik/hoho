// console.log(document.getElementById("title"))
function sayHello() {
    var name = document.getElementById("name").value;
    var message = "Здарова " + name + ", бүгүн баскетке келесиңби?"

    document.getElementById("content").textContent = message;
}



