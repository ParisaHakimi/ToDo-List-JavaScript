const taskwrapper = document.querySelector('.wrapper');
const formTask = document.querySelector('form');
const inputTask = document.querySelector('form input');
const addTask = document.querySelector('form button');
const taskList = document.querySelector('.list');
const clear = document.querySelector('.clear');
const pendingTask = document.querySelector('.pending');
const clearTask = document.querySelector('.clear-tasks');

// Current Date
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let dayName = days[d.getDay()];
document.querySelector('.date').innerHTML = `${dayName} ${d.getMonth()} / ${d.getDate()} / ${d.getFullYear()}`;

// console.log(pendingTask);
formTask.addEventListener('submit', function(e) {
    e.preventDefault();
    if (inputTask.value.trim() === '') {
        alert("please enter a task")
    } else {
        // create element
        const li = document.createElement('li');
        // add class to li
        li.className = 'list-item';
        // add span in li
        const span = document.createElement('span');
        li.appendChild(span);
        // add form text to span
        span.appendChild(document.createTextNode(inputTask.value));
        // add delete icon in span with i tag
        span.innerHTML += '<a href=""><i class="fa fa-times delete" aria-hidden="true"></i></a>';
        // add list item to task  in ul
        taskList.appendChild(li);
        // clear input
        inputTask.value = '';

    }

});
// clear all
clearTask.addEventListener('click', function() {
    taskList.innerHTML = '';
});
// clear a task
taskList.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
})