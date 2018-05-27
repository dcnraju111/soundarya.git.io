function fift(){
    var n=document.getElementById("num").value;
    var m=parseInt(n);
    document.getElementById("res").innerHTML=prin(m);    
}
function prin(n)
{
    var str="";
    var i=1;
    for(i=1;i<=n;i++)
    {
        if(i%3==0&&i%5==0)
        {
            str+="FizzBuzz";
        }
        else if(i%3==0)
        {
            str+="Fizz";
        }
        else if(i%5==0)
        {
            str+="Buzz";
        }
        else
        {
            str+=i;
        }
        if(i!=n)
        {
            str+=",";
        }
    }
    return str;
}
