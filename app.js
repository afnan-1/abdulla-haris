
var dev_path="file:///home/afnan/Desktop/abdullah%20haris";
var prod_path="https://abdullah-haris-films.s3.amazonaws.com";
// var folder = "img/galery/";
window.addEventListener('resize',resizing)


function resizing(){
    var nextcar = document.getElementById('nextcar');
    var prevcar = document.getElementById('prevcar');

    if(screen.width<658){ 
              
            nextcar.innerHTML=` <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>`
            prevcar.innerHTML=`<span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>`
        } 
    if(screen.width>658){
        prevcar.innerHTML=` <img src="img/left.svg" class="arrow" width="75" aria-hidden="true"><img class="left" src="img/arrow.png"
        width="100" alt=""></img>
      <span class="sr-only">Previous</span>`
        nextcar.innerHTML=`<img src="img/right.svg" class="arrow" width="75" aria-hidden="true"><img class="left" src="img/arrow.png"
        width="100" alt=""></img>
      <span class="sr-only">Next</span>`
    }
    if (screen.width<339){
        loadImages(1)
    }
    else if(screen.width<496){
        loadImages(2)
    }
    else if(screen.width<650){
        loadImages(3)
    }
    else if (screen.width<806){ 
    loadImages(4)
    }
    else if(screen.width<960){
        loadImages(5);
    }
    
    else if (screen.width < 1200) {
        loadImages(6)
    }
    else if (screen.width <= 1400) {
        loadImages(7)
    }
    else{
        loadImages(7)
    }
}
resizing();
function loadImages(length) {
    var i=1;
    let carosalinner = document.getElementsByClassName('carousel-inner')[0];
   carosalinner.innerHTML="";
    let firstSilder = true;
    for(let j=0;j<30/(length*2);j++){
        let slider = document.createElement('div');
        slider.setAttribute('class','carousel-item')
        if(firstSilder){
            slider.className='carousel-item active'
            firstSilder=false;
        }
        for(let k =0;k<(2*length);k++){
            let createImg = document.createElement('img')
            createImg.setAttribute('class','imgcarosal')
            createImg.id = `myImg${i}`;
            createImg.setAttribute('onclick','imgmodal(this)');
            createImg.src = `img/galery/${i}.jpg`;
            slider.appendChild(createImg);
            i++;
            if(i===33){
                break;
            }
                }
        carosalinner.appendChild(slider)
    }
}

   
