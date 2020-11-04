const task = document.getElementById("nwtask").value;
const list = document.getElementById("mylist");
const todo = document.querySelectorAll("li");

function deltask(event) {
    var target = event.target;
    var parent = target.parentElement;
    $(parent).remove();
}

function chktask(event) {
    var target = event.target;
    var parent = target.parentElement;
    parent.classList.add("done");
}


function addtsk() {
    let task = document.getElementById("nwtask").value;
    let list = document.getElementById("mylist");
    let li = document.createElement("li");

    if (!task) {
        return;
    }

    li.innerHTML =
        '<input type="checkbox">' +
        '<label>' + task +
        '</label><span onclick="deltask()">x</span>';

    list.appendChild(li);
    document.querySelector('span').addEventListener('click', deltask);
    li.addEventListener('click', chktask);

}

task.addEventListener('click', addtsk);

function charged() {
    $.getJSON("assets/js/tasks.json", function(tasks) {
        let list = document.getElementById("mylist");
        var len = tasks.length;

        for (i = 0; i < len; i++) {
            tasks == tasks[i];

            var li = document.createElement("li");

            li.innerHTML =
                '<input type="checkbox" class="btf">' +
                '<label>' + tasks[i].desc +
                '</label><span onclick="deltask()">x</span>';

            list.appendChild(li);
            document.querySelector('span').addEventListener('click', deltask);
            li.addEventListener('click', chktask);
        }

    })
};