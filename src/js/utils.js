function addClass(className) {

}

function removeClass(className) {

}

function changeClass() {
}

function hideElement(element) {
    element.style.display = "none"
    console.log(element)
}

function showElement(element, options) {
    element.style.display = options
}

export default {
    addClass, removeClass, changeClass, showElement, hideElement
}