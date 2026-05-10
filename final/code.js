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