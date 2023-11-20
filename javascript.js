const botonHamburguesa = document.querySelector('.hamburguesa')
const menuDespegable = document.querySelector('.hambur')
function showMenu() {
  menuDespegable.classList.toggle("active-menu");
}
botonHamburguesa.addEventListener('click', showMenu);


const alertPlaceholder = document.getElementById('alertEnviar')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

function validarCampos() {
    let nameInput = document.querySelector("#nameInput").value;
    let emailInput = document.querySelector("#emailInput").value;
    let messageInput = document.querySelector("#messageInput").value;
    if (nameInput != "" && emailInput != "" && messageInput != "") {
        appendAlert('Todo melo sapo', 'success')
    } else {
        appendAlert('Todos los campos son requeridos', 'danger')
    }
}

const alertTrigger = document.getElementById('enviarAlert')
if (alertTrigger) {
    alertTrigger.addEventListener('click', validarCampos)
}

