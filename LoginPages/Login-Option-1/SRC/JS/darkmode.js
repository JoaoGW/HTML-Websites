//Getting Elements
var nav = document.getElementById('navigation');
var navitemone = document.getElementById('nav-item-one');
var navitemtwo = document.getElementById('nav-item-two');
var navitemthree = document.getElementById('nav-item-three');
var navitemfour = document.getElementById('nav-item-four');
var navitemfive = document.getElementById('nav-item-five');
var mode = document.getElementsByClassName('mode__button');
var modeimg = document.getElementById('mode-image');
var form = document.getElementById('login');
var title = document.getElementById('login-text');
var emailtitle = document.getElementById('title-form');
var emailhelp = document.getElementById('emailHelp')
var passtitle = document.getElementById('title-form-two');
var passhelp = document.getElementById('passwordHelpInline');
var save = document.getElementById('savelabel');
var forgot = document.getElementById('forgotpass');
var create = document.getElementById('create_acc');
var socials = document.getElementById('socials-login');

//Booleans
var light = true;
var dark = false;

//Switch Button
function switchMode(){
    if(light == true){
        light = false;
        dark = true;
        console.log("Switched to Dark Mode");
        //Editing Elements
        nav.classList.remove('bg-light');
        nav.classList.add('bg-dark');
        navitemone.style.color = '#FFFFFF';
        navitemtwo.style.color = '#FFFFFF';
        navitemthree.style.color = '#FFFFFF';
        navitemfour.style.color = '#FFFFFF';
        navitemfive.style.color = '#FFFFFF';
        modeimg.src = '../IMGs/nightmode.svg';
        form.style.backgroundColor = '#404040';
        title.style.color = '#FDFDFD';
        emailtitle.style.color = '#FDFDFD';
        emailhelp.style.color = '#D0D0D0';
        passtitle.style.color = '#FDFDFD';
        passhelp.style.color = '#D0D0D0';
        save.style.color = '#FDFDFD';
        forgot.style.color = '#FDFDFD';
        create.style.color = '#FDFDFD';
        socials.style.color = '#D0D0D0';
    }
    else if(dark == true){
        light = true;
        dark = false;
        console.log("Switched to Light Mode");
        //Editing Elements
        nav.classList.remove('bg-dark');
        nav.classList.add('bg-light');
        navitemone.style.color = '#000000';
        navitemtwo.style.color = '#000000';
        navitemthree.style.color = '#000000';
        navitemfour.style.color = '#000000';
        navitemfive.style.color = '#000000';
        modeimg.src = '../IMGs/lightmode.svg';
        form.style.backgroundColor = '#FDFDFD';
        title.style.color = '#000000';
        emailtitle.style.color = '#000000';
        emailhelp.style.color = '#A9A9A9';
        passtitle.style.color = '#000000';
        passhelp.style.color = '#A9A9A9';
        save.style.color = '#000000';
        forgot.style.color = '#000000';
        create.style.color = '#000000';
        socials.style.color = '#A9A9A9';
    }
}