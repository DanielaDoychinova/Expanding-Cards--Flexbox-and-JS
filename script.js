

function noBackground() {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "rgb(238, 238, 238)";
}


function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw auto';
    document.body.style.backgroundBlendMode = 'overlay';
    
}

