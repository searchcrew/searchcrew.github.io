function about() {
    parent.document.getElementById('bodyIframe').src = '../m/pages/info.html';
    parent.document.getElementById("about").style.backgroundImage = "url('../images/aboutHover.png')"
    parent.document.getElementById("about").style.marginLeft = "10px"
    parent.document.getElementById("about").style.marginRight = "10px"
    parent.document.getElementById("search").style.backgroundImage = "url('../images/search.png')"
    parent.document.getElementById("search").style.bottom = "12px"
    parent.document.getElementById("customize").style.backgroundImage = "url('../images/customize.png')"
    parent.document.getElementById("customize").style.marginLeft = "6px"
    parent.document.getElementById("customize").style.marginRight = "6px"
    parent.document.getElementById("exploreHeader").style.display = 'none'
    parent.document.getElementById("bodyIframe").style.height = 'calc(100vh - 90px)'
};

function home() {
    parent.document.getElementById('bodyIframe').src = '../m/pages/home.html';
    parent.document.getElementById("about").style.backgroundImage = "url('../images/about.png')"
    parent.document.getElementById("about").style.marginLeft = "6px"
    parent.document.getElementById("about").style.marginRight = "6px"
    parent.document.getElementById("search").style.backgroundImage = "url('../images/searchHover.png')"
    parent.document.getElementById("search").style.bottom = "10px"
    parent.document.getElementById("customize").style.backgroundImage = "url('../images/customize.png')"
    parent.document.getElementById("about").style.marginLeft = "6px"
    parent.document.getElementById("about").style.marginRight = "6px"
    parent.document.getElementById("exploreHeader").style.display = 'none'
    parent.document.getElementById("bodyIframe").style.height = 'calc(100vh - 90px)'
};

function customize() {
    parent.document.getElementById('bodyIframe').src = '../m/pages/pref.html';
    parent.document.getElementById("about").style.backgroundImage = "url('../images/about.png')"
    parent.document.getElementById("about").style.marginLeft = "6px"
    parent.document.getElementById("about").style.marginRight = "6px"
    parent.document.getElementById("search").style.backgroundImage = "url('../images/search.png')"
    parent.document.getElementById("search").style.bottom = "12px"
    parent.document.getElementById("customize").style.backgroundImage = "url('../images/customizeHover.png')"
    parent.document.getElementById("customize").style.marginLeft = "10px"
    parent.document.getElementById("customize").style.marginRight = "10px"
    parent.document.getElementById("exploreHeader").style.display = 'none'
    parent.document.getElementById("bodyIframe").style.height = 'calc(100vh - 90px)'
};