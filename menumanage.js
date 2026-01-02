//var input = document.getElementById('input');
// why is this stupid, it no worke
$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
        alert($(this).val());
    }
});
console.log("I Exist?")



