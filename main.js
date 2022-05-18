const email = document.querySelector("#email")
const cntry = document.querySelector("#country")
const zip = document.querySelector("#zip")
const pw = document.querySelector("#password")
const rpw = document.querySelector("#repassword")
const form = document.querySelector("form")

email.addEventListener("input", checkEmail)
cntry.addEventListener("input", checkCntry)
zip.addEventListener("input", checkZip)
pw.addEventListener("input", checkpw)
rpw.addEventListener("input", checkRpw)

const btn = document.querySelector("button")
btn.addEventListener("click", function(event){
    event.preventDefault()
    if (checkEmail() && checkCntry() && checkZip() && checkpw() && checkRpw()){
        highFive()
    }
})
function checkEmail(){
    let exp = new RegExp("^.*@.*.com$")
    if (email.value === "") {
        email.setCustomValidity("This field is required!")
        email.classList.remove("valid")
        email.classList.add("invalid")
        email.reportValidity()
        return false
    } else if (!exp.test(email.value)){
        email.setCustomValidity("I am expecting an e-mail address!")
        email.classList.remove("valid")
        email.classList.add("invalid")
        email.reportValidity()
        return false
    }
    else {
        email.setCustomValidity("")
        email.classList.remove("invalid")
        email.classList.add("valid")
        return true
    }
}
function checkpw() {
    let exp = /(?=.*[\!\@\#\$\%\^\&\*\(\)\{\}\:\;\'\"\~\`\/\\\,\.\<\>\?])\d/
    let exp2 = new RegExp("(?=[A-Z])")
    let exp3 = /^.{6,}$/
    if (!exp3.test(pw.value)){
        pw.setCustomValidity("Password must be at least 6 characters long!")
        pw.classList.remove("valid")
        pw.classList.add("invalid")
        pw.reportValidity()
        return false
    } else if (!exp.test(pw.value)){
        pw.setCustomValidity("Password must contain at least one number and at least one special character!")
        pw.classList.remove("valid")
        pw.classList.add("invalid")
        pw.reportValidity()
        return false
    } else if (!exp2.test(pw.value)){
        pw.setCustomValidity("Password must contain at least one capital letter!")
        pw.classList.remove("valid")
        pw.classList.add("invalid")
        pw.reportValidity()
        return false
    } else {
        pw.setCustomValidity("")
        pw.classList.remove("invalid")
        pw.classList.add("valid")
        return true
    }

}
function checkCntry() {
    let exp = new RegExp("[0-9\!\@\#\$\%\^\&\*\(\)\{\}\:\;\'\"\~\`\/\\\,\.\<\>\?]")
    if (exp.test(cntry.value)){
        cntry.setCustomValidity("No Special Characters!")
        cntry.classList.remove("valid")
        cntry.classList.add("invalid")
        cntry.reportValidity()
        return false
    }
    else {
        cntry.setCustomValidity("")
        cntry.classList.remove("invalid")
        cntry.classList.add("valid")
        return true
    }
}
function checkZip(){
    let exp = new RegExp("[0-9]{5}")
    if (!exp.test(zip.value.trim())){
        zip.setCustomValidity("Invalid Zip Code")
        zip.classList.remove("valid")
        zip.classList.add("invalid")
        zip.reportValidity()
        return false
    } else {
        zip.setCustomValidity("")
        zip.classList.remove("invalid")
        zip.classList.add("valid")
        return true
    }
}
function checkRpw(){
    //get the value of the password field
    let exp = new RegExp(`^${pw.value}$`)
    //if the value of rpw matches that of pw then it is valid, else invalid
    if (exp.test(rpw.value)){
        rpw.setCustomValidity("")
        rpw.classList.remove("invalid")
        rpw.classList.add("valid")
        return true
    } else {
        rpw.setCustomValidity("Passwords must match")
        rpw.classList.remove("valid")
        rpw.classList.add("invalid")
        rpw.reportValidity()
        return false
    }

}
function highFive() {
    const hf = document.querySelector(".highfive")
    hf.classList.add("validate")
    setTimeout(() => {
        hf.classList.remove("validate")
    }, 3000);
}
