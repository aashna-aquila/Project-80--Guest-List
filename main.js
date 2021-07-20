var names_of_people=[];
function submit()
{
   var guest_name=document.getElementById("input1").value;
names_of_people.push(guest_name);
document.getElementById("displayname").innerHTML=names_of_people;
}

function show()
{
    var i= names_of_people.join("<br>");
    document.getElementById("p1").innerHTML=i;
}
 
function sort()
{
    names_of_people.sort();
    var i= names_of_people.join("<br>");
    document.getElementById("Sorted").innerHTML=i;
}
 
function Search()
{
    var s= document.getElementById("Searchinput").value;
    var a=0;
    for (var u=0; u<names_of_people; u++)
    {
        if(s==names_of_people[u])
        {
            a=a+1;
        }
    }
        
    document.getElementById("p2").innerHTML="name found"+a+"times";
}