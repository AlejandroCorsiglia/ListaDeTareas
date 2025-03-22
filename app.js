/*const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-tareas');

function agregarTarea(){
    if(input.value){
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto = document.createElement('p');
            texto.innerText = input.value;
            tareaNueva.appendChild(texto);
        
            let iconos = document.createElement('div');
            iconos.classList.add('iconos');
            tareaNueva.appendChild(iconos);

            let completar = document.createElement('i');
            completar.classList('bi', 'bi-check-circle-fill', 'icono-completar');

            let eliminar = document.createElement('i');
            eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');

            iconos.appendC(completar, eliminar);

            listaDeTareas.appendChild(tareaNueva);
    } else{
        alert("Por favor ingrese una tarea")
    }
}

boton.addEventListener('click', agregarTarea);*/

const input = document.getElementById('ingresar-tarea');
        const boton = document.querySelector('button');
        const listaDeTareas = document.getElementById('lista-tareas');

        function agregarTarea(){
            if(input.value.trim() !== ""){
                let tareaNueva = document.createElement('div');
                tareaNueva.classList.add('tarea');

                let texto = document.createElement('p');
                texto.innerText = input.value;
                tareaNueva.appendChild(texto);

                let iconos = document.createElement('div');
                iconos.classList.add('iconos');
                tareaNueva.appendChild(iconos);

                let completar = document.createElement('i');
                completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');

                let eliminar = document.createElement('i');
                eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');

                iconos.append(completar, eliminar);

                listaDeTareas.appendChild(tareaNueva);

               
                input.value = "";

               
                completar.addEventListener('click', function() {
                    tareaNueva.classList.toggle('completada');
                });

                
                eliminar.addEventListener('click', function() {
                    listaDeTareas.removeChild(tareaNueva);
                });

            } else {
                alert("Por favor, ingrese una tarea.");
            }
        }

        boton.addEventListener('click', agregarTarea);
        input.addEventListener('keydown', (e)=>{
            if(e.key === 'Enter'){
                agregarTarea();
            }

        })