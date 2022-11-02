import { $map, Component, atom } from "../../core"
import { Text } from "../atoms/index.js"
import { SquareButton } from "../sauqre.buttons/index.js"
// @ts-ignore
import style from "./index.module.css"

const NavLogo = () =>
    new Component({
        template: `
            <svg aria-label="Vercel Logotype" fill="white" height="26" viewBox="0 0 284 65"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>
        `,
    }).html()

/**
 * @param {string} text
 */
const NavButton = (text) =>
    new Component({
        template: `<li class="${style.navButton}">${text}</li>`,
    }).html()

const NavStaticList = () => {
    const list = [
        "templates",
        "Integrations",
        "Customers",
        "Enterprise",
        "Pricing",
    ]
    return new Component({
        template: `
        <div class="${style.navStaticListContainer}">
            <div id="nav-popover-button"></div>
            ${$map(list, (data) => NavButton(data))}
        </div>
        `,
    }).html()
}

const NavSide = () =>
    new Component({
        template: `
            <div class="${style.navSideContainer}">
                ${NavButton("Contact")}
                ${NavButton("Login")}
                ${SquareButton("sign up", "sm")}
            </div>
        `,
    }).html()

/**
 * @param {{title: string; description: string; emoji: string;}} param
 */
const NavPopoverInfo = ({ title, description, emoji }) =>
    new Component({
        template: `
        <div class="${style.popOverInfoContainer}">
            <div class="${style.popOverInfoIconContainer}">${emoji}</div>
            <div class="${style.popOverInfoContentContainer}">
                ${Text.Bold(title, "sm")}
                ${Text.P(description, "sm")}
            </div>
        </div>
  `,
    }).html()

const NavPopover = () => {
    const popoverData = [
        {
            title: "Previews",
            description: "Workflow for the modern web",
            emoji: "💫",
        },
        {
            title: "Next.js",
            description: "The native Next.js platform",
            emoji: "📦",
        },
        {
            title: "Analytics",
            description: "Real-time insights, peak performance",
            emoji: "📊",
        },
        {
            title: "Frontend Infrastructure",
            description: "Always fast. Always online.",
            emoji: "🛠️",
        },
        {
            title: "Edge Functions",
            description: "Dynamic pages, static speed",
            emoji: "🔮",
        },
        {
            title: "CLI & API",
            description: "Make the vercel platform your own",
            emoji: "🔭",
        },
    ]
    return new Component({
        template: `
        <div class="${style.popOverContainer}">
            ${$map(popoverData, (data) => NavPopoverInfo(data))}
        </div>`,
    }).html()
}

const Nav = () =>
    new Component({
        template: `
        <nav class="${style.nav}">
            <div class="${style.navContainer}">
                ${NavLogo()}
                ${NavStaticList()}
                ${NavSide()}
            </div>
        </nav>`,
    })
        .addEvent((element) => ({
            handler: () => {
                const isTop = window.scrollY <= 30
                if (isTop) {
                    element.setAttribute(
                        "style",
                        `
                    --navBg: transparnet;
                    --navShadow: unset;
                    --navFilter: unset;
                `
                    )
                } else {
                    element.setAttribute(
                        "style",
                        `
                    --navBg: rgba(0,0,0,0.5);
                    --navShadow: inset 0 -1px 0 0 hsla(0,0%,100%,.1);
                    --navFilter: saturate(180%) blur(5px);
                `
                    )
                }
            },
            type: "scroll",
            target: window,
        }))
        .render()

const NavPopoverButton = () => {
    const [isActive, setIsActive] = atom(false)
    return new Component({
        template: `
        ${NavButton(`
            <div class="${style.popoverButtonContainer}">
                <p>Features</p>
                <svg fill="transparnet" height="16" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="16" style="color:currentColor"><path d="M6 9l6 6 6-6"></path></svg>
            </div>
        `)}
        ${NavPopover()}
        `,
    }).addEvent((element) => ({
        handler: () => {
            setIsActive(!isActive())
            const btnRotation = isActive() ? "180deg" : "0deg"
            const popoverDisplay = isActive() ? "grid" : "none"
            element.setAttribute(
                "style",
                `--popoverDisplay: ${popoverDisplay};
                --btnRotation: ${btnRotation};`
            )
        },
        type: "click",
    }))
}

export { Nav, NavPopoverButton }
