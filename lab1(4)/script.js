const firstElement = document.getElementById('first-element')
const secondElement = document.querySelector('p')

const randomColor = () => {
    let rgbArray = []
    for (let i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 255))
    }
    return 'rgb(' + rgbArray.join(',') + ')'
}

firstElement.addEventListener('click', () => {
    firstElement.style.color = randomColor()
    firstElement.style.background = randomColor()
})

secondElement.addEventListener('click', () => {
    secondElement.style.color = randomColor()
    secondElement.style.background = randomColor()
})

const randomImageDiv = document.querySelector('.random-image')
const randomImage = document.createElement('img')
randomImage.src = "https://loremflickr.com/700/400"

let scale = 1

function addRandomImg() {
    randomImage.style.scale = '1'
    scale = 1
    randomImageDiv.appendChild(randomImage)

}

function scaleUp() {
    scale += 0.1
    randomImage.style.scale = `${scale}`

}

function scaleDown() {
    if (scale > 0.2) {
        scale -= 0.1
        randomImage.style.scale = `${scale}`
    }
}

function deleteImage() {
    randomImage.remove()
}

