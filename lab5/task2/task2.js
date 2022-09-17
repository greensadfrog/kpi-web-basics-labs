const inputColor = document.getElementById('inputColor')
const variantCell = document.getElementById('variant')
const cell28 = document.getElementById('cell28')
const cell26 = document.getElementById('cell26')

const randomColor = () => {
    let rgbArray = []
    for (let i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 255))
    }
    return 'rgb(' + rgbArray.join(',') + ')'
}

function changeWithInput () {
    variantCell.style.backgroundColor = inputColor.value
}

function changeWithRandom() {
    variantCell.style.backgroundColor = randomColor()
}

function changeRowColor(){
    variantCell.style.backgroundColor = randomColor()
    cell28.style.backgroundColor = randomColor()
    cell26.style.backgroundColor = randomColor()
}