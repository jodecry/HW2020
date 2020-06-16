
let task = []; //{title:"ddddd",done,false}

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


function renderTaskItems(){
    console.log("render items");
    let itemsEl = document.querySelector("#default-todo-panel .todo-items");

    for(let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let itemEl = document.createElement("div");
   

        let doneEl = document.createElement("input");
        doneEl.type = "checkbox";
        itemEl.append(doneEl);

        let titleEl = document.createElement("label");
        titleEl.innerText = task.title;
        itemEl.append(titleEl);

        let cancelEl = document.createElement("button");
        cancelEl.innerText = "X";
        itemEl.append(cancelEl);

        itemEl.append(itemEl);

    }

}

renderEditor();
renderTaskItems();