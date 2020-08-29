function resizing(){
    
    if(screen.width<578){
        loadImages(1)
    }
    else if(screen.width<=753){
        loadImages(2)
    }
    else if (screen.width<=805){ 
    loadImages(3)
    }
    else if(screen.width<=960){
        loadImages(4);
    }
    else if (screen.width <= 1400) {
        loadImages(6)
    }
    else{
        loadImages(5)
    }
}

function loadImages(length) {
    var i=1;
    let html = ` <li data-src="img/galery/${i}.jpg">
    <a href="">
      <img class="img-responsive" src="img/galery/${i}.jpg">
      <div class="demo-gallery-poster">
      </div>
    </a>
  </li>`
    let carosalinner = document.getElementsByClassName('carousel-inner')[0];
   carosalinner.innerHTML="";
    let firstSilder = true;
    for(let j=0;j<30/(length*2);j++){
        let slider = document.createElement('div');
        let demoGallery = document.createElement('div')
        demoGallery.className='demo-gallery'
        let lightGal = document.createElement('ul');
        lightGal.className = 'lightgallery';
        slider.setAttribute('class','carousel-item');
        slider.appendChild(demoGallery);
        demoGallery.appendChild(lightGal)
        // let lightGallery = document.createElement('div');
        // lightGallery.id="lightgallery";
        // slider.appendChild(lightGallery)
        if(firstSilder){
            slider.className='carousel-item active'
            firstSilder=false;
        }
        for(let k =0;k<2*length;k++){
         lightGal.innerHTML += html;
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
   
