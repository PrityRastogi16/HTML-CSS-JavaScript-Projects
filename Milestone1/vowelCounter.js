function countVowel(event){
    const name=document.getElementById('name').value;
    const result=document.getElementById('result');
    event.preventDefault();
    let count=0;
        for(let i=0; i<name.length; i++){
            if(name[i] == 'a' ||
             name[i] == 'e' || 
             name[i] == 'i' ||
            name[i] == 'o' || 
            name[i] == 'u'){
                count ++;
            }
        }
        result.innerText = count;


};
document.getElementById('submit-btn').addEventListener("click",countVowel);