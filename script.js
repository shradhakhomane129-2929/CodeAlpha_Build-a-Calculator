const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
   //For a bracket

   let bracketOpen = true;

   function addBracket(){
    const display =
    document.getElementById("display");
    if(bracketOpen){
        display.value += "(" ;
    }
    else{
        display.value += ")" ;
    }
    bracketOpen =!bracketOpen;
   }

// Keyboard support
document.addEventListener("keydown", function(e) {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});