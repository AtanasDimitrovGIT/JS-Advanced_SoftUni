class Textbox {

    constructor(selector, invalidSymbolsRegex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = invalidSymbolsRegex;
        this.value = '';

        for (let element of this.elements) {
            element.addEventListener('change', (event) => {
                this.value = event.target.value;
            });
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
        for (let element of this.elements) {
            element.value = newValue;
        }
    }
}
      


let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
