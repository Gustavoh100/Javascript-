


const footer = document.getElementById("footer")
//footer.style.color = "red"

const novoTitulo = document.createElement("h2")
novoTitulo.textContent = "Um novo Titulo"
//console
footer.appendChild(novoTitulo)

const header = document.getElementById("exemplo")
header.appendChild(novoTitulo)

header.addEventListener("click", () => {
    alert("batata")
})

