const inputText = document.querySelector("#inputTexto");
const newTaksButton = document.querySelector(".newTask");
const lista = document.querySelector("#tasklist");

newTaksButton.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        const novaTask = document.createElement("li");
        const checkBox = document.createElement("input");
        const texto = document.createElement("span");
        const botaoDelete = document.createElement("button");

        checkBox.type = "checkbox";
        botaoDelete.className = "deleteTask";
        botaoDelete.textContent = "Excluir";

        checkBox.addEventListener("change", () => {
            if (checkBox.checked) {
                texto.classList.add("completed");
                console.log("Tarefa Concluida!")
            } else {
                texto.classList.remove("completed")
            };
        });

        botaoDelete.addEventListener("click", () => {
            novaTask.remove();
            console.log("Tarefa Removida!")
        });

        texto.textContent = inputText.value;
        novaTask.append(checkBox, texto, botaoDelete);
        lista.appendChild(novaTask);
        inputText.value = "";
        console.log("Tarefa Adiciona!")
    } else {
        console.warn("O campo da tarefa nao pode estar vazio!");
    }; 
});

