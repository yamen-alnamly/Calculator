const buttons = document.querySelectorAll('button')
const display = document.querySelector('#calculator-screen')

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            display.innerText = '';
        }
        else if (item.id =='delete') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1)
        }
        else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText)
        }
        else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'EMPTY!!!'
            setTimeout(() => {
                display.innerText = ''
            }, 800);
        } else {
            display.innerText += item.id;
        }
    }

})
