import { Component } from "../../../core"
// @ts-ignore
import style from "./index.module.css"

/** @typedef {"white" | "black"} ButtonVariants  */
/**
 * @param {string} text
 * @param {ButtonVariants} as
 * @returns button component
 */
const Ring = (text, as) =>
    new Component({
        template: `
        <div class="${style.container}">
        <span class="${style.rotation}" aria-hidden="true"></span>
        <span class="${style.btnContainer}">
        <button type="button" class="${style.common} ${style[as]}">${text}</button>
        </span>
        </div>
        `,
    }).html()

/**
 * @param {string} text
 * @returns
 */
const Gray = (text) =>
    new Component({
        template: `<button type="button" class="${style.gray}">${text}</button>`,
    }).html()

const Button = {
    Ring,
    Gray,
}

export { Button }
