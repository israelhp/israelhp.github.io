
export function serviceTime(){
    const inputTable = document.getElementById('input-table')
    let executeTime = 0, 
        containerExecuteTime =  Array.from(inputTable.children[1].children)
    containerExecuteTime.forEach((dato,cont) =>{
        let inputExecuteTime = dato.children[2].children[0].value
        let serviceTime = dato.children[3].textContent = executeTime 
        executeTime += parseInt(inputExecuteTime);
    })

}

