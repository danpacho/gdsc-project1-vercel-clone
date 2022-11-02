class EventListener {
    /** @type HTMLDivElement */
    #target

    /** @type Element */
    #eventTarget

    /**
     * @param {HTMLDivElement} target
     */
    constructor(target) {
        if (target.firstElementChild === null) {
            throw Error("child is null")
        }
        this.#target = target
        this.#eventTarget = target.firstElementChild
    }

    /** @typedef {{ type: keyof HTMLElementEventMap; handler: (...args: any[]) => void, target?: HTMLElement | Window}} EventInfo */
    /**
     * @param {(element: HTMLDivElement) => EventInfo} eventHandler
     */
    addEvent(eventHandler) {
        const ev = eventHandler(this.#target)
        const { handler, type } = ev
        if (ev.target) {
            ev.target.addEventListener(type, handler)
        }
        this.#eventTarget.addEventListener(type, handler)
        return this
    }

    /**
     * if you want remove specific event, you should define function outside of `addEvent()`
     * @param {EventInfo} ev
     */
    removeEvent(ev) {
        const { type, handler } = ev
        if (ev.target) {
            ev.target.removeEventListener(type, handler)
        }
        this.#eventTarget.removeEventListener(type, handler)
        return this
    }
}

export { EventListener }
