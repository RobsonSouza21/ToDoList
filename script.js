const inputText = document.querySelector("#inputTexto");
const newTaksButton = document.querySelector(".newTask");
const lista = document.querySelector("#tasklist");

newTaksButton.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        const novaTask = document.createElement("li");
        novaTask.textContent = inputText.value;
        lista.appendChild(novaTask);
        inputText.value = "";
        console.log("Tarefa Adiciona!")
    } else {
        console.warn("O campo da tarefa nao pode estar vazio!");
    }; 
});