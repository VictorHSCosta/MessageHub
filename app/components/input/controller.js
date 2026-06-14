import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["eye", "eyeOff", "error"]

    connect() {
    }

    verifyPassword() {
        const input = this.element.querySelector("input")
        const value = input.value
        const errors = []

        if (value.length < 8) errors.push("A senha precisa conter pelo menos 8 caracteres")
        if (!/[A-Z]/.test(value)) errors.push("A senha precisa conter pelo menos uma letra maiúscula")
        if (!/[a-z]/.test(value)) errors.push("A senha precisa conter pelo menos uma letra minúscula")
        if (!/\d/.test(value)) errors.push("A senha precisa conter pelo menos um número")

        if (errors.length > 0) {
            this.errorTarget.classList.remove("hidden")
            this.errorTarget.textContent = ``
            errors.forEach(line => {
                const li = document.createElement("li")
                li.textContent = line
                this.errorTarget.appendChild(li)
            })
        } else {
            this.errorTarget.classList.add("hidden")
            this.errorTarget.textContent = ""
        }
    }

    togglePassword() {
        const input = this.element.querySelector("input")
        const type = input.type === "password" ? "text" : "password"

        if (type === "password") {
            this.eyeTarget.classList.add("hidden")
            this.eyeOffTarget.classList.remove("hidden")
        } else {
            this.eyeTarget.classList.remove("hidden")
            this.eyeOffTarget.classList.add("hidden")
        }
        input.type = type
    }
}
