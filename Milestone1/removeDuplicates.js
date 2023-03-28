let itemContains=[];

function addItem(event){
    event.preventDefault();
    let item = document.getElementById("user-input").value;
    if(!item){
        alert("Enter an item");
        return;
    }
    if(!itemContains.includes(item)){
        itemContains.push(item);
        alert("successfully added");
    }else{
        alert("item already added");
    }

}
document.getElementById('submit-btn').addEventListener("click",addItem);