function validation(){
    let f = document.forms["myForm"]["fname"].value;
    let l = document.forms["myForm"]["lname"].value;
    if ((f == "") && (l == "")){
        alert("Enter first and last names")
        return false
    }
    else if (f == ""){
        alert("Fill out the first name")
        return false
    }

    else if (l == ""){
        alert("Fill out the last name")
        return false
    }

    let em = document.forms["myForm"]["emailid"].value
    emailregex = /[a-z0-9]+@[a-z]+.+[a-z]/
    


}

