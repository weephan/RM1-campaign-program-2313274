function KulliyahCheck(id) {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';

    }
}

function submitForm() {

    var name = document.getElementById("name");
    var staffno = document.getElementById("staffno");
    var staff = document.getElementById("staff");
    var email = document.getElementById("email");
    var contactno = document.getElementById("contactno");
    var deductamt = document.getElementById("deductamt");
    var kulliyah = document.getElementById("kulliyah");
    var dateday = document.getElementById("dateday");
    var datemonth = document.getElementById("datemonth");
    var dateyear = document.getElementById("dateyear");
    var monthfrom = document.getElementById("monthfrom");
    var yearfrom = document.getElementById("yearfrom");
    var monthuntil = document.getElementById("monthuntil");
    var yearuntil = document.getElementById("yearuntil");

    if (!(name.checkValidity() && staffno.checkValidity() && staff.checkValidity() && email.checkValidity() && contactno.checkValidity() && deductamt.checkValidity() && dateday.checkValidity() && datemonth.checkValidity() && dateyear.checkValidity() && monthfrom.checkValidity() && yearfrom.checkValidity() && monthuntil.checkValidity() && yearuntil.checkValidity())) {
 
    } else {
        document.getElementById("message")
            .innerHTML = "Input is ALL RIGHT";
        alert("Form submitted");

    }
}

var navibar = document.getElementById("navitems");
        var navi = navibar.getElementsByClassName("navbar");
        for (var i = 0; i < navi.length; i++) {
            navi[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }