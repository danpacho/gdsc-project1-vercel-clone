/* eslint-disable prefer-const */
let globalIndex = 0

/** @type any[] */
const states = []

/**
 * @template T
 * @param {T} initialState
 * @returns {[() => T, (newState: T) => void]}
 */
function atom(initialState) {
    const currIndex = globalIndex
    if (currIndex === states.length) {
        globalIndex += 1
    }
    states.push(initialState ?? undefined)
    /**
     * @returns {T}
     */
    const getState = () => states[currIndex]
    /**
     * @param {T} newState
     */
    const setState = (newState) => {
        states[currIndex] = newState
    }

    return [getState, setState]
}

export { atom }
