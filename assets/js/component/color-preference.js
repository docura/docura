const lsKeyColorPreference = 'color-preference'
const lsKeyColorPreferenceDarkVariant = 'color-preference-dark-variant'

const getColorPreference = () => {
    let lastUsedColorPreference = localStorage.getItem(lsKeyColorPreference)
    if (lastUsedColorPreference !== null)
        return lastUsedColorPreference
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

let colorPreference = getColorPreference()
document.firstElementChild.setAttribute('data-color', colorPreference)

const getColorPreferenceDarkVariant = () => {
    let lastUsedColorPreferenceDarkVariant = localStorage.getItem(lsKeyColorPreferenceDarkVariant)
    return lastUsedColorPreferenceDarkVariant !== null ? lastUsedColorPreferenceDarkVariant : 'dark'
}

let colorPreferenceDarkVariant = getColorPreferenceDarkVariant()

let colorSchemes = document.querySelectorAll('.color-scheme')
colorSchemes.forEach(el => {
    el.addEventListener('click', function () {
        let newColorPreference = el.dataset.value
        if (newColorPreference !== colorPreference) {
            colorPreference = newColorPreference
            setColorPreference()

            if (newColorPreference === 'dark' || newColorPreference === 'night') {
                colorPreferenceDarkVariant = newColorPreference
                localStorage.setItem(lsKeyColorPreferenceDarkVariant, colorPreferenceDarkVariant)
            }
        }
    })
});

const setColorPreference = () => {
    localStorage.setItem(lsKeyColorPreference, colorPreference)
    document.firstElementChild.setAttribute('data-color', colorPreference)
}

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({matches: isDark}) => {
        colorPreference = isDark ? colorPreferenceDarkVariant : 'light'
        setColorPreference()
    })
