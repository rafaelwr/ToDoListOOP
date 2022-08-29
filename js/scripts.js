class ToDo {

    constructor() {
        this.totalTasks = document.querySelectorAll(".tasks").length;
    }

    addTask(taskText) {
        
        // clona template
        let template = document.querySelector(".task").cloneNode(true);

        // remove class hide
        template.classList.remove("hide");

        // manipular texto
        let templateText = template.querySelector(".task-title");
        templateText.textContent = taskText;

        let list = document.querySelector("#tasks-container");

        // inserir na linha
        list.appendChild(template);

        // adiciona evento nas tasks
        this.addEvents();

    }

    addEvents() {

        let removeBtns = document.querySelectorAll(".fa-trash");
        let removeBtn = removeBtns[removeBtns.length - 1];

        // adicionar evento de remover
        removeBtn.addEventListener("click", function() {
            todo.removeTask(this);
        });

        let doneBtns = document.querySelectorAll(".fa-check");
        let doneBtn = doneBtns[doneBtns.length - 1];

        // adicionar evento de remover
        doneBtn.addEventListener("click", function() {
            todo.completeTask(this);
        });

        this.checkTasks("add");
        
    }

    removeTask(task) {
        
        // Encontrar elemento parent, que é toda a div de task
        let taskElement = task.parentElement;

        // Remover task da lista
        taskElement.remove();

        this.checkTasks("remove");

    }

    completeTask(task) {
        
        task.classList.add("done");

    }

    checkTasks(command) {

        let msg = document.querySelector("#empty-tasks");

        // Lógica de ajustar o contador de tasks
        if(command === "add"){
            this.totalTasks += 1;
        }else if(command === "remove"){
            this.totalTasks -= 1;
        }

        // se exibe a mensagem de que não há tasks
        if(this.totalTasks == 1){
            msg.classList.remove("hide");
        }else{
            msg.classList.add("hide");
        }

    }

}

let todo = new ToDo();

// events

let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function(e){
    e.preventDefault();

    let taskText = document.querySelector("#task");

    if(taskText.value != ""){
        todo.addTask(taskText.value);
    }

    // Limpa campo de texto
    taskText.value = '';
});