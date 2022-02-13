// Function created to check two things:
// if age of applicant is less then 14 years --> show message about that
// if an applicant wants to bacome member of the club or looking for a partner, 
// it's neccessary that he specifies his squash level
// After raising alerts this JS changes neccessary fields border colors

var today = new Date();

function date_of_birth_checker() {
    let birthdate = document.querySelector("#birthdate").value;
    var date_of_birth  = new Date(birthdate);
    var age = today.getFullYear() - date_of_birth.getFullYear(); 
    var m = today.getMonth() - date_of_birth.getMonth(); 
    //  if today's month is higher than month of birth it means that the birthday still haven't happenned and person is 1 year younger
    //  if month is equal, then check dates difference 
    if (m < 0 || (m === 0 && today.getDate() < date_of_birth.getDate())) {
        age--; 
    }
    if (age < 14) {
        alert ("Sorry, but if you're younger than 14 years old, we need your parents to provide their information")
        return false;
    }
    else {
        return true
    };
}

// function to check if the user has selected any experience level
function experience_checker() {
    const selections = document.querySelectorAll('input[name="exp_level"]');
    for (const selection of selections){
        if (selection.checked == true){ 
            return true;
        }
        else {return false}
    }
}
// function to check if user selected specific maillist checkboxes 
function mail_checker() {
    var regmail_partners = document.getElementById("regmail_partners");
    var regmail_joinclub = document.getElementById("regmail_joinclub");  
    if (regmail_partners.checked == true){
        return false;
    }
    else {
        return true
    };
}

document.querySelector("#main_form").addEventListener('submit', submit_main_form);
function submit_main_form(event) {
    if (!date_of_birth_checker())
        event.preventDefault();
        document.getElementById('birthdate').style["border"]='2px #7AB5B6 solid';
    if (!mail_checker() &&  !experience_checker()) {
        alert ("If you want to find a partner or join the club, you need to specify your experience level")
        event.preventDefault();
        document.getElementById('exp_level_div').style["border"]='2px #7AB5B6 solid';
    }
};