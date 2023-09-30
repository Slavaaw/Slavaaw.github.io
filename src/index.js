const fs = require('fs');

const data = fs.readFileSync("JSON/my.json", "utf-8");
const symbolsOfCode = JSON.parse(data)

function encryption(){ 
    const word = document.getElementsByClassName(".textarea-encryption")  
    const answer = []

    for (let i=0; i < word.length; i++){
        answer.push(symbolsOfCode[word.charAt(i)])
        
    }
    return answer.join("")
}    

function getKeyByValue(object, value){
    for (keys in object){
        if (keys in object){
            if (object[keys] === value){
                return keys
            }
        }
    }
}

function decoding(){      
    const word = document.getElementsByClassName(".textarea-decoder")  
    const answer = []

    for (let i=0; i<word.length; i++){
        answer.push(getKeyByValue(symbolsOfCode, word.charAt(i)))
    }

    return answer.join("")
}