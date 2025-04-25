const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
        if(e.target.id == 'red'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id == 'white'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id;
        } else if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id;
        } else {
            body.style.backgroundColor = 'purple'
        }
    });
    button.addEventListener('click', function(e) {
        if(e.target.id == 'white'|| e.target.id == 'yellow' ) {
            body.style.color = '#000'
        } else (
            body.style.color = '#fff'
        );
    });
});








// buttons.forEach(function(button){
//     button.addEventListener('click', function(e) {
//         if(e.target.id == 'red'){
//             body.style.backgroundColor = e.target.id;
//         }else {
//             body.style.color = 'orange'
//         };
//         if(e.target.id == 'white'){
//             body.style.backgroundColor = e.target.id;
//         } 
//         if(e.target.id == 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id == 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         } 
//         if(e.target.id == 'purple'){
//             body.style.backgroundColor = e.target.id;
//         };
//     });