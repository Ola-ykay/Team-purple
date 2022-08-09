 function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // DOM Elements
// Get DOM elements

const redactButton = document.querySelector("#btn-submit");
const userInput = document.querySelector("#usermessage");
const hiddenMessage = document.querySelector("#hiddenmessage");
const userReplacement = document.querySelector("#replacemt-symbol");
const statWords = document.querySelector("#stats--words");
const replacedWords = document.querySelector("#replaced--words");
const timeTaken = document.querySelector("#time--taken");

// Get Users Inputs
let text = "";

// To record the time taken by the app.
const startTime = new Date().getMilliseconds();


redactButton.addEventListener('click', () => {
  let hiddenMsgList = hiddenMessage.value.split(" ");
  text = userInput.value;
  for (i in hiddenMsgList) {
  text = redactText(text, hiddenMsgList[i].trim());
  }
  userInput.value = text;
  let textArray = text.split(" ");
  statWords.textContent = `Total number of words scanned: ${textArray.length} words scanned`;
  replacedWords.textContent = `Total number of words replaced: ${handleFxns(textArray)} word(s) replaced`
let endTime = new Date().getMilliseconds();
  timeTaken.textContent = `Time taken: ${(endTime - startTime) / 1000} seconds taken to scramble your text.`
});

function redactText(text, wordToRedact) {
  let word = stringToRegex(convertString(wordToRedact));
  let replacement = userReplacement.value.repeat(wordToRedact.length);
  let newText = text.replace(word, replacement);
  return newText;
}

function stringToRegex(s, m) {
  return (m = s.match(/^([\/~@;%#'])(.*?)\1([gimsuy]*)$/)) ? new RegExp(m[2], m[3].split('').filter((i, p, s) => s.indexOf(i) === p).join('')) : new RegExp(s);
}

function convertString(s) {
  let newString = "/";
  for (i in s) {
    newString += s[i];
  }
  newString += "/gi";
  return newString;
}

function handleFxns(textArray) {
  let replacedWordNum = 0;
  for (i in textArray){
    if (textArray[i].includes(userReplacement.value)){
      replacedWordNum++;
    };
  }
  return replacedWordNum;
}
  
 }

// ======= DO NOT EDIT ============== //
 export default startApp;
  // ======= EEND DO NOT EDIT ========= // 