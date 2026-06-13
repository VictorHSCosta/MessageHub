import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["eye", "eyeOff", "error"]

    connect() {
    }

    verifyPassword() {
        const input = this.element.querySelector("input")
        const value = input.value
        const errors = []

        if (value.length < 8) errors.push("at least 8 characters")
        if (!/[A-Z]/.test(value)) errors.push("one uppercase letter")
        if (!/[a-z]/.test(value)) errors.push("one lowercase letter")
        if (!/\d/.test(value)) errors.push("one number")

        if (errors.length > 0) {
            this.errorTarget.classList.remove("hidden")
            this.errorTarget.textContent = `Password must include ${errors.join(", ")}.`
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
