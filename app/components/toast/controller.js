import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["progress"]

    connect() {
        requestAnimationFrame(() => {
            this.element.classList.remove("hidden")
        })

        this.timeout = setTimeout(() => {
            this.dismiss()
        }, 5000)
    }

    dismiss() {
        this.element.classList.add("hidden")
    }

    disconnect() {
        this.element.classList.add("hidden")
    }

}
