

const animationStep = (step,curn) =>{
    const timer = document.getElementById('timer').textContent = curn
    if(curn < step){
        setTimeout(() =>{
            animationStep(step,curn+1)
        },500);
    }else{

    }
}

const animata = () => {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'cortina')
    newDiv.style.position = 'absolute';
    newDiv.style.height = '100px'
    newDiv.style.width = '100%'
    newDiv.style.background = 'white'

    const fresh = document.getElementById('fresh')
    fresh.insertBefore(newDiv, fresh.firstElementChild)

    const cortina = document.getElementById('cortina')
    newDiv.style.width = `${document.getElementById('resultTable').clientWidth}px`
    newDiv.style.left = document.getElementById('resultTable').getBoundingClientRect().left

    const exectime = Array.from(document.getElementsByClassName('exectime'))
    let sum = 0;
    exectime.forEach(e => {
        sum += parseInt(e.value)
    })

    let distance = document.getElementById('cortina').style.width;
    
    animationStep(sum,0);
    $('#cortina').animate({ width: '0', marginLeft: distance}, sum*1000/2, 'linear');
}


const draw = () => {
    const inputTable = document.getElementById('input-table')
    let executeTime = 0,
        containerExecuteTime = Array.from(inputTable.children[1].children),
        th = '',
        td = '';

    containerExecuteTime.forEach((dato, cont) => {
        const numProcess = parseInt(dato.children[1].textContent)
        let inputExecuteTime = dato.children[2].children[0].value
        executeTime = parseInt(inputExecuteTime);
        th += `<th style = "height:59px; width: ${executeTime * 20}px" class = 'bg-dark text-light'>P${numProcess}</th>`
        td += `<td style = "height:39px;" class = 'bg-light'>${executeTime}</td>`
    })

    let fresh = document.getElementById('fresh');

    fresh.innerHTML =
        `<table id = 'resultTable'>
        <tr>
            ${th}
        </tr>
        <tr>
            ${td}
        </tr>
    </table>`;
    animata();
}

document.getElementById('btn-go').addEventListener('click',(e)=>{
    draw();
})