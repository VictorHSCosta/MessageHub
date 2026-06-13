import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["eye", "eyeOff"]

    connect() {
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