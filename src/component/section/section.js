import { Component } from "../../core"
// @ts-ignore
import style from "./index.module.css"

/**
 * @param {{ renderId: string; second: string; third: string; fourth: string; fifth: string }} children
 */
const Section = ({ renderId, second, third, fourth, fifth }) =>
    new Component({
        template: `
            <div class="${style.layout}">
                <div class="${style.gridContainer}">
                    <div class="${style.gridFeatured}" id="${renderId}"></div>
                    <div class="${style.gridMajor0}">${second}</div>
                    <div class="${style.gridMinor0}">${fourth}</div>
                    <div class="${style.gridMajor1}">${fifth}</div>
                    <div class="${style.gridMinor1}">${third}</div>
                </div>
            </div>
        `,
    })

export { Section }
