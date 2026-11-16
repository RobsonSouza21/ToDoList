const inputText = document.querySelector("#inputTexto");
const newTaksButton = document.querySelector(".newTask");
const lista = document.querySelector("#tasklist");
let tarefas = [];

newTaksButton.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        const novaTask = document.createElement("li");
        const checkBox = document.createElement("input");
        const texto = document.createElement("span");
        const botaoDelete = document.createElement("button");

        checkBox.type = "checkbox";
        botaoDelete.className = "deleteTask";
        botaoDelete.textContent = "Excluir";

        const tarefa = {
            texto: inputText.value,
            concluida: false
        };
        
        tarefas.push(tarefa);
        salvarTarefas();

        checkBox.addEventListener("change", () => {
            tarefa.concluida = checkBox.checked;
            if (checkBox.checked) {
                texto.classList.add("completed");
                console.log("Tarefa Concluida!")
            } else {
                texto.classList.remove("completed");
            };
            salvarTarefas();
        });

        botaoDelete.addEventListener("click", () => {
            novaTask.remove();
            tarefas = tarefas.filter(dados => dados !== tarefa);
            salvarTarefas();
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

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

function carregarTarefas() {
    const dados = localStorage.getItem("tarefas");

    if (dados !== null) {
        tarefas = JSON.parse(dados);
    }
};