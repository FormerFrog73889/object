let torneo = {}
torneo = {
    1: 'a',
    2: 'b',
    'zoo': [1, 2, 3]
}
console.log(torneo["zoo"])
let user = {
    age: 5,
    name: 'Edik',
    surename: 'Sheva',
    lessons: ['P.E.', 'ukraine_language']
}
console.log(user.age)
user.name = 'Anton'
console.log(user.name)
user.class = 11
let n = document.querySelector('.n')
let s = document.querySelector('.s')
let a = document.querySelector('.a')

function show() {
    user.name = n.value
    user.surename = s.value
    user.age = a.value
    console.log(user.name, user.surename, user.age)
}



let add = document.querySelector(".add")

function show_add() {
    add.style.display = 'block'
    add.style.animation = 'show 2s'
}

function add_task() {
    if (name_t.value == '' || desk_t.value == '' || date_t.value == '') {
        alert('You have not entered all values')
    } else {


        tasks.unshift({
            name: name_t.value,
            desk: desk_t.value,
            date: date_t.value,
            done: false
        })
        save_ls()
        render()
        name_t.value = ''
        desk_t.value = ''
        date_t.value = ''
    }
    add.style.animation = 'hide 2s'
    add.style.display = 'none'
    setTimeout(function() {
        add.style.display = 'none'

    }, 1999)
}
let tasks = []

let name_t = document.querySelector('#name')
let desk_t = document.querySelector('#desk')
let date_t = document.querySelector('#date')
let in_p = document.querySelector('.in')
let complete = document.querySelector('.complete')

function done_taask(checkbox) {
    const task = checkbox.parentNode
    const parent = task.parentNode

    if (parent.classList.contains('complete')) {
        complete.removeChild(task)
        in_p.appendChild(task)
    } else {
        in_p.removeChild(task)
        complete.appendChild(task)
    }
    update_task(task)
    save_ls()


}

function save_ls() {

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function load_ls() {
    const saved_tasks = localStorage.getItem('tasks')
    if (saved_tasks) {
        tasks = JSON.parse(saved_tasks)
        render()
    }
}

function render() {
    in_p.innerHTML = ''
    complete.innerHTML = ''
    tasks.forEach(function(task) {
            const task_el = document.createElement('div')
            task_el.classList.add('task')
            task_el.innerHTML = `
        <h5>${task.name}</h5>
        <p>${task.desk}</p>
        <span>${task.date}</span>
        <input type="checkbox" name="" id=""onclick="done_taask(this)" ${task.done ? 'checked'  : ''}
        > `

            if (task.done) {
                complete.appendChild(task_el)


            } else {
                in_p.appendChild(task_el)
            }
        }

    )

}

function update_task(el) {
    const task_i = Array.from(in_p.children).indexOf(el)
    tasks[task_i].done = !tasks[task_i].done
    save_ls()

}
load_ls()