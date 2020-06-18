
function renderEditor(){
    let inputEl = document.querySelector("#default-todo-panel .todo-editor > input");
    // inputE1.onchange  = (e) =>{
    //     console.log("text,",e.target.value);
    // };

    let addEl = document.querySelector("#default-todo-panel .todo-editor > button");
    addEl.onclick = (e) => {
        console.log("add click");
        let newTask = {
            title: inputE1.value,
            done:false,
        };

        inputE1.value  = "";

        task.push(newTask);

        console.log("task: ",tasks);

        renderTaskItems();
        };
    }
}