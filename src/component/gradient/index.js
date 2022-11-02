import { $map, Component } from "../../core"
// @ts-ignore
import style from "./index.module.css"

const styleVars = {
    blue: "--content:'Develop.';--padding:0.05em;--start-color:#007CF0;--end-color:#00DFD8",
    purple: "--content:'Preview.';--padding:0.05em;--start-color:#7928CA;--end-color:#FF0080",
    yellow: "--content:'Ship.';--padding:0.05em;--start-color:#FF4D4D;--end-color:#F9CB28",
}

/** @typedef {"purple" | "blue" | "yellow"} Color  */
/**
 * @param {string} title
 * @param {Color} color
 * @returns
 */
const AnimatedTitle = (title, color) =>
    new Component({
        template: `
        <span class="${style.common}" style="${styleVars[color]}">
            <span class="${style.title} ${style[color]}">${title}</span>
        </span>`,
    }).html()

const AnimatedTitleSet = () => {
    /** @type {Array<{title: string, color: Color }>} */
    const titles = [
        { title: "Develop.", color: "blue" },
        { title: "Preview.", color: "purple" },
        { title: "Ship.", color: "yellow" },
    ]
    return new Component({
        template: `
        <h1 class="${style.titleContainer}">
            ${$map(titles, ({ title, color }) => AnimatedTitle(title, color))}
        </h1>`,
    }).html()
}

const AnimatedButton = () => {
    const buttonBorder = $map(Object.entries(styleVars), ([key, value]) =>
        new Component({
            template: `
            <span aria-hidden="true" style="${value}" class="${style.buttonBorder} ${style[key]}"></span>`,
        }).html()
    )
    return new Component({
        template: `
        <button type="button" class="${style.buttonContainer}">
            ${buttonBorder}
            <div class="${style.button}">Get a Demo</div>
        </button>`,
    }).html()
}

const Animated = {
    Title: AnimatedTitleSet,
    Button: AnimatedButton,
}

export { Animated }
