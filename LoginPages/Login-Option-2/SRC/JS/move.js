var form = document.getElementById('login');
var mode = document.getElementById('mode');
var accessi = document.getElementById('access-button');

//Functionality
var count = 1; //Part of the algorithm
var remainder; //Calculate the part of the algorithm
let width = screen.width; //Take the screen width been used

function moveContent(){
    remainder = count % 2;

    //Smartphones Functionality
    if(remainder == 0 && width <= 767){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '18%';
        mode.style.bottom = '-150px';
        accessi.style.bottom = '-160px';
    }
    else if(remainder == 1 && width <= 767){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '30%';
        mode.style.bottom = '-270px';
        accessi.style.bottom = '-280px';
    }
    else if(remainder > 1 && width <= 767){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '18%';
        mode.style.bottom = '-150px';
        accessi.style.bottom = '-160px';
    }

    //Mini Tablets Functionality
    else if(remainder == 0 && width >= 768 && width < 820){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '18%';
        mode.style.bottom = '100px';
        accessi.style.bottom = '90px';
    }
    else if(remainder == 1 && width >= 768 && width < 820){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '30%';
        mode.style.bottom = '-20px';
        accessi.style.bottom = '-30px';
    }
    else if(remainder > 1 && width >= 768 && width < 820){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '18%';
        mode.style.bottom = '100px';
        accessi.style.bottom = '90px';
    }

    //Tablets Functionality
    else if(remainder == 0 && width >= 820){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '18%';
        mode.style.bottom = '200px';
        accessi.style.bottom = '190px';
    }
    else if(remainder == 1 && width >= 820){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '30%';
        mode.style.bottom = '60px';
        accessi.style.bottom = '50px';
    }
    else if(remainder > 1 && width >= 820){
        count = count + 1;
        form.style.transition = 'all 0.5s';
        mode.style.transition = 'all 0.5s';
        accessi.style.transition = 'all 0.5s';
        form.style.top = '18%';
        mode.style.bottom = '200px';
        accessi.style.bottom = '190px';
    }
}