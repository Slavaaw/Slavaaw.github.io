const tableOfCoding = {
    "а": "@",
    "б": "'",
    "в": "#",
    "г": "$",
    "д": "^",
    "е": ":",
    "ё": ";",
    "ж": "▼",
    "з": "╠",
    "и": "{",
    "й": "}",
    "к": "/",
    "л": "|",
    "м": "[",
    "н": "]",
    "о": "`",
    "п": "~",
    "р": "-",
    "с": "_",
    "т": "+",
    "у": "=",
    "ф": "№",
    "х": "%",
    "ц": "?",
    "ч": "(",
    "ш": ")",
    "щ": "ਠ",
    "ъ": "ჵ",
    "ы": "╙",
    "ь": "☨",
    "э": "ϟ",
    "ю": "ღ",
    "я": "დ",
    " ": "≧",
    ",": "⸘",
    "!": "μ",
    "?": "♮",
    "%": "Ψ",
    "+": "﹀",
    "-": "︾",
    ".": "θ",
}

const encryption = () => {
    const textForEncryption = document.getElementById("textarea-encryption").value.split("").map(element => {
        return element.toLowerCase()})

    const result = []
    for (let i=0; i < textForEncryption.length; i++){
        if (textForEncryption[i] in tableOfCoding){
            result.push(tableOfCoding[textForEncryption[i]])
        } 
    }
    document.getElementById("result-encryption").innerHTML = result.join("")
}

const copy1 = () =>{
    document.getElementById("copy-btn1").addEventListener("click", () =>{
        const textWrapper = document.getElementById("result-encryption").innerHTML
        navigator.clipboard.writeText(textWrapper)
    })
}

const copy2 = () =>{
    document.getElementById("copy-btn2").addEventListener("click", () =>{
        const textWrapper = document.getElementById("result-decoding").innerHTML
        navigator.clipboard.writeText(textWrapper)
    })
}


const getKeyByValue = (object, value) =>{
    return Object.keys(object).find(key => object[key] === value);
}
const decoding = () =>{
    const textForDecoding = document.getElementById("textarea-decoder").value.split("")
    const result = []
    for (let i=0; i < textForDecoding.length; i++){
        result.push(getKeyByValue(tableOfCoding, textForDecoding[i]))
    }
    document.getElementById("result-decoding").innerHTML = result.join("")  
}    
    
