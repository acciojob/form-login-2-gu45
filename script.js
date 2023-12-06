let submit = document.getElementById("submit");
let form = document.getElementById("form");

submit.addEventListener("click",function(event){
    event.preventDefault();
    let frname = form["First Name"].value
    alert(`First Name: ${frname}`)

    let lastname = form["Last Name"].value
    alert(`Last Name: ${lastname}`)

    let pno = form["Phone Number"].value
    alert(`Phone Number: ${pno}`)

    let eid = form["Email ID"].value
    alert(`Email ID: ${eid}`)
    
})

