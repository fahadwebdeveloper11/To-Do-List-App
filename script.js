const input = document.querySelector('.input')
const addBtn = document.querySelector('.add-btn')
const taskHere = document.querySelector('.task-here')

addBtn.addEventListener('click', function () {

    if (input.value === '') {
        alert("Please Enter Some Tasks")
    }
    else {
        const li = document.createElement('li')
        const tasks = document.createElement('div')
        tasks.className = "tasks"

        const img = document.createElement('img')
        img.className = "uncheck-img"
        img.src = "./images/unchecked.png"

        const inputTask = document.createElement('input')
        inputTask.className = "value-here"
        inputTask.value = input.value
        inputTask.setAttribute("readonly", '')

        let check = 1
        img.addEventListener('click', function () {
            if (check === 1) {
                img.src = "./images/checked.png"
                inputTask.style.textDecoration = "line-through"
                check = 0
            }
            else {
                img.src = "./images/unchecked.png"
                inputTask.style.textDecoration = "none"
                check = 1
            }
        })


        tasks.appendChild(img)
        tasks.appendChild(inputTask)
        li.appendChild(tasks)

        inputTask.innerHTML = input.value
        taskHere.appendChild(li)

        const divBtns = document.createElement('div')
        divBtns.className = "buttons"

        li.appendChild(divBtns)

        const editBtn = document.createElement('button')
        editBtn.className = "edit-btn"
        editBtn.innerText = "Edit"
        let check2 = 1
        editBtn.addEventListener('click', function () {
            if (check2 === 1) {
                editBtn.innerText = "Save"
                inputTask.removeAttribute("readonly")
                inputTask.focus()
                inputTask.style.textDecoration = "none"
                check2 = 0
            }
            else {
                editBtn.innerText = "Edit"
                inputTask.setAttribute("readonly", '')
                inputTask.style.textDecoration = "line-through"
                check2 = 1
            }

        })

        const deleteBtn = document.createElement('button')
        deleteBtn.className = "delete-btn"
        deleteBtn.innerText = "Delete"

        deleteBtn.addEventListener('click', function (e) {
            // console.log(e.target.parentNode.parentNode);
            e.target.parentNode.parentNode.remove()
        })

        divBtns.appendChild(editBtn)
        divBtns.appendChild(deleteBtn)
    }
    input.value = ''
})