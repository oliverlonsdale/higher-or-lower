let current_num = 0;
let correct = "Your number is"
document.getElementById("display").value = current_num;
//if higher button is pressed:
if (current_num<0){
    document.getElementById("display").value = "INVALID NUMBER";
}
function higher(){
    current_num = current_num + 1;
    document.getElementById("display").value = current_num;
}

function lower(){
    current_num = current_num - 1;
    document.getElementById("display").value = current_num;
}

function equal(){
    document.getElementById("display").value = correct+" "+current_num
}