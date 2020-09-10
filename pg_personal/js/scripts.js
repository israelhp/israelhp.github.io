const opcion =Array.from(document.getElementById('opcion').children)
const main = document.getElementById("main")



const ocultarMenu = () => {
    const menu = document.getElementById('main-menu')
    const styles = getComputedStyle(menu) 
    if(styles.right === "0px") {
        menu.classList.remove('show')
    }
}

window.addEventListener('scroll',ocultarMenu)
main.addEventListener('click',ocultarMenu)

opcion.forEach(e => {
    e.addEventListener('click',ocultarMenu)
})
const dibujarHabilidades = async () => {
    let data
    const response = await fetch('./js/info.json')
    switch(response.status){
        case 200:
            let data = await response.json();
            paint(data.habilidades)
            break; 
        default: console.log("no se creo");
    }
}

const paint = (data) => {
    const container = document.getElementById('cont-ability')
    const fragment = document.createDocumentFragment()
    
    data.forEach( valor => {
        let div = document.createElement('div')
        div.innerHTML = `
            <div class="ability">
                <div class="ab-img">
                    <img class="img-a" src="${valor.img}" alt="">
                </div>
                <div class="ab-info">
                    <p>${valor.cursos}</p>
                    <p>${valor.nivel}</p>
                </div>
            </div>`
        fragment.appendChild(div)
    });
    container.appendChild(fragment)
}

const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId); 
    const nav = document.getElementById(navId); 

    if(toggle && nav){
        toggle.addEventListener('click',() => {
            nav.classList.toggle('show')
        })
    }
} 

dibujarHabilidades()
showMenu('main-menu-toggle','main-menu')