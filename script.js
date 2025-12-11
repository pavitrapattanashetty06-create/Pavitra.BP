function addstudent() {
    let input = document.querySelector('#input');
    let name = input.value.trim();

    let li =document.createElement('li');//creating a list element for veiwing the student list
    let span = document.createElement('span');
    span.innerText=name;

    let del =document.createElement('button');
    del.innerText='Del';

    del.onclick = function(){
        li.remove();
    }

    li.appendChild(span);
    li.appendChild(del);
   

    document.querySelector('#list').appendChild(li);

    input.value ='';
}