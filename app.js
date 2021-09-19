var button = document.querySelector("#btn");
var input = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationUrl(input) {
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something is wrong with the Server !! Please try after sometime")
}

function clickHandler() {
    var inputText = input.value;

    fetch(getTranslationUrl(inputText))
        .then(respose => respose.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; 
        })
        .catch(errorHandler)
};

button.addEventListener("click", clickHandler)