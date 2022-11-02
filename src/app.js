// @ts-ignore
import style from "./app.module.css"
import { Text } from "./component/atoms"
import { Banner, BannerImage } from "./component/banner"
import { Animated } from "./component/gradient/index.js"
import { Nav, NavPopoverButton } from "./component/nav"
import { SquareButton } from "./component/sauqre.buttons/index.js"
import { FirstSection, SecondSection, ThirdSection } from "./component/section"
import { Component } from "./core"

const { SectionActiveCard, SectionTemplate, firstId } = FirstSection()
const { SectionActiveCard2, SectionTemplate2, secondId } = SecondSection()
const { SectionActiveCard3, SectionTemplate3, thirdId } = ThirdSection()

const App = new Component({
    renderTargetID: "app",
    template: `
        ${Banner()}
        ${Nav()}
        <div class="${style.sectionContainer}" id="section"></div>
        <div class="${style.animatedContiner}">
            ${Animated.Title()}
            ${Text.P(
                "Vercel is the platform for frontend developers, providing the speed and reliability<br />innovators need to create at the moment of inspiration."
            )}
            <div class="${style.buttonContainer}">
                ${SquareButton("Start Deploying")}
                ${Animated.Button()}
            </div>
        </div>
    `,
})

App.render()

BannerImage().render("vercel-banner")
NavPopoverButton().render("nav-popover-button")

SectionTemplate().render("section")
SectionActiveCard().render(firstId)

SectionTemplate2().render("section")
SectionActiveCard2().render(secondId)

SectionTemplate3().render("section")
SectionActiveCard3().render(thirdId)
