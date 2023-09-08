
// main toggle header start


window.addEventListener('scroll',()=>{
    if(window.pageYOffset>500){
        document.getElementById('main-drop-down-header')
            .style.backgroundColor='white';
        let x=document.getElementById('p-eroo')
        x.style.color='black';
        document.getElementById('main-dropdown-list')
            .style.backgroundColor='white';

    }else{
        document.getElementById('main-drop-down-header')
            .style.backgroundColor='black';
        let x=document.getElementById('p-eroo')
        x.style.color='white';
        document.getElementById('main-dropdown-list')
            .style.backgroundColor='black';

    }
});

$(document).ready(function (){
    $('.para-main-toggle').click(function (){
        $('.main-dropdown-list').slideToggle();


    })


})







// main toggle header end

















$(document).ready(function (){
    const slidesData=$('.slide');
    let pointer=0;

    function viewSlide(){
      //  slidesData.removeClass('active');
       // slidesData.eq(pointer).addClass('active');
        slidesData.fadeOut(2000);
        slidesData.eq(pointer).fadeIn(2000);
    }

    function next(){
        pointer++;
        if (pointer>=slidesData.length){
            pointer=0;

        }
        viewSlide();

    }


  setInterval(next,3000);







})

$(document).ready(function (){
    const slidesData=$('.slider-content-outer');
    let pointer=0;

    function viewContent(){
        //  slidesData.removeClass('active');
        // slidesData.eq(pointer).addClass('active');
        slidesData.fadeOut(2000);
        slidesData.eq(pointer).fadeIn(2000);
    }

    function next(){
        pointer++;
        if (pointer>=slidesData.length){
            pointer=0;

        }
        viewContent();

    }


    setInterval(next,3000);
})

window.addEventListener('scroll',()=>{
    if (window.pageYOffset>500){
        document.getElementById('nav-outer')
            .style.backgroundColor='#1a1a1a';
        document.getElementById('nav-outer')
            .style.zIndex=10;
    }else {
        document.getElementById('nav-outer')
            .style.backgroundColor='rgba(52,73,94,0.1)';
    }
});

$(document).ready(function (){
    $('.sub-btn').click(function (){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
        $(this).find('.colm').toggleClass('yellow');
        $(this).find('.colm').toggleClass('font-col');
    })


});


  var btnEl = document.getElementsByClassName('btn-con');
  var slideEl =document.getElementById('btn-action');

 btnEl[0].onclick=function (){
     slideEl.style.transform="translateX(0px)";
     for (let i = 0; i < 4; i++) {
         btnEl.classList.remove('active1');
     }
     this.classList.add('active1');
 }
btnEl[1].onclick=function (){
    slideEl.style.transform="translateX(-25vw)";
    for (let i = 0; i < 4; i++) {
        btnEl.classList.remove('active1');
    }
    this.classList.add('active1');
}
btnEl[2].onclick=function (){
    slideEl.style.transform="translateX(-1200px)";
    for (let i = 0; i < 4; i++) {
        btnEl.classList.remove('active1');
    }
    this.classList.add('active1');
}
btnEl[3].onclick=function (){
    slideEl.style.transform="translateX(-1800px)";
    for (let i = 0; i < 4; i++) {
        btnEl.classList.remove('active1');
    }
    this.classList.add('active1');
}
btnEl[4].onclick=function (){
    slideEl.style.transform="translateX(-2750px)";
    for (let i = 0; i < 4; i++) {
        btnEl.classList.remove('active1');
    }
    this.classList.add('active1');
}
let counter=0;

    window.addEventListener('scroll',()=>{

        if (window.pageYOffset>2000 && counter<1){
            console.log(window.pageYOffset)
            let valueDisplays = document.querySelectorAll(".num");
            let interval =5000;

            valueDisplays.forEach((valueDisplay) => {
                let starValue =0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval/endValue);
                let counter = setInterval(function() {
                    starValue += 1;
                    valueDisplay.textContent = starValue;
                    if (starValue == endValue) {
                        clearInterval(counter);
                    }
                },duration);

            });
            counter++;
            console.log(counter);

        }

        console.log(counter);

    });































