import { Component } from "../../core"
import { ActiveCard } from "../active.card/index.js"
import { Box, Text } from "../atoms/index.js"
import { Section } from "./section.js"

const FirstSection = () => {
    const SectionActiveCard = () =>
        ActiveCard({
            logo: '<svg aria-labelledby="vercel-logo-title" fill="none" height="80" role="img" viewBox="0 0 80 80" width="80" xmlns="http://www.w3.org/2000/svg" style="position: relative;"><title id="vercel-logo-title">The Next.js Logo</title><circle cx="40" cy="40" fill="black" r="40"></circle><circle cx="40" cy="40" r="39.5" stroke="url(#paint0_radial_1766_6745)" stroke-opacity="0.15"></circle><circle cx="40" cy="40" r="39.5" stroke="url(#paint1_linear_1766_6745)" stroke-opacity="0.5"></circle><path d="M66.448 70.0091L30.7298 24H24V55.9867H29.3838V30.8371L62.2218 73.2645C63.7035 72.2727 65.1152 71.1846 66.448 70.0091Z" fill="url(#paint0_linear_1766_6633)"></path><rect fill="url(#paint1_linear_1766_6633)" height="32" width="5.33333" x="51.1113" y="24"></rect><defs><radialGradient cx="0" cy="0" gradientTransform="translate(40) rotate(90) scale(102.857)" gradientUnits="userSpaceOnUse" id="paint0_radial_1766_6745" r="1"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></radialGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1766_6745" x1="0" x2="17.5" y1="0" y2="32.5"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1766_6633" x1="48.4444" x2="64.2222" y1="51.7778" y2="71.3333"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1766_6633" x1="53.778" x2="53.6887" y1="24" y2="47.5001"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>',
            title: "Next.js 13",
            titleDescription: "By Vercel",
            description:
                "Begining the power of full-stack<br />to the frontend",
            buttonText: "Get Started",
            type: "blue",
        })

    const SecondComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Box.Label("beta")}
                ${Text.Bold("Powerfull routing", "lg")}
                ${Text.Bold("and layouts", "lg")}
                ${Text.P(
                    "Build complex interfaces while shipping less JavaScript.",
                    "md"
                )}
            `)}
        `,
        }).html()
    const ThirdComponent = () =>
        new Component({
            template: `
        ${Box.Container(`
            ${Text.P("Native support for")}
            ${Text.P(
                `${Text.Bold("custom fonts", "md")} and ${Text.Bold(
                    "image",
                    "md"
                )}`,
                "md"
            )}
            ${Box.Badge("Powered by Vercel Image Optimization")}
        `)}
    `,
        }).html()
    const FourthComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Text.P(
                    `Building on ${Text.Bold(
                        "React Server Components",
                        "md"
                    )},`,
                    "md"
                )}
                
                ${Text.P(
                    `${Text.Code("app")} now makes ${Text.Bold(
                        "server-first"
                    )} the default`
                )}

                ${Box.Badge("Powered by Vercel Funtions")}
            `)}
        `,
        }).html()
    const FifthComponent = () =>
        new Component({
            template: `
            ${Box.Container(`
                ${Text.Bold("Dynamic HTML Streaming", "lg")}
                ${Text.P("Support for HTML streaming,")}
                ${Text.P("now on vercel")}
            `)}
        `,
        }).html()

    const firstId = "first-section-active-card"
    return {
        SectionTemplate: () =>
            Section({
                renderId: firstId,
                second: SecondComponent(),
                third: ThirdComponent(),
                fourth: FourthComponent(),
                fifth: FifthComponent(),
            }),
        SectionActiveCard,
        firstId,
    }
}

export { FirstSection }
