/**
 * @template T
 * @param {Array<T>} data
 * @param {(data: T) => string} render
 * @returns
 */
const $map = (data, render) =>
    data.map(render).reduce((string, curr) => `${string}${curr}`, "")

export { $map }
