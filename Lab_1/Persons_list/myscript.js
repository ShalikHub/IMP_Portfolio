function myFunction() {
    var list = document.getElementById("newPerson").value;
    document.getElementById("added").innerHTML ='<p>' + document.getElementById("added").innerHTML + '</p>' + list;
}