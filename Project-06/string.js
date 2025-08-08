const mainInput = document.querySelector(".main-input");
const lowerInput = document.querySelector(".lower1");
const upperInput = document.querySelector(".upper");
const camelInput = document.querySelector(".camel");
const pascalInput = document.querySelector(".pascal");
const snakeInput = document.querySelector(".snake");
const kebabInput = document.querySelector(".kebab");
const trimInput = document.querySelector(".trim");

// camel case string work
function capitalize(str) {
     if (!str || str.length === 0) return "";
    return str[0].toUpperCase() + str.slice(1, str.length);
};

function camelCase(string) {
    const lowerCase = string.toLowerCase();
    const divideString = lowerCase.split(' ');
    const finalArray = divideString.map((word, i) => {
        if(i === 0 ) return word;
        return capitalize(word);
    });
    return finalArray.join("");
};



// Pascal case string work
function pascalWork(words) {
    if(!words || words.length === 0) return "";
    const pascalSplict = words.split(" ");
    const pascal = pascalSplict.map(sttr => {
        if(!sttr || sttr.length === 0) return "";
       return sttr[0].toUpperCase() + sttr.slice(1, sttr.length);
    })
    return pascal.join("");
}

// snake case work
function snakeCase(strings) {
    const snakeArray = strings.trim().split(' ');
    const snake = snakeArray.map(sttrs => {
        if(!sttrs || sttrs.length === 0) return "";
       return sttrs[0].toLowerCase() + sttrs.slice(1, sttrs.length);
    })
    return snake.join('_');
};

// kebab xase work 
function kebabaWork(sentence) {
      const kebabArray = sentence.trim().split(' ');
    const kebab = kebabArray.map(st => {
        if(!st || st.length === 0) return "";
       return st[0].toLowerCase() + st.slice(1, st.length);
    })
    return kebab.join('-');
};

// trim case work
function trimCaseWork(sents) {
      const trimArray = sents.trim().split(' ');
    const trim = trimArray.map(strr => {
        if(!strr || strr.length === 0) return "";
       return strr[0].toLowerCase() + strr.slice(1, strr.length);
    })
    return trim.join('');
};


//Main Work is here
mainInput.addEventListener("input", () => {
    lowerInput.value = mainInput.value.toLowerCase();
    upperInput.value = mainInput.value.toUpperCase();
    camelInput.value = camelCase(mainInput.value);
    pascalInput.value = pascalWork(mainInput.value);
    snakeInput.value = snakeCase(mainInput.value);
    kebabInput.value = kebabaWork(mainInput.value);
    trimInput.value = trimCaseWork(mainInput.value);

});

