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
        in_p.innerHTML+=`<div class="task">
        <h5>${name_t.value}</h5>
        <p>${desk_t.value}</p>
        <span>${date_t.value}</span>
        <input type="checkbox" name="" id=""onclick="done_taask()">
    </div>`
        name_t.value = ''
        desk_t.value = ''
        date_t.value = ''
    }
    add.style.animation = 'hide 2s'
    add.style.display = 'none'
    setTimeout(function () {
        add.style.display = 'none'

    }, 1999)

}
let tasks = []

let name_t = document.querySelector('#name')

let desk_t = document.querySelector('#desk')

let date_t = document.querySelector('#date')
let in_p = document.querySelector('.in')
let complete = document.querySelector('.complete')
function done_taask(){
    complete.innerHTML+=in_p.childElementCount
}
