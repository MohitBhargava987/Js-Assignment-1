// Q1. Count instances of a Character in a String


function charCount(l, str)
{
    var cnt = 0;
    for (var i = 0; i < str.length;i++)
    {
        if(str.charAt(i) == l)
        {
            cnt += 1;
        }
    }
    return cnt;
}
console.log(charCount('A','qwerty'));