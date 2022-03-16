import isPalindrome from "./checker"
import "./style.css"

function buttonSubmitClick(): void {
    console.log("llamada");
    let inputText = <HTMLInputElement>document.getElementById("inputText");
    let divResult = document.getElementById("divResult")!;
    if (isPalindrome(inputText.value)) {
        divResult.innerHTML = "The word is palindrome";
        divResult.className = "palindrome";
    }
    else {
        divResult.innerHTML = "The word is not palindrome";
        divResult.className = "notPalindrome";
    }
}

let buttonSubmit = document.getElementById("buttonSubmit")!;
console.log(typeof buttonSubmit);
buttonSubmit.addEventListener("click", buttonSubmitClick);