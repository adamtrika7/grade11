const people = [
    {
        username: "adam",
        phone: "01080215696",
        name: "آدم"
    },

    {
        username: "ahmed",
        phone: "01151785442",
        name: "أحمد"
    },

    {
        username: "lamis",
        phone: "01025124888",
        name: "لميس"
    },

    {
        username: "ganna",
        phone: "01207127842",
        name: "جنة"
    },

    {
        username: "hala",
        phone: "01226673920",
        name: "حلا"
    },

    {
        username: "malak",
        phone: "01207175037",
        name: "ملك"
    },

    {
        username: "abubakr",
        phone: "01102313350",
        name: "أبوبكر"
    },

    {
        username: "eman",
        phone: "01010960083",
        name: "إيمان"
    },

    {
        username: "sondos",
        phone: "01270005920",
        name: "سندس"
    }
];


function checkUser() {

    let username =
        document.getElementById("username").value.trim().toLowerCase();

    let phone =
        document.getElementById("phone").value.trim();


    let person = people.find(function(user) {

        return user.username.toLowerCase() === username
            && user.phone === phone;

    });


    if (person) {

        if (person.username === "adam") {
            window.open("adam.html", "_blank");
        }

        else if (person.username === "ahmed") {
             window.open("ahmed.html", "_blank");
        }

        else if (person.username === "lamis") {
            window.open("lamis.html", "_blank");
        }

        else if (person.username === "ganna") {
          window.open("ganna.html", "_blank");
        }

        else if (person.username === "hala") {
            window.open("hala.html", "_blank");
        }

        else if (person.username === "malak") {
             window.open("malak.html", "_blank");
        }

        else if (person.username === "abubakr") {
           window.open("abubakr.html", "_blank");
        }

        else if (person.username === "eman") {
            window.open("eman.html", "_blank");
        }

        else if (person.username === "sondos") {
           window.open("sondos.html", "_blank");
        }

    }

    else {

        alert("الـ Username والـ Phone مش متطابقين يا نجم 😂");

    }

}