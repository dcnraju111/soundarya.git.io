function fir(){
    var n=document.getElementById("num").value;
    var m=parseInt(n);
    document.getElementById("res").innerHTML=fact(m);
    
}
function fact(n){
    if(n==0||n==1)
        return 1;
    return n*fact(n-1);
}
