let input = document.getElementById('todo');
let ul = document.getElementById("ul");


function addtodo() {

    if (input.value == "") {
        input.setAttribute("placeholder", "Please add text")
    }
    else {
        // li create
        let li = document.createElement("li");

        // delete button 
        let delet = document.createElement('button');
        let delet_i = document.createElement('i');
        delet_i.setAttribute("Class", "fa-solid fa-trash");

        // Delete Function 
        delet.addEventListener('click', () => {
            ul.removeChild(li);
        });

        // Edit Button
        let edit = document.createElement('button');
        let edit_i = document.createElement('i');
        edit_i.setAttribute("Class", "fa-solid fa-pen-to-square");

        // GET INPUT VALUE
        let input_text = document.createTextNode(input.value);

        // edit Function
        edit.addEventListener('click', () => {
            input.value = li.textContent;
            ul.removeChild(li);
        });

        // Css
        edit.style.marginRight = "5px";
        delet.style.marginRight = "5px";


        // appendChild        
        ul.appendChild(li);
        delet.appendChild(delet_i);
        edit.appendChild(edit_i);
        li.appendChild(delet);
        li.appendChild(edit);
        li.appendChild(input_text);


        input.value = "";

        // INPUT PLACEHOLDER
        input.removeAttribute("placeholder")
    };
};



