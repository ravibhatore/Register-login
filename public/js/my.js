
function myFunction() {
    document.getElementById("sign").style.display = "block"
    document.getElementById("login").style.display = "none"
}
function second() {
    document.getElementById("sign").style.display = "none"
    document.getElementById("login").style.display = "block"
}
// function index() {
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if (email == "email" || password == "for123") {
//         window.location = "index.html";    
//     }
//     else {
//         alert("Enter valid details")
//     }
// }  
    let data = [];
    let acceptData = () => {
   var myname = document.getElementById("fname").value
   var  myemail = document.getElementById("femail").value
   var mycontact =  document.getElementById("fcontact").value
   var  mypassword =  document.getElementById("fpassword").value 
    if (myname == "" || myemail == "" || mycontact == "" || mypassword == "") {
        alert("enter your all details");
    } 
    else{
        data.push({
            mname :  document.getElementById("fname").value,
            email :  document.getElementById("femail").value,
            contact :  document.getElementById("fcontact").value,
            password :  document.getElementById("fpassword").value,
           });
           localStorage.setItem("data", JSON.stringify(data));
           const getdata=JSON.parse(localStorage.getItem('data'));
          
        }
    };
          var mname = document.getElementById("fname")
          var password = document.getElementById("fpassword")
          var myname = document.getElementById("fname")
          var  mypassword =  document.getElementById("fpassword")
         
          function index(){
           const getdata=JSON.parse(localStorage.getItem('data'));
            console.log(getdata);
            let entries = Object.entries(mname.value);
            console.log(entries);
          if( getdata.mname === myname.value && getdata.password === mypassword.value){
            window.location = "index.html";     
           }            
           else{
                   alert("Enter valid details")
                }
           
    
}
