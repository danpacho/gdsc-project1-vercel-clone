import { Component } from "../../../core"
// @ts-ignore
import style from "./index.module.css"

/**
 * @param {string} text
 * @param {"sm" | "md" | "lg"} [size]
 * @param {boolean} [hypen]
 */
const P = (text, size = "md", hypen = false) =>
    new Component({
        template: `<p class="${style.p} ${style[size]} ${
            hypen && style.hypen
        }">${text}</p>`,
    }).html()

/**
 * @param {string} text
 * @param {"sm" | "md" | "lg"} [size]
 * @param {boolean} [hypen]
 */
const Bold = (text, size = "md", hypen = false) =>
    new Component({
        template: `<strong class="${style.bold} ${style[size]} ${
            hypen && style.hypen
        }">${text}</strong>`,
    }).html()

/**
 * @param {string} text
 */
const Code = (text) =>
    new Component({
        template: `<span class="${style.code}">${text}</span>`,
    }).html()

/**
 * @param {string} text
 */
const Head = (text) =>
    new Component({
        template: `<h1 class="${style.head}">${text}</h1>`,
    }).html()

const Text = {
    P,
    Bold,
    Code,
    Head,
}
export { Text }
