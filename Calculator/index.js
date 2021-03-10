// Declare variables
const mainDisplay = document.querySelector('.display-main');
const subDisplay = document.querySelector('.display-operations');
const btn = document.querySelectorAll('.button');
let tot, inp;

btn.forEach(btns => {
    btns.addEventListener('click', function () {
        // Gets the value in the main display
        inp = Number(mainDisplay.innerHTML);
        if (inp.toString().length < 10) {
            // If the input is not a number
            if (isNaN(this.innerHTML)) {
                // If the input is an operator
                if (this.innerHTML == "+" || this.innerHTML == "-" ||
                    this.innerHTML == "*" || this.innerHTML == "/") {
                    // If input is not empty
                    if (!(inp == "")) {
                        subDisplay.innerHTML += this.innerHTML;
                    }
                    mainDisplay.innerHTML = "";
                } // If button pressed is dot
                else if (this.innerHTML == ".") {
                    subDisplay.innerHTML += this.innerHTML;
                    mainDisplay.innerHTML += this.innerHTML;
                } // If button pressed is equals
                else if (this.innerHTML == "=") {
                    tot = eval(subDisplay.innerHTML);
                    mainDisplay.innerHTML = tot;
                } // If button pressed is AC
                else if (this.innerHTML == "ac") {
                    mainDisplay.innerHTML = "";
                    subDisplay.innerHTML = "";
                } // If button pressed is CE
                else if (this.innerHTML == "ce") {
                    // Loop to clear entry
                    for (let x = 0; x < inp.toString().length; x++) {
                        if ((isNaN(inp.toString().charAt(x))) == false) {
                            subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
                        }
                    }
                    mainDisplay.innerHTML = "";
                }
            } // If button pressed is a number
            else {
                mainDisplay.innerHTML += this.innerHTML;
                subDisplay.innerHTML += this.innerHTML;
            }
        }
        else {
            // If the input is not a number
            if (isNaN(this.innerHTML)) {
                // If the input is an operator
                if (this.innerHTML == "+" || this.innerHTML == "-" ||
                    this.innerHTML == "*" || this.innerHTML == "/") {
                    // If input is not empty
                    if (!(inp == "")) {
                        subDisplay.innerHTML += this.innerHTML;
                    }
                    mainDisplay.innerHTML = "";
                } // If button pressed is dot
                else if (this.innerHTML == ".") {
                    subDisplay.innerHTML += this.innerHTML;
                    mainDisplay.innerHTML += this.innerHTML;
                } // If button pressed is equals
                else if (this.innerHTML == "=") {
                    tot = eval(subDisplay.innerHTML);
                    mainDisplay.innerHTML = tot;
                } // If button pressed is AC
                else if (this.innerHTML == "ac") {
                    mainDisplay.innerHTML = "";
                    subDisplay.innerHTML = "";
                } // If button pressed is CE
                else if (this.innerHTML == "ce") {
                    // Loop to clear entry
                    for (let x = 0; x < inp.toString().length; x++) {
                        if ((isNaN(inp.toString().charAt(x))) == false) {
                            subDisplay.innerHTML = subDisplay.innerHTML.slice(0, -1);
                        };
                    };
                    mainDisplay.innerHTML = "";
                };
            };
        };
    });
});