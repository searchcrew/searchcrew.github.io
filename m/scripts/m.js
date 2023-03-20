function deviceCheck() {
    if(/Android|webOS|iPad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        void(0);
    }else{
        window.location.href = '/index.html';
}
}

function deviceCheckDesktop() {
    if(/Android|webOS|iPad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        window.location.href = '/m/index.html';
    }else{
        void(0);
}
}

function about() {

    if ( document.getElementById("mOverlay").style.display === 'none') {
        document.getElementById("mOverlay").style.display = 'block'
        document.getElementById("mOverlay").style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
        document.getElementById("menuSelector").style.backgroundImage = 'url("/m/images/menuSelectorHover.png")'
        document.getElementById("searchformwrapper").style.display = 'none'
        document.getElementById("desktoppromo").style.display = 'none'
    }else{
        document.getElementById("mOverlay").style.display = 'none'
        document.getElementById("mOverlay").style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
        document.getElementById("menuSelector").style.backgroundImage = 'url("/m/images/menuSelector.png")'
        document.getElementById("searchformwrapper").style.display = 'block'
        document.getElementById("desktoppromo").style.display = 'flex'
    }
}