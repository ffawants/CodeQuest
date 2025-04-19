const link = document.getElementById("join");
const reg = document.getElementById("join2");

function register(){
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const err = document.getElementById('errReg');
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{8}$/; 

    //todo validation
    if (!fname || !lname) {
        err.innerHTML = "";
        if(!fname){
            err.innerHTML += "First name cannot be empty";
        }else{
            err.innerHTML += "Last name cannot be empty";
        }
        return;
      }else if (!emailPattern.test(email)) {
        err.innerHTML = "";
        err.innerHTML += "Incorrect email";
        return;
    }else if (!phonePattern.test(phone)) {
        err.innerHTML = "";
        err.innerHTML += "Phone number must 8 digits. (ex : 12345678 )";
        return;
    }
    err.innerHTML = "";
    alert("You've been successfully registered!")
    localStorage.setItem('fname', fname);
    link.style.display= "none";
    reg.style.display= "none";
const user2 =  document.getElementById("user");
user2.innerHTML = fname;

}