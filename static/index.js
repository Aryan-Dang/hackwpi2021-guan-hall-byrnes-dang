//This function should eventually call the api for a match and then reload the page
//with a new conversation with the matched person
function match() {
    document.getElementById("text").innerHTML = "No one to talk to...";
}

//This function should eventually get the data for the current page and then display
//the proper list of conversations and the proper open conversation
function loadConversations() {
    document.getElementById("convo").innerHTML += "<p> Jane Doe </p>"
    document.getElementById("text").innerHTML += "<br> Talk to me please!";
}