
let homeCount = 0;
let guestCount = 0;

document.getElementById('homeAddOne').onclick = function(){
    homeCount ++;
    document.getElementById('home-label').textContent = homeCount;
}

document.getElementById('homeAddTwo').onclick = function(){
    homeCount += 2;
    document.getElementById('home-label').textContent = homeCount;
}

document.getElementById('homeAddThree').onclick = function(){
    homeCount += 3;
    document.getElementById('home-label').textContent = homeCount;
}

document.getElementById('home-reset').onclick = function(){
    homeCount = 0;
    document.getElementById('home-label').textContent = homeCount;
}
/*------------------------------------------*/ 
document.getElementById('guestAddOne').onclick = function(){
    guestCount ++;
    document.getElementById('guest-label').textContent = guestCount;
}

document.getElementById('guestAddTwo').onclick = function(){
    guestCount += 2; 
    document.getElementById('guest-label').textContent = guestCount;
}

document.getElementById('guestAddThree').onclick = function(){
    guestCount += 3;
    document.getElementById('guest-label').textContent = guestCount;
}

document.getElementById('guest-reset').onclick = function(){
    guestCount = 0;
    document.getElementById('guest-label').textContent = homeCount;
}


