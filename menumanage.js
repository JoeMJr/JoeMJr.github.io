// I was stupid and got this to work
function terminal(ele) {
    if(event.key === 'Enter') {
        //alert(ele.value);
        termInterpret(ele.value);
    }
}

function termInterpret(value){
    /* // Commands I need to add
    * help - Done - will update if I have any new commands
    * echo - Done
    * ls
    * cd
    * pwd
    * cat
    * clear - Done
    * man - Done for now
    * // I should add a credit/insporation command to show what has helped me make this terminal come to life
    * // I also Need to fix the terminal to show the results as ul items instead of alerts
    */
    trimmed = value.trimStart(); // Remove any leading spaces
    cmd = trimmed.split(" "); // I split the value to get the first array position as my actual command
    //console.log("0:" + cmd[0] + ", len:" + cmd[0].length);
    switch(cmd[0]){
        case "help": 
            alert("help echo ls cd pwd cat clear man"); // Might add more
            break;
        case "echo": 
            alert(trimmed.substr(5)); // fuck it, it works so i don't have to do any fancy wizardry
            break;
        case "clear": 
            location.reload(); // This may be stupid but I don't care
            break;
        case "man":
            manInterpret(cmd);
            break;
        default:
            alert(cmd[0] + " is not a usable command use help if you need it");
            break;
    }
}

function manInterpret(cmds){
    // I could add more uses with other command extensions like with -v
    switch(cmds[1]){
        case "help": 
            alert("returns the list of commands");
            break;
        case "echo": 
            alert("just prints out whatever is after it into the terminal");
            break;
        case "clear": 
            alert("clears the terminal by reloading the page");
            break;
        case "ls": 
            alert("lists directories");
            break;
        case "cd": 
            alert("changes the current directory");
            break;
        case "pwd": 
            alert("prints the current diractory");
            break;
        case "cat": 
            alert("shows the content of files");
            break;
        case "man": 
            alert("just shows wht each command does");
            break;
        default:
            alert(cmds[1] + " is not a usable command use help if you need it");
            break;
    }
}
// I would like to thank  Jakub T. Jankiewicz since I was looking at his to understand how I could make mine
