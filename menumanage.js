// I was stupid and got this to work
function terminal(ele) {
    if(event.key === 'Enter') {
        alert(ele.value);
        termInterpret(ele.value);
    }
}

function termInterpret(value){
    switch(value){
        case "help": 
            alert("RETURN HELP");
            break;
        default:
            alert(value + " is not a ");
            break;
    }
}