//display the value on click of the button::
function dis(val){
    document.getElementById("result").value+=val;
}
function cal(){
    var x=document.getElementById("result").value;
    y=eval(x);
    document.getElementById("result").value=y;
}
function clr(){
    document.getElementById("result").value=" ";
}