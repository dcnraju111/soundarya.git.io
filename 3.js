function multi(){
    var n=document.getElementById("num").value;
    var m=parseInt(n);
    document.getElementById("res").innerHTML=sum(m-1);    
}
function sum(n)
{
    if(n==0)
    {
        return 0;
    }
    if(n%3==0||n%5==0)
    {
    return n+sum(n-1);
    }
    return sum(n-1);
}
