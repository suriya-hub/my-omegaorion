export function capitalizeFirstWord(str) {
    const f = str?.split('/')[1] || ''
    const s = str?.split('/')[2] || ''

    let first = (f?.charAt(0).toUpperCase() + f?.slice(1))
    let second = (s?.charAt(0).toUpperCase() + s?.slice(1))

    return { first, second };
}