// var prod_path="file:///home/afnan/Desktop/abdullah%20haris";
var prod_path="https://abdullah-haris-films.s3.amazonaws.com";
function changepagephotos(){
    // window.location.href = dev_path+"/index.html";
    window.location.href = prod_path+"/index.html";
    var photos = document.getElementById('photos')
    
}
// if(window.location.href===`${dev_path}/index.html`){
if(window.location.href===`${prod_path}/index.html`){
    photos.style.backgroundColor='#E50A70 ';
}

function changepagefilms(){
    // window.location.href = dev_path+"/films.html";
    window.location.href = prod_path+"/films.html";
    let films = document.getElementById('films')

}
// if(window.location.href===`${dev_path}/films.html`){
if(window.location.href===`${prod_path}/films.html`){
    films.style.backgroundColor='#E50A70 ';
}
function changepageabout(){
    // window.location.href = dev_path+"/about.html";
    window.location.href = prod_path+"/about.html";
    let about = document.getElementById('about')

}
// if(window.location.href===`${dev_path}/about.html`){
if(window.location.href===`${prod_path}/about.html`){
    about.style.backgroundColor='#E50A70 ';
}
function changepagecomercial(){
    // window.location.href = dev_path+"/comercial.html"
    window.location.href = prod_path+"/comercial.html"
    let comercial = document.getElementById('comercial')

}
// if(window.location.href===`${dev_path}/comercial.html`){
if(window.location.href===`${prod_path}/comercial.html`){
    comercial.style.backgroundColor='#E50A70 ';
}
function resizefilm(){
    var nextcar1 = document.getElementById('nextcar1');
    var prevcar1 = document.getElementById('prevcar1');

    if(screen.width<658){ 
              
            nextcar1.innerHTML=` <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>`
            prevcar1.innerHTML=`<span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>`
        } 
    if(screen.width>659){
        prevcar1.innerHTML=` <img src="img/left.svg" class="arrow" width="75" aria-hidden="true">
      <span class="sr-only">Previous</span>`
        nextcar1.innerHTML=`<img src="img/right.svg" class="arrow" width="75" aria-hidden="true">
      <span class="sr-only">Next</span>`
    }
}
if(window.location.href===`${prod_path}/films.html`){
    resizefilm();
}
function insta(){
    window.location.href = "https://instagram.com/abdullahharisfilms?igshid=lkiyel6zy829";
}