const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let Slidernumber = 1;
const length = images.length;

right.addEventListener('click', ()=>{

    if( Slidernumber < length ){

        slidefuncion();
    }
    else{
        firstslidefunction();
    }
})

left.addEventListener('click', ()=>{

    if( Slidernumber > 1 ){

        leftslidefuncion();
    }
    else{
        lastslidefunction();
    }
})

let slidefuncion = ()=>{
    slider.style.transform = `translateX(-${(Slidernumber*900)}px)`;
    Slidernumber++;
}


let leftslidefuncion = ()=>{
    slider.style.transform = `translateX(-${((Slidernumber-2)*900)}px)`;
    Slidernumber--;
}

let firstslidefunction = () =>{
    slider.style.transform = `translateX(0px)`;
    Slidernumber = 1;
}

let lastslidefunction = () =>{
    slider.style.transform = `translateX(-${(length-1)*900}px)`;
    Slidernumber = length;
}