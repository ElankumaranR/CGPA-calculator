function sub(){
    window.alert("Form is sumitted successfully");
}
function fun(){
    if(document.getElementById("eye").className=="fa-solid fa-eye"){
        document.getElementById("eye").className="fa-solid fa-eye-slash";
    }
    else{
        document.getElementById("eye").className="fa-solid fa-eye";
    }
    if(document.getElementById("p").type=="password"){
        document.getElementById("p").type="text"; 
    }
    else{
        document.getElementById("p").type="password";
    }
}
function formvalid(){
    c=0;
    a=document.getElementsByClassName('in');
    for( i of a){
        if (!Notnull(i)){
            c=1;
            break;
        }
    }
    if(c==0){
        if(Numch(document.getElementById("phone"))&&isValidEmail(document.getElementById("email"))&&isvalidDob()&&isvalidpass()){
            if(check(document.getElementsByClassName("check"))){
                document.getElementById("submit").type="submit";
            }
            else{
                document.getElementById("submit").type="button";
            }
        }
        else{
            document.getElementById("submit").type="button";
        }
    }
    else{
        document.getElementById("submit").type="button"; 
    }
}
function Notnull(element){
    if(element.value==""){
        window.alert("please fill the "+element.name);
        return false;
    }
    return true;
}
function check(ch){
    for( i of ch){
        if (i.checked){
            return true;
        }
    }
    window.alert("please choose any language")
    return false;
}
function Numch(element){
            a=element.value;
            if(isNaN(a)||a.length!=10){
                window.alert("Fill the correct phone number format");
                return false;
            }
            return true;
}
function isValidEmail(element) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (element && element.value && emailPattern.test(element.value)) {
        return true; 
    } else {
        window.alert("please fill the email in correct format");
        return false; 
    }
}
function isvalidDob(){
    a=parseInt(document.getElementById("age").value);
    b=document.getElementById("dob").value;
    d=new Date();
    cy=parseInt(d.getFullYear());
    y=parseInt(b)
    if(cy-y==a){
        return true;
    }
    else{
        window.alert("Year and age are mismatched");
        return false;
    }
}
function isvalidpass(){
    var pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}[\]:;<>,.?/~]).{8,}$/;

    if(pattern.test(document.getElementById("p").value)){
        return true;
    }
    else{
        window.alert("Password must contain a Capital letter and atleast one number and symbol and minimum length 8")
        return false;
    }
}