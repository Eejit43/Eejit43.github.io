let romanOutputCopy, romanOutputCopy2, integerOutput;

window.onload = function () {
    document.getElementById('integer-input').addEventListener("input", function () {
        let input = document.getElementById('integer-input');
        if (parseInt(input.value) === 0) {
            input.value = '';
        }
    });
    document.getElementById('integer-input').addEventListener("input", function () {
        return event.charCode >= 48 && event.charCode <= 57
    });
    document.getElementById('integer-input').addEventListener("input", function () {
        let input = document.getElementById('integer-input').value;
        let output = document.getElementById('roman-output').textContent;
        let arrow = document.getElementById('integer-arrow');
        if (input.length > 0) {
            document.getElementById('integer-convert').disabled = false;
        } else {
            document.getElementById('integer-convert').disabled = true;
        }
        if (input.length > 0 || output != '​' || arrow.style.color != 'dimgray') {
            document.getElementById('integer-reset').disabled = false;
        } else {
            document.getElementById('integer-reset').disabled = true;
        }
    });
    document.getElementById('integer-convert').addEventListener("click", convertInteger);
    document.getElementById('integer-reset').addEventListener("click", resetInteger);
    document.getElementById('roman-input').addEventListener("input", function () {
        let input = document.getElementById('roman-input').value;
        let output = document.getElementById('integer-output').value;
        let arrow = document.getElementById('roman-arrow');
        if (input.length > 0) {
            document.getElementById('roman-convert').disabled = false;
        } else {
            document.getElementById('roman-convert').disabled = true;
        }
        if (input.length > 0 || output != '' || arrow.style.color != 'dimgray') {
            document.getElementById('roman-reset').disabled = false;
        } else {
            document.getElementById('roman-reset').disabled = true;
        }
    });
    document.getElementById('roman-input').addEventListener("input", function () {
        let input = document.getElementById('roman-input');
        input.value = input.value.toUpperCase();
    });
    document.getElementById('roman-input').addEventListener("input", function () {
        //return event.charCode === 67 || event.charCode === 68 || event.charCode === 73 || event.charCode === 76 || event.charCode === 77 || event.charCode === 86 || event.charCode === 88 || event.charCode === 95 || event.charCode === 99 || event.charCode === 100 || event.charCode === 105 || event.charCode === 108 || event.charCode === 109 || event.charCode === 118 || event.charCode === 120
        let input = document.getElementById('roman-input');
        input.value = input.value.replace(/((?![IVXLCDM_]).)/gi, '')
    });
    document.getElementById('roman-convert').addEventListener("click", convertRoman);
    document.getElementById('roman-reset').addEventListener("click", resetRoman);
    document.getElementById('roman-output-copy').addEventListener("click", function () {
        copyText(romanOutputCopy, 'roman-output-copy', 'Copy w/ macrons')
    });
    document.getElementById('roman-output-copy-2').addEventListener("click", function () {
        copyText(romanOutputCopy2, 'roman-output-copy-2', 'Copy w/ underscores')
    });
    document.getElementById('integer-output-copy').addEventListener("click", function () {
        copyText(integerOutput, 'integer-output', 'integer-output-copy')
    });
}

function copyText(letiable, button, message) {
    navigator.clipboard.writeText(letiable);
    document.getElementById(button).textContent = "Copied!";
    setTimeout(function () {
        document.getElementById(button).textContent = message;
    }, 2000);
    showAlert('Copied!', '#009c3f')
}

function showAlert(text, color) {
    Toastify({
        text: text,
        duration: 2000,
        position: "center",
        style: {
            background: "#333",
            boxShadow: "none",
            minWidth: "150px",
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "bold",
            fontSize: "17px",
            color: color,
            padding: "16px 30px",
        },
    }).showToast();
}

function convertInteger() {
    let input = document.getElementById('integer-input').value;
    let output = document.getElementById('roman-output');
    let copy = document.getElementById('roman-output-copy');
    let copy2 = document.getElementById('roman-output-copy-2');
    input = parseInt(input);
    if (input > 0) {
        output.innerHTML = romanize(input);
        copy.disabled = false;
        copy2.disabled = false;
        document.getElementById('integer-arrow').style.color = "#009c3f";
        document.getElementById('integer-arrow').className = "fas fa-arrow-right";
    } else {
        showAlert('Value must be greater than 0!', '#FF5555')
        output.textContent = '​';
        copy.disabled = true;
        copy2.disabled = true;
        document.getElementById('integer-arrow').style.color = "#bf4042";
        document.getElementById('integer-arrow').className = "fas fa-times";
    }
}

function resetInteger() {
    document.getElementById('integer-input').value = '';
    document.getElementById('integer-convert').disabled = true;
    document.getElementById('integer-reset').disabled = true;
    document.getElementById('integer-arrow').style.color = "dimgray";
    document.getElementById('integer-arrow').className = "fas fa-arrow-right";
    document.getElementById('roman-output').textContent = '​';
    document.getElementById('roman-output-copy').disabled = true;
    document.getElementById('roman-output-copy-2').disabled = true;
    romanOutputCopy = undefined;
    romanOutputCopy2 = undefined;
}

