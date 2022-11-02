import { Component } from "../../../core"
// @ts-ignore
import style from "./index.module.css"
/**
 * @param {string} children
 */
const $Container = (children) =>
    new Component({
        template: `<div class="${style.box}">${children}</div>`,
    })
/**
 * @param {string} children
 */
const Container = (children) =>
    new Component({
        template: `<div class="${style.box}">${children}</div>`,
    }).html()

/**
 * @param {string} children
 */
const Label = (children) =>
    new Component({
        template: `<div class="${style.label}">${children}</div>`,
    }).html()

/**
 * @param {string} children
 */
const Badge = (children) =>
    new Component({
        template: `<div class="${style.badge}">${children}</div>`,
    }).html()

const Box = {
    Container,
    $Container,
    Label,
    Badge,
}

export { Box }
