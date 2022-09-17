const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const name = document.getElementById('name')
const group = document.getElementById('group')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const email = document.getElementById('email')


form.addEventListener('submit', (e) => {
    let errorMessages = []

    const correctNameRegex = /[\u0430-\u0457]{1,20}\s[\u0430-\u0457]\.\s[\u0430-\u0457]\.$/gi
    const correctGroupRegex = /[а-\u0457]{2}-[0-9]{2}$/gi
    const correctPhoneRegex = /\([0-9]{3}\)-[0-9]{3}-[0-9]{4}$/gi
    const correctAddressRegex = /(\u043c|\u0441|\u0441\u043c\u0422)\.\s[\u0430-\u0457]{1,25}$/gi
    const correctEmailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,10}$/gi


    if (! correctNameRegex.test(name.value)) {
        errorMessages.push('ПІБ повинно бути в форматі "ТТТТТТТТ Т. Т."')
        console.log(/[\u0430-\u0456]{1,20}\s[\u0430-\u0456]\.\s[\u0430-\u0456]\.$/gi.test(name.value))
    }

    if (! correctGroupRegex.test(group.value)){
        errorMessages.push('Номер групи повинен бути в форматі "ТТ-ЧЧ"')
    }

    if (! correctPhoneRegex.test(phone.value)){
        errorMessages.push('Номер телефону повинен бути в форматі "(ЧЧЧ)-ЧЧЧ-ЧЧЧЧ"')
    }

    if (! correctAddressRegex.test(address.value)){
        errorMessages.push('Адрес повинен бути в форматі "Т. ТТТТТТТТ')
    }

    if (! correctEmailRegex.test(email.value)){
        errorMessages.push('E-mail повинен бути в форматі "ТТТТТТ"@ТТТТ.ТТТ')
    }


    if (errorMessages.length > 0){
        e.preventDefault()
        errorElement.innerText = errorMessages.join('\n')
        errorElement.style.cssText = `
            padding: 10px;
            margin-bottom: 5px;
            border-radius: 10px;
        `

    }
})


function phoneNumberFormatter() {
    phone.value = formatPhoneNumber(phone.value)
}

function formatPhoneNumber(value) {
    if (!value) return value

    const phoneNumber = value.replace(/[^\d]/g, '')
    const phoneNumberLength = phoneNumber.length

    if (phoneNumberLength < 4) return phoneNumber
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`
    }

    // return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 9)}`
    return `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`
}