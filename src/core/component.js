import { EventListener } from "./event-listner.js"

/**
 * @param {string} template
 * @param {string} id
 */
const createFragment = (template, id) => {
    const fragment = document.createElement("div")
    fragment.id = id
    fragment.innerHTML = template
    return {
        fragment,
    }
}

class Component extends EventListener {
    /** @typedef {HTMLDivElement} Element  */
    /** @type Element */
    #element

    /** @type string */
    #renderTargetId = "app"

    /** @param {{template: string, renderTargetID?: string, children?: Component[]}} params */
    constructor({ template, renderTargetID, children }) {
        const id = window.crypto.randomUUID()
        const { fragment } = createFragment(template, id)
        if (children) {
            children.forEach((child) => fragment.appendChild(child.#element))
        }
        super(fragment)
        this.#element = fragment

        this.id = id

        if (renderTargetID) {
            this.#renderTargetId = renderTargetID
        }
    }

    /**
     * @internal setMounted DOM
     * @param {Element} element
     */
    #setMounted(element) {
        this.#element = element
        return this
    }

    /**
     * use mounted element
     * @param {(element: Element) => void} mountedCallback
     * @param {string} [id]
     */
    onMounted(mountedCallback, id) {
        this.render(id)
        mountedCallback(this.#element)
        this.#element.remove()
        return this
    }

    /**
     * @param {string} [id]
     */
    render(id = this.#renderTargetId) {
        const app = document.getElementById(id)
        app?.appendChild(this.#element)
        this.#setMounted(this.#element)
    }

    html() {
        return this.#element.innerHTML
    }
}

export { Component }
