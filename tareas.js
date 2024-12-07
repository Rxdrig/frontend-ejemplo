// HTML QUE TENGA INPUT PARA CREAR TAREAS, ADICIONALMENTE TIENE UN BOTON PARA GUARDARLAS
// AL APRETAR EL BOTON, CON JS OBTENEMOS EL VALOR DEL INPUT (LO QUE INGRESO EL USUARIO)
// ESA TAREA QUE CREO QUEDARA GUARDADA EN UNA LISTA QUE ESTA ALMACENADA EN LOCALSTORAGE
// LA LISTA SE MUESTRA DEBAJO DEL INPUT Y SE ACTUALIZA CADA VEZ QUE EL USUARIO GUARDA UNA NUEVA TAREA


//1.- CREAR UNA LISTA DE TAREAS Y GUARDARLA EN LOCALSTORAGE 
//2.- OBTENER EL VALOR DEL INPUT AL MOMENTO DE APRETAR EL BOTON GUARDAR
//3.- TRAER DEVUELTA LA LITSA
//4.- AÑADIR LA TAREA A LA LISTA
//5.- GUARDAR NUEVAMENTE LA LISTA EN LOCALSTORAGE Y LIMPIAR EL INPUT
//6.- ACTUALIZAR LA LISTA DE TAREAS QUE VE EL USUARIO

// Se crea y almacena lista tareas en local storage
// tareas = [];
// localStorage.setItem('tareas',JSON.stringify(tareas));


let tarea = document.querySelector('#tareanueva')
let boton = document.querySelector('#tareasave')

boton.addEventListener('click', ()=> {
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.push(tarea.value)
    localStorage.setItem('tareas',JSON.stringify(tareas))
    tarea.value = ''
    listar_tareas()
})


function listar_tareas(){
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    let task_list = document.querySelector('ul')
    task_list.innerHTML = ''
    
    tareas.forEach(tarea => {
        let li = document.createElement('li')
        li.innerHTML = tarea
        li.setAttribute('class','list-group-item')
        task_list.appendChild(li)
    });
    
}
listar_tareas()




