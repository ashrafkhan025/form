const Regform=document.getElementById('Regform');
const fullname=document.getElementById('full_name');
const nameErr=document.getElementById('nameErr');
const email=document.getElementById('email');
const emailErr=document.getElementById('emailErr');
const age=document.getElementById('age');
const ageErr=document.getElementById('ageErr');
const result=document.getElementById('result');


function clearErrors(){
    nameErr.textContent="";
    emailErr.textContent="";
    ageErr.textContent="";
    result.textContent="";
}

Regform.addEventListener('submit',function(e){

    e.preventDefault();

    clearErrors();

    let valid=true;
    const name=fullname.value.trim();
    if(name.length<3){
        nameErr.textContent="Name must be at least 3 character Long";
        valid=false;
    }

    const emailvalue=email.value.trim();
    const emailpattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailvalue.match(emailpattern)){
        emailErr.textContent="Invalid Email Address";
        valid=false;
    }
    const agevalue=age.value.trim();
    if(!agevalue || agevalue<1 || agevalue>120){
        ageErr.textContent="Age must be between 1 and 120";
        valid=false;
    }

    if(!valid){
        return;
    }

    result.className = 'success';
     result.textContent = 'Form submitted successfully — name: ' + name + ', email: ' + emailvalue + ', age: ' + agevalue + '.';
     Regform.reset();




}
)
