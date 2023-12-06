//your JS code here. If required.
let submit = document.getElementById("submit");
submit.addEventListener("click",function(event){
    event.preventDefault();
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("LastName").value;
    let phone = document.getElementById("phnbr").value;
    let email = document.getElementById("emid").value;
alert(fname)
alert(lname)
alert(phone)
alert(email)
})

