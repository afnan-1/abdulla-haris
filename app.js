// // console.log(screen.width);

// console.log(Math.ceil(2.2)); 

// var folder = "img/galery/";
window.addEventListener('resize',resizing)


function resizing(){
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
        // let lightGallery = document.createElement('div');
        // lightGallery.id="lightgallery";
        // slider.appendChild(lightGallery)
        if(firstSilder){
            slider.className='carousel-item active'
            firstSilder=false;
        }
        for(let k =0;k<2*length;k++){
            // let galeryDiv = document.createElement('div');
            // galeryDiv.setAttribute('data-src',`img/galery/${i}.jpg`)
            // galeryDiv.setAttribute('style','width:100px;');
            let createImg = document.createElement('img')
            createImg.setAttribute('class','imgcarosal')
            // createImg.setAttribute('style','width:100px;')
            createImg.src = `img/galery/${i}.jpg`;
            slider.appendChild(createImg);
            // lightGallery.appendChild(galeryDiv);
            i++;
            console.log(i);
            // createImg.setAtribute('class', 'imgcarosal col-lg-2 col-md-4 col-sm-6 col-6')
        }
        console.log(slider);
        carosalinner.appendChild(slider)
    }
}
var car_item = 0
// let nextBtn = document.getElementById('nextBtn');
// nextBtn.addEventListener('click',function(e){
//     let slider = document.getElementsByClassName('carousel-item active');
//     // console.log(silder[0]);
//     // console.log(slider[0]);
//     slider[car_item].className = "carousel-item";
//     // slider[car_item+1].className = "carousel-item active"
//     console.log(slider[0]);
//     console.log(slider[car_item+1]);
// })
   
