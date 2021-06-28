class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.form')
        this.eventos()
    }

    eventos(e) {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const checkFild = this.checkFild()
        if (checkFild) {
            alert('Formuario enviado')
            this.formulario.submit()
        }
    }

    checkFild() {
        let valid = true

        for (let errors of this.formulario.querySelectorAll('.msg-error')) {
            errors.remove()
        }
        for (let campo of this.formulario.querySelectorAll('.valid')) {
            const beforeLabel = campo.previousElementSibling.innerHTML
            if (!campo.value) {
                this.createError(campo, `Campo ${beforeLabel} é obrigatório`)
                valid = false
            }
        }
        return valid
    }

    createError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('msg-error')
        campo.insertAdjacentElement('afterend', div)
    }
}

const formulario = new ValidaFormulario()