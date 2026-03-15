function checkemail()
{
    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "")
    {
        document.getElementById("emailerror").innerHTML = "please fill in this box";
    }
    else
    {
        document.getElementById("emailerror").innerHTML = "";
    }

 //////////////////////////////////////////////////////////////////////////////// if empty
   if(confirm == "")
    {
        document.getElementById("confirmerror").innerHTML = "please fill in this box";
    }
    else
    {
        document.getElementById("confirmerror").innerHTML = "";
    }

 //////////////////////////////////////////////////////////////////////////////// if same
   if(email != confirm)
    {
        document.getElementById("emailerror").innerHTML = "Both emails must be identical";
        document.getElementById("confirmerror").innerHTML = "Both emails must be identical";
    }
}

  ////////////////////////////////////////////////////////////////////////////////
function pizzaorder()
{
    var output = "<h3>Pizza Order: ";

    if(document.getElementById("small").checked == true)
    {
        output += " Small ";
    }
    else if(document.getElementById("medium").checked == true)
    {
        output += " Medium ";
    }
    else
    {
        output += " Large "
    }

  ////////////////////////////////////////////////////////////////////////////////
    if( document.getElementById("pepperoni").checked == true)
    {
        output += " Pepperoni ";
    }

    if( document.getElementById("sausage").checked == true)
    {
        output += " Sausage ";
    }

    if(document.getElementById("mushrooms").checked == true)
    {
        output += " Mushroom ";
    }

 ////////////////////////////////////////////////////////////////////////////////
    document.getElementById("output").innerHTML = output + "</h3>";
}