function convertRoman() {
    let input = document.getElementById('roman-input').value;
    input = input.toUpperCase();
    input = input.replace(/_(\w)/g, function (match) {
        return match.toLowerCase()
    });
    input = input.replace(/_([a-z])/g, '$1');
    let output = document.getElementById('integer-output');
    let copy = document.getElementById('integer-output-copy');
    let validator = new RegExp('^(?:m*)(?:d?c{0,3}|c[md])(?:l?x{0,3}|x[cl])(?:(?:vi?){0,3}|i[xv])(?:M{0,3})(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$');
    if (validator.test(input) === true) {
        integerOutput = deromanize(input);
        output.value = integerOutput;
        copy.disabled = false;
        document.getElementById('roman-arrow').style.color = "#009c3f";
        document.getElementById('roman-arrow').className = "fas fa-arrow-right";
    } else {
        showAlert('Invalid roman numeral!', '#FF5555')
        output.value = '';
        copy.disabled = false;
        document.getElementById('roman-arrow').style.color = "#bf4042";
        document.getElementById('roman-arrow').className = "fas fa-times";
    }
}

function resetRoman() {
    document.getElementById('roman-input').value = '';
    document.getElementById('roman-convert').disabled = true;
    document.getElementById('roman-reset').disabled = true;
    document.getElementById('roman-arrow').style.color = "dimgray";
    document.getElementById('roman-arrow').className = "fas fa-arrow-right";
    document.getElementById('integer-output').value = '';
    document.getElementById('integer-output-copy').disabled = true;
}

//Some portions modified from https://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter and https://iandevlin.com/files/blog/romanNumerals.html
//HHHUUUUGEEE thanks to EmNudge#5549 from The Coding Den for their help in remaking this function!!!

const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function romanize(value) {
    let num = value;

    let barredNumerals = '';
    while (num > 3000) {
        for (let i = 0; i < decimal.length - 1; i++) {
            const currentNumber = decimal[i] * 1000;
            if (num < currentNumber) continue;

            num -= currentNumber;
            barredNumerals += roman[i];
            break;
        }
    }

    let regularNumerals = '';
    while (num > 0) {
        for (let i = 0; i < decimal.length; i++) {
            const currentNumber = decimal[i];
            if (num < currentNumber) continue;

            num -= currentNumber;
            regularNumerals += roman[i];
            break;
        }
    }
    romanOutputCopy = barredNumerals.replace(/I/g, 'Ī').replace(/V/g, 'V̄').replace(/X/g, 'X̄').replace(/L/g, 'L̄').replace(/C/g, 'C̄').replace(/D/g, 'D̄').replace(/M/g, 'M̄') + regularNumerals;
    romanOutputCopy2 = barredNumerals.replace(/([A-Z])/g, '_$1') + regularNumerals;
    return `<span style="border-top:1px solid">${barredNumerals}</span>` + regularNumerals;
}

/*const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function getRoman(value) {
    let romanNumeral = "";
    let numThousands = 0;
    for (let i = 0; i < roman.length; i++) {
        if (value == 0) break;
        while (value >= decimal[i]) {
            value -= decimal[i];
            romanNumeral += roman[i];
            if (roman[i] == 'M') numThousands++;
        }
    }
    return {
        numThousands: numThousands,
        romanNumeral: romanNumeral
    };
}

function romanize(value) {
    // 3,999,999 is the longest number normally represented by Roman numerals
    if (value <= 0 */
/* || value > 3999999*/
/* ) return value;
    let romanNumeral1 = "";
    let romanO = getRoman(value);
    if (romanO.numThousands >= 4) {
        let thousandString = "";
        for (let j = 0; j < romanO.numThousands; j++) thousandString += "M";
        let thousandsO = getRoman(romanO.numThousands);
        let thBase = "<span style='border-top:1px solid'>" + thousandsO.romanNumeral + "</span>";
        romanOutputCopy = thousandsO.romanNumeral.replace(/I/g, 'Ī').replace(/V/g, 'V̄').replace(/X/g, 'X̄').replace(/L/g, 'L̄').replace(/C/g, 'C̄').replace(/D/g, 'D̄').replace(/M/g, 'M̄') + romanO.romanNumeral.replace(thousandString, "");
        romanOutputCopy2 = thousandsO.romanNumeral.replace(/(\w)/g, '_$1') + romanO.romanNumeral.replace(thousandString, "");
        romanNumeral = romanO.romanNumeral.replace(thousandString, thBase);
    } else romanNumeral = romanO.romanNumeral;
    return romanNumeral;
}*/

function deromanize(str) {
    let validator = /^(?:m*)(?:d?c{0,3}|c[md])(?:l?x{0,3}|x[cl])(?:(?:vi?){0,3}|i[xv])(?:M{0,3})(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
        token = /[mdlv]|c[md]?|x[cl]?|i[xv]|[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
        key = {
            m: 1000000,
            cm: 900000,
            d: 500000,
            cd: 400000,
            c: 100000,
            xc: 90000,
            l: 50000,
            xl: 40000,
            x: 10000,
            ix: 9000,
            v: 5000,
            iv: 4000,
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        },
        num = 0,
        m;
    if (!(str && validator.test(str)))
        return false;
    while (m = token.exec(str))
        num += key[m[0]];
    return num;
}