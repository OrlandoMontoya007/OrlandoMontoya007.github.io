function printOrgans(){
    var distrbution_line = "<td>" + this.distrbution + "</td>";
    var inbody_line = "<td>" + this.inbody + "</td>";
    var sensory_line = "<td>" + this.sensory + "</td>";
    var keepsalive_line = "<td>" + this.keepsalive + "</td>";
    var regenitive_line = "<td>" + this.regenitive + "</td>";

    var row = "<tr>" + distrbution_line + inbody_line + sensory_line + keepsalive_line + regenitive_line + "</tr>";
    document.write(row);
}


function Organs(distrbution,inbody,sensory,keepsalive,regenitive){
    this.distrbution = distrbution
    this.inbody = inbody
    this.sensory = sensory
    this.keepsalive = keepsalive
    this.regenitive = regenitive

    this.printOrgans = printOrgans;
}

var skin = new Organs("No","No","Yes","Yes","Yes");
var liver = new Organs("Yes","Yes","No","Yes","Yes");
var eyes = new Organs("No","No","Yes","No","No");
var heart = new Organs("Yes","Yes","No","Yes","No");
var brain = new Organs("No","Yes","Yes","Yes","No");

var OrgansArray = [skin.inbody, liver.inbody, eyes.inbody, heart.inbody, brain.inbody];

for( var counter = 0; counter < OrgansArray.length; counter++)
{
    document.write(OrgansArray[counter] + "<br>");
}
