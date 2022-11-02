import { Component } from "../../core"
import { ActiveCard } from "../active.card/index.js"
import { Box, Button, Text } from "../atoms/index.js"
import { Section } from "./section.js"

const ThirdSection = () => {
    const SectionActiveCard3 = () =>
        ActiveCard({
            logo: '<svg aria-labelledby="vercel-logo-title" fill="none" height="80" role="img" viewBox="0 0 80 80" width="80" xmlns="http://www.w3.org/2000/svg" style="position: relative;"><title id="vercel-logo-title">The Vercel Logo</title><rect fill="black" height="80" rx="12" width="80"></rect><path d="M40 21L58.5 53H21.5L40 21Z" fill="white"></path><rect height="79" rx="11.5" stroke="url(#paint0_radial_1766_6729)" stroke-opacity="0.15" width="79" x="0.5" y="0.5"></rect><rect height="79" rx="11.5" stroke="url(#paint1_linear_1766_6729)" stroke-opacity="0.5" width="79" x="0.5" y="0.5"></rect><defs><radialGradient cx="0" cy="0" gradientTransform="translate(40) rotate(90) scale(102.857)" gradientUnits="userSpaceOnUse" id="paint0_radial_1766_6729" r="1"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></radialGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1766_6729" x1="0" x2="17.5" y1="0" y2="32.5"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>',
            title: "Vercel",
            description: "The native Next.js platform",
            buttonText: "Deploy Now",
            type: "gray",
        })

    const SecondComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Box.Label("enterprise")}
                ${Text.Bold("Monitoring and Logs", "lg")}
                ${Text.P("Deployment-based introspection", "lg")}
            `)}
        `,
        }).html()
    const ThirdComponent = () =>
        new Component({
            template: `
        ${Box.Container(`
            ${Box.Label("beta")}
            ${Text.Bold("Review your UI", "lg")}
            ${Text.P(
                "Leave feedback instantly<br />with new collaboration<br />features on Previews."
            )}
        `)}
    `,
        }).html()
    const FourthComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Text.Bold("Dynamic social cards", "lg")}
                ${Box.Badge("Powered by Vercel Edge Functions")}
            `)}
        `,
        }).html()
    const FifthComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Text.P(
                    `Privacy-first, ${Text.Bold("real-time", "lg")}`,
                    "lg"
                )}
                ${Text.P(`${Text.Bold("analytics,", "lg")} at the edge`, "lg")}
                <span>&nbsp</span>
                ${Button.Gray("Vercel welcomes Splitbee")}
            `)}
        `,
        }).html()

    const thirdId = "third-section-active-card"
    return {
        SectionTemplate3: () =>
            Section({
                renderId: thirdId,
                second: SecondComponent(),
                third: ThirdComponent(),
                fourth: FourthComponent(),
                fifth: FifthComponent(),
            }),
        SectionActiveCard3,
        thirdId,
    }
}

export { ThirdSection }
