// console.log(screen.width);



var folder = "img/galery/";

// function loadimages(data) {
//     $(data).find("a").attr("href", function (i, val) { 
//         $(".carousel-item").append( "<img src='"+ folder + val +"'>" );
//     })
// }
// console.log(folder.length);
function loadImages() {
    let i = 1;
    let imgContainer = document.getElementById('imgcontainer')
    let containerName = document.getElementById('containername')
    let navbarContainer = document.getElementById('navbarcontainer')
    while (true) {


        let inner = document.getElementsByClassName('carousel-item')[0]
        let createImg = document.createElement('img')
        createImg.setAttribute('class', 'imgcarosal col-lg-3 col-md-4 col-sm-6 col-6')
        let checkimg = createImg.src = `${folder}${i}.jpg`
        inner.appendChild(createImg)
        // console.log(inner);
        console.log(checkimg);
        i++;
        // if(screen.width<=1100){
        //     // if(i===9){
        //     //     break;
        //     // }
        // }
        if (screen.width <= 1050) {
            createImg.setAttribute('class', 'ipadpro');
            imgContainer.className = 'container-lg my-4';
            containerName.className = 'container-lg container-md my-5';
            if (i === 26) {

                console.log(createImg);
                break;
            }
        }
        else if (screen.width <= 1400) {
            createImg.setAttribute('class', 'laptop');
            if (i === 15) {

                console.log(createImg);
                break;
            }
        }
        // else if (screen.width <= 1400) {
        //     createImg.setAttribute('class', 'laptop');
        //     if (i === 13) {

        //         console.log(createImg);
        //         break;
        //     }
        // }
        else if (screen.width <= 3000) {
            navbarContainer.className = 'container-fluid';
            createImg.setAttribute('class', 'computerultra');
            navbarContainer.style.fontSize='2em';
            imgContainer.className = 'container-fluid';
            containerName.style.fontSize="2em";
            if (i === 25) {
                break;
            }
        }
        else {
            if (i == 13) {
                break;
            }
        }



    }
}
loadImages()

// loadImages()