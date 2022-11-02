import { ActiveContainer } from "../active.container/index.js"
import { Box, Button, Text } from "../atoms/index.js"
// @ts-ignore
import style from "./index.module.css"
/**
 * @param {{logo: string; title: string; description: string; buttonText: string; label?: string; titleDescription?: string; type?: "gray" | "purple" | "blue"}} param
 */
const ActiveCard = ({
    logo,
    title,
    description,
    buttonText,
    label,
    titleDescription,
    type = "gray",
}) =>
    ActiveContainer(
        `
        ${logo}
        ${Text.Head(`${title}`)}
        ${
            titleDescription
                ? `<span class="${style.titleDescription}">${Text.Bold(
                      `${titleDescription}`,
                      "sm"
                  )}</span>`
                : ""
        }
        ${Text.P(description)}
        ${Button.Gray(buttonText)}
        ${label ? Box.Label(label) : ""}`,
        type
    )

export { ActiveCard }
