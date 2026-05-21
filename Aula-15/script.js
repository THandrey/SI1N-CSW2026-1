document.writeln("Olá, Mundo!");
document.writeln("<h2>Bem-Vindo ao JavaScript</h2>");
window.alert("Está é uma mensagem de alerta!");
document.getElementById("title").innerHTML= "Aprendendo JavaScript com o melhor professor da UVV!!!";

let name = prompt("Digite seu nome:");

document.getElementById("novafrase").innerHTML = "Olá, "+ name +"! Seja bem-vindo ao JavaScript!";
document.getElementById("novafrase").style.color = "LightGreen";
document.getElementById("novafrase").style.fontSize = "80px";


function exibirmensagem() {
    let nome = document.getElementById("nome").value;
    document.getElementById("novafrase").innerHTML = "Olá, "+ nome +"! Seja bem-vindo ao JavaScript!";
    document.getElementById("novafrase").style.color = "Green";
    document.getElementById("novafrase").style.fontSize = "50px";
}