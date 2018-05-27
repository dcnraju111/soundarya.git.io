function powe(){
    var n=document.getElementById("num").value;
    var m=parseInt(n);
    document.getElementById("res").innerHTML=po(m);    
}
function po(n)
{
    var i,x=2;
    for(i=1;x*2<n;i++)
    {
        x*=2;
    }
    var y=x*2;
    if(Math.abs(n-x)>Math.abs(y-n))
    {
        return i+1;
    }
    return i;
}
