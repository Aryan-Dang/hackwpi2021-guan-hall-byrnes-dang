function idShow(){
    //Assuming showId is true if user chooses to show id to everyone.
    let showId = true;
    //this could be a property of the object/ data member of a class that represents the user
    let id = 'discord';
    let divId = document.getElementById('id');
    if(showId){
        let tag = document.createElement('p');
        divId.appendChild(tag);
        let content = document.createTextNode(id);
        tag.appendChild(content);
    }
    
}