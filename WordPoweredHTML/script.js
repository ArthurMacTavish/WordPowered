function copyToClipboard(text) { // credit to https://stackoverflow.com/a/46118025
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

function DirectLink() {
    var userInputWord = document.getElementById("userWord").value;
    var userInputNumber = document.getElementById("numPower").value;
    if (userInputWord == "") {
        alert("Please Enter your Word!");
        throw new error();
    } else if (userInputNumber == "") {
        alert("Please Enter your Power Number!");
        throw new error();
    } else if (userInputNumber > 20) {
        if (confirm("The word will be powered more than 20 Times (or it will be powered " + userInputNumber + " times!) Are you sure want to do this?")) {
        } else {
            throw new error()
        }
    }
    var calculateHelper = 0;
    while (calculateHelper < userInputNumber) {
        userInputWord = userInputWord + userInputWord;
        calculateHelper = calculateHelper + 1;
    }
    copyToClipboard(userInputWord)
    alert("Your words are ready! If it doesn't work, try shorter word or less power amount.")
}
