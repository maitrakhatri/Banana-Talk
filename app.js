const button = document.querySelector("#btn");
const input = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#txt-output");

const serverUrl= "https://api.funtranslations.com/translate/minion.json"  

const getTranslationUrl = input => `${serverUrl}?text=${input}`

// function getTranslationUrl(input) {
//     return serverUrl + "?" + "text=" + input
// }

const errorHandler = error => {
    console.log(`Error occured: ${error}`);
    alert(`Something is wrong with the Server !! Please try after sometime`);
}

// function errorHandler(error) {
//     console.log("error occured", error);
//     alert("Something is wrong with the Server !! Please try after sometime")
// }

const clickHandler = () => {

    const inputText = input.value;

    fetch(getTranslationUrl(inputText))
        .then(respose => respose.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; 
        })
        .catch(errorHandler)

};

// function clickHandler() {
//     const inputText = input.value;

//     fetch(getTranslationUrl(inputText))
//         .then(respose => respose.json())
//         .then(json => {
//             const translatedText = json.contents.translated;
//             outputDiv.innerText = translatedText; 
//         })
//         .catch(errorHandler)
// };

button.addEventListener("click", clickHandler)
