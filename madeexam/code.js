function acc()
{
    var output = "";
  ////////////////////////////////////////////////////////////////////////////////
    if( document.getElementById("7").checked == true)
    {
        output += 1 ;
    }

    if( document.getElementById("5").checked == true)
    {
        output += 0;
    }

    if( document.getElementById("3").checked == true)
    {
        output += 0;
    }

    if( document.getElementById("1").checked == true)
    {
        output += 0;
    }
 ////////////////////////////////////////////////////////////////////////////////
    document.getElementById("output").innerHTML = "Score:" + output +  "/2";
}