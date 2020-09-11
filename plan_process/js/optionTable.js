import {serviceTime} from './serviceTime.js';

serviceTime()
const addRow = () =>{
    const lastRow = document.getElementById('input-table').children[1].lastElementChild
    const lastRowNumber = parseInt(lastRow.children[1].textContent)
    
    let row = document.createElement('tr') 
    row.innerHTML = `<tr>
        <th scope="row">P${lastRowNumber +1}</th>
        <td>${lastRowNumber+1}</td>
        <td><input class="form-control exectime" type="text"></td>
        <td class="time-serv"></td>
    </tr>`
    document.getElementById('input-table').children[1].appendChild(row)
    document.getElementById('input-table').children[1].lastElementChild.children[2].children[0].addEventListener('input',e=>{
        serviceTime()
    })
    
}

const deleteRow = () =>{
    const contentRow = document.getElementById('input-table').children[1]
    const lastRow =  document.getElementById('input-table').children[1].lastElementChild

    contentRow.removeChild(lastRow);
}

document.getElementById('btn-add').addEventListener('click',e =>{
    addRow()
})

document.getElementById('btn-delete').addEventListener('click', e =>{
    deleteRow()
})

const input = Array.from(document.getElementsByClassName('exectime'))

input.forEach(e =>{
    e.addEventListener('input', e =>{
        serviceTime();
    })
})

