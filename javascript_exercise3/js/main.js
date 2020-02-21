let username;
let password;
let confirmPassword;
let Student= [];
let studentPassword= [];
let Admin= [];
let adminPassword= [];
let typeOfUser;
let radios;
let userget;
let passget;

let validUser = () => {
    username = document.getElementById("uname").value;
    password = document.getElementById("pass").value;
    radios = document.getElementsByName("category");   
    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            typeOfUser = radios[i].value;
            break;
        }  
    }
            if(typeOfUser == "admin") {
                userget = JSON.parse(localStorage.getItem("AdminName"));
                passget = JSON.parse(localStorage.getItem("AdminPassword"));
                if (userget.includes(username) && passget.includes(password)) {
                    sessionStorage.setItem("username",username);
                    window.location.assign("AdminHome.html");  
                }  else{
                    alert("Anuthorized User");
                }
            }  if(typeOfUser == "student") {
                userget = JSON.parse(localStorage.getItem("StudentName"));
                passget = JSON.parse(localStorage.getItem("StudentPassword"));
                if (userget.includes(username) && passget.includes(password)) {
                    sessionStorage.setItem("username",username);
                    window.location.assign("home.html");
                } else {
                    alert("Anuthorized User");
                }
            }  
}
document.getElementById("session").innerHTML= sessionStorage.getItem("username")
let registration = () => {
    username = document.getElementById("uname").value;
    password = document.getElementById("pass").value;
    confirmPassword = document.getElementById("confirmpass").value;
    radios = document.getElementsByName("category");    
    if(username == "" || password == "" || confirmPassword == "") {
        alert ("Enter the Username Password and Confirm Password");
    }
     {
        if (password == confirmPassword) {            
            for(let i = 0; i < radios.length; i++) {
                if(radios[i].checked) {
                    typeOfUser = radios[i].value;
                    break;
                }  
            }
            if (typeOfUser == "admin") {
                Admin.push(username);
                localStorage.setItem("AdminName", JSON.stringify(Admin));
                adminPassword.push(password);
                localStorage.setItem("AdminPassword", JSON.stringify(adminPassword));
            }  else {
                Student.push(username);
                localStorage.setItem("StudentName", JSON.stringify(Student));
                studentPassword.push(password);
                localStorage.setItem("StudentPassword", JSON.stringify(studentPassword));
            }            
        } else {
            alert ("Password and Confirm Password must be same");
        }
    }
}



