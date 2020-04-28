const display = document.getElementById('display');
let reset = false;

['.digits', '.operations'].forEach(
    selector => Array(...document.querySelector(selector).children).forEach(
        arg => arg.onclick = () => {
            if ('0123456789+-/*.'.includes(arg.innerText)) {
                display.innerText = (
                    display.innerText === '0' || (reset && (!'+/-*'.includes(arg.innerText)))
                ) ? arg.innerText : display.innerText + arg.innerText
            }; 
            reset = false
        }
    )
);

['clear', 'equals', 'percent', 'del'].forEach(
    selector => document.querySelector(`#${selector}`).addEventListener(
        'click', {
            clear: () => display.innerText = '0',
            del: () => {
                const rem = display.innerText.substr(
                    0, display.innerText.length-1
                )
                display.innerText = (rem) ? rem : '0'
            },
            equals: () => {
                display.innerText = eval(display.innerText); 
                reset = true
            },
            percent: () => {
                display.innerText = display.innerText / 100; 
                reset = true  
            },
        }[selector]
    )
)
