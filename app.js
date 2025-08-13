
let secretsFriends = [];

function addFriend() {
let typedName = document.getElementById('friend');
const addedFriend = typedName.value.trim();

if (addedFriend.trim() === "") {
    alert('You can NOT add a blank field. Add a name.');
    return;
}
if (secretsFriends.some(amigo => amigo.toLowerCase() === addedFriend.toLowerCase()))  {
    alert("This name was already added (including uppercase/lowercase variations).");
    return;
}
secretsFriends.push(addedFriend);
console.log("Nombres actuales:", secretsFriends, "Nuevo nombre:", addedFriend);
typedName.value = "";
UpdateList();
}

function UpdateList() {
const listaAmigos = document.getElementById('listaAmigos')
listaAmigos.innerHTML = ""
for (let index = 0; index < secretsFriends.length; index++) {
    const addedFriend = secretsFriends[index];
    listaAmigos.innerHTML += `<li>${addedFriend}</li>`;
}
}

function sortFriend() {
    if (secretsFriends.length === 0) {
        alert("Add at least one name before drawing.");
        console.log(secretsFriends);
        
        return;
    }
     ;
    document.getElementById('resultado').innerHTML = secretsFriends[Math.floor(Math.random() * secretsFriends.length)];
}