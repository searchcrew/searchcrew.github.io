function themeReApply() {
const theme = localStorage.getItem('theme');
const ssLogo = document.getElementById("ss-logo");
    if (theme === "aluminum") {
        localStorage.setItem('theme', 'aluminum');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/aluminum.png)";
        ssLogo.src = 'images/ss-logo/light.png';

    }
    if (theme === "strawberry") {
        localStorage.setItem('theme', 'strawberry');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/strawberry.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "tangerine") {
         localStorage.setItem('theme', 'tangerine');
         document.getElementById("headerbar").style.backgroundImage = "url(images/themes/mango.png)";
         ssLogo.src = 'images/ss-logo/dark.png';
    }
     if (theme === "dandelion") {
         localStorage.setItem('theme', 'dandelion');
         document.getElementById("headerbar").style.backgroundImage = "url(images/themes/dandelion.png)";
         ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "slime") {
        localStorage.setItem('theme', 'slime');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/slime.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "lagoon") {
        localStorage.setItem('theme', 'lagoon');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/lagoon.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "galaxy") {
        localStorage.setItem('theme', 'galaxy');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/galaxy.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "gingerbread") {
        localStorage.setItem('theme', 'gingerbread');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/gingerbread.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "nighttime") {
        localStorage.setItem('theme', 'nighttime');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/nighttime.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    //iPod Themes
    if (theme === "SilverApple") {
        localStorage.setItem('theme', 'SilverApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/silver.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "ProductRedApple") {
        localStorage.setItem('theme', 'ProductRedApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/productRed.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "PinkApple") {
        localStorage.setItem('theme', 'PinkApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/pink.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "OrangeApple") {
        localStorage.setItem('theme', 'OrangeApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/orange.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "YellowApple") {
        localStorage.setItem('theme', 'YellowApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/yellow.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "GreenApple") {
        localStorage.setItem('theme', 'GreenApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/green.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "BlueApple") {
        localStorage.setItem('theme', 'BlueApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/blue.png)";
        ssLogo.src = 'images/ss-logo/light.png';
        let selected = document.getElementById('themeselector');
        selected.value = 'BlueApple';
    }
    if (theme === "PurpleApple") {
        localStorage.setItem('theme', 'PurpleApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/purple.png)";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    if (theme === "SlateApple") {
        localStorage.setItem('theme', 'SlateApple');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/slate.png";
        ssLogo.src = 'images/ss-logo/dark.png';
    }
    //Cheesetopia
    if (theme === "BlueCheese") {
        localStorage.setItem('theme', 'BlueCheese');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/blue.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "Cheddar") {
        localStorage.setItem('theme', 'Cheddar');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/cheddar.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "ColbyJack") {
        localStorage.setItem('theme', 'ColbyJack');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/colbyJack.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "Gouda") {
        localStorage.setItem('theme', 'Gouda');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/gouda.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "Muenster") {
        localStorage.setItem('theme', 'Muenster');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/muenster.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "PepperJack") {
        localStorage.setItem('theme', 'PepperJack');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/pepperJack.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "Provolone") {
        localStorage.setItem('theme', 'Provolone');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/provolone.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "Swiss") {
        localStorage.setItem('theme', 'Swiss');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/swiss.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    if (theme === "WhiteAmerican") {
        localStorage.setItem('theme', 'WhiteAmerican');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/whiteAmerican.png)";
        ssLogo.src = 'images/ss-logo/light.png';
    }
    //Anniversary
    if (theme === "ann") {
        localStorage.setItem('theme', 'ann');
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/anniversary/indigo.png)";
        ssLogo.src = 'images/themes/anniversary/ss-logo-neue.png';
    }
}