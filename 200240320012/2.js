function btnSubmit() {

    let userName = document.querySelector("#userName").value;
    let emailAddress = document.querySelector("#emailAddress").value;
    let password = document.querySelector("#password").value;

    //Clone
    let cloneValue = document.querySelector("#clone2").cloneNode(true);

    //Remove ID Attribute
    cloneValue.removeAttribute("id");

    //visibility
    cloneValue.style.visibility = "visible";

    cloneValue.children[0].innerHTML = "UserName" + ": " + userName;

    cloneValue.children[1].innerHTML = "Email-Address" + ": " + emailAddress;

    cloneValue.children[2].innerHTML = "Password" + ": " + password;


    //Append
    let main = document.querySelector("#clonemain");
    main.insertBefore(cloneValue, main.firstChild);

    //clear the input
    document.querySelector("#userName").value = "";
    document.querySelector("#emailAddress").value = "";
    document.querySelector("#password").value = "";

}