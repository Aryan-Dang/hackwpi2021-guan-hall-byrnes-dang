function idShow(){
    //Assuming showId is true if user chooses to show id to everyone.
    //Eventually would call to database to recieve user preference
    let showId = true;
    
    //this could be a property of the object/ data member of a class that represents the user
    //eventually, will call database for the id
    let discordID = 'johndoe#12345';
    let divId = document.getElementById('discord_id');
    if(showId){
        let content = document.createTextNode(discordID);
        divId.appendChild(content);
    }
}

function togglePrivacy() {
    let element = arguments[0];
    let elementId = element + "_id";
    let elementButton = element + "_button";
    let privacy = false;

    if(document.getElementById(elementButton).innerHTML="Make Private"){
        document.getElementById(elementId).innerHTML = "";
    }
}