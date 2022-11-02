import { Component } from "../../core"
// @ts-ignore
import style from "./index.module.css"
/**
 * @param {string} text
 * @param {"sm" | "md"} [size]
 */
const SquareButton = (text, size = "md") =>
    new Component({
        template: `<button type="button" class="${style.square} ${style[size]}">${text}</button>`,
    }).html()

export { SquareButton }
