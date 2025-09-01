function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0)
        return "NUH UH!";
    return a / b;
}

function operate(firstNum, operator, secondNum) {
    if (firstNum === undefined || secondNum === undefined)
        return "ERROR: number must be provided";

    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return sub(firstNum, secondNum);
        case "*":
            return mult(firstNum, secondNum);
        case "/":
            return div(firstNum, secondNum);
    }
}

const display = document.querySelector(".result");
function parseDisplay() {
    const displayNum = display.textContent;
    const parts = displayNum.split(" ");
    console.log(parts);

    firstNum = Number(parts[0]);
    operator = parts[1];
    secondNum = Number(parts[2]);
    return {firstNum, operator, secondNum};
}

function appendDisplay(text) {
    display.textContent += text;
}

function updateDisplay(text) {
    display.textContent = text;
}

const numButton = document.querySelectorAll(".num");
numButton.forEach((num) => {
    num.addEventListener("click", (e) => {
        if (display.textContent == 0) {
            if (e.target.textContent == 0) {
                updateDisplay("0");
                return;
            } else if (e.target.textContent == ".") {
                updateDisplay("0.");
                return;
            } else {
                updateDisplay(e.target.textContent);
                return;
            }
        }

        // i'm dumb idk how to implement decimal
        // if (e.target.textContent == ".") {
        //     const parsed = parseDisplay();
        //     console.log(parsed);
        //     if (String(parsed.secondNum).includes(".")) {
        //         return;
        //     }
        //     if (String(parsed.firstNum).includes(".")) {
        //         return;
        //     }
        // }
        appendDisplay(e.target.textContent);
    });
});

const signButton = document.querySelectorAll(".sign");
signButton.forEach((sign) => {
    sign.addEventListener("click", (e) => {
        let signExist = false;
        const signs = ["+", "-", "*", "/"];
        signs.forEach(sign => {
            if (display.textContent.includes(sign)) {
                signExist = true;
                return;
            }
        });

        if (!signExist) {
            appendDisplay(` ${e.target.textContent} `);
        }
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", (e) => {
    updateDisplay("");
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", (e) => {
    let parsed = parseDisplay();
    let result = operate(parsed.firstNum, parsed.operator, parsed.secondNum);
    updateDisplay(result);
});

const delButton = document.querySelector(".del");
delButton.addEventListener("click", (e) => {
    let content = display.textContent;
    content = content.slice(0, -1);
    updateDisplay(content);
});