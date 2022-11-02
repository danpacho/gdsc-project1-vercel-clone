import { Component, atom } from "../../core"
// @ts-ignore
import style from "./index.module.css"

const Color = {
    purple: {
        from: "#ba1ee475",
        to: "rgba(161,252,70,0)",
    },
    gray: {
        from: "#FFFFFF55",
        to: "#0000000f",
    },
    blue: {
        from: "#0141FF75",
        to: "#0000000f",
    },
}

/**
 * @param {string} children
 * @param {"purple" | "gray" | "blue"} type
 * @returns
 */
const ActiveContainer = (children, type = "gray") => {
    const [rect, setRect] = atom({
        width: 0,
        height: 0,
    })
    const [target, setTarget] = atom(document.getElementsByTagName("div")[0])

    return new Component({
        template: `
        <div class="${
            style.activeContainer
        }" style="${`--from:${Color[type].from}; --to:${Color[type].to}; --glow-opacity:0; --glow-bg:radial-gradient(circle at 0px 0px, ${Color[type].from}, ${Color[type].to} ); transform:rotate3d(0) ;`}">
            <div  class="${style.radial}" aria-hidden="true"></div>
            <div class="${style.container}">
            ${children}
            <div aria-hidden="true" class="${style.staticRadial}">
            </div>
        </div>
`,
    })
        .onMounted((element) => {
            const $target = element.getElementsByTagName("div")[0]
            setTarget($target)
            const { width, height } = $target.getBoundingClientRect()
            setRect({
                width,
                height,
            })
        })
        .addEvent(() => ({
            type: "pointermove",
            /** @param {PointerEvent} e */
            handler: (e) => {
                const { offsetX: innerPointerX, offsetY: innerPointerY } = e
                const { width, height } = rect()
                const centerToPointerX = width / 2 - innerPointerX
                const centerToPointerY = height / 2 - innerPointerY
                const distanceToCenter = Math.sqrt(
                    centerToPointerX ** 2 + centerToPointerY ** 2
                )

                target().setAttribute(
                    "style",
                    `--from:${Color[type].from}; --to:${
                        Color[type].to
                    }; --glow-opacity:0.3; --glow-bg:radial-gradient( circle at ${innerPointerX}px ${innerPointerY}px, ${
                        Color[type].from
                    }, ${
                        Color[type].to
                    } ) ; transform: scale3d(1.01, 1.01, 1.01) rotate3d(${
                        centerToPointerY / 100
                    },${centerToPointerX / 100}, 0, -${
                        distanceToCenter / 30
                    }deg)`
                )
            },
        }))
        .addEvent(() => ({
            type: "pointerleave",
            /** @param {PointerEvent} e */
            handler: (e) => {
                const { offsetX: innerPointerX, offsetY: innerPointerY } = e
                target().setAttribute(
                    "style",
                    `--from:${Color[type].from}; --to:${Color[type].to}; --glow-opacity:0; --glow-bg:radial-gradient(circle at ${innerPointerX}px ${innerPointerY}px, ${Color[type].from}, ${Color[type].to} ); transform:rotate3d(0) ;`
                )
            },
        }))
}
export { ActiveContainer }
