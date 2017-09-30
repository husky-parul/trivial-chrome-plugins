function getText(){
  return document.body.innerText
}
function getHTML(){
  return document.body.outerHTML
}
console.log(getText());             //Gives you all the text on the page
//console.log(getHTML()); 

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
      if(request.method == "getText"){
          sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
      }
  }
);