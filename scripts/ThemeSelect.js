function themeApply() {
const theme = document.getElementById("themeselector").value;
const ssLogo = document.getElementById("ss-logo");
    if (theme === "aluminum") {
        localStorage.setItem('theme', 'aluminum');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/aluminum.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'aluminum';
    }
    if (theme === "strawberry") {
        localStorage.setItem('theme', 'strawberry');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/strawberry.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'strawberry';
    }
    if (theme === "tangerine") {
         localStorage.setItem('theme', 'tangerine');
         document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
         document.getElementById("headerbar").style.backgroundImage = "url(images/themes/mango.png)";
         let selected = document.getElementById('themeselector');
         selected.value = 'tangerine';
    }
     if (theme === "dandelion") {
         localStorage.setItem('theme', 'dandelion');
         document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
         document.getElementById("headerbar").style.backgroundImage = "url(images/themes/dandelion.png)";
         let selected = document.getElementById('themeselector');
         selected.value = 'dandelion';
    }
    if (theme === "slime") {
        localStorage.setItem('theme', 'slime');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/slime.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'slime';
    }
    if (theme === "lagoon") {
        localStorage.setItem('theme', 'lagoon');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/lagoon.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'lagoon';
    }
    if (theme === "galaxy") {
        localStorage.setItem('theme', 'galaxy');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/galaxy.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'galaxy';
    }
    if (theme === "gingerbread") {
        localStorage.setItem('theme', 'gingerbread');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/gingerbread.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'gingerbread';
    }
    if (theme === "nighttime") {
        localStorage.setItem('theme', 'nighttime');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/nighttime.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'nighttime';
    }
    //iPod Themes
    if (theme === "SilverApple") {
        localStorage.setItem('theme', 'SilverApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/silver.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'SilverApple';
    }
    if (theme === "ProductRedApple") {
        localStorage.setItem('theme', 'ProductRedApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/productRed.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'ProductRedApple';
    }
    if (theme === "PinkApple") {
        localStorage.setItem('theme', 'PinkApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/pink.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'PinkApple';
    }
    if (theme === "OrangeApple") {
        localStorage.setItem('theme', 'OrangeApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/orange.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'OrangeApple';
    }
    if (theme === "YellowApple") {
        localStorage.setItem('theme', 'YellowApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/yellow.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'YellowApple';
    }
    if (theme === "GreenApple") {
        localStorage.setItem('theme', 'GreenApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/green.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'GreenApple';
    }
    if (theme === "BlueApple") {
        localStorage.setItem('theme', 'BlueApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/blue.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'BlueApple';
    }
    if (theme === "PurpleApple") {
        localStorage.setItem('theme', 'PurpleApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/purple.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'PurpleApple';
    }
    if (theme === "SlateApple") {
        localStorage.setItem('theme', 'SlateApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/slate.png";
        let selected = document.getElementById('themeselector');
        selected.value = 'SlateApple';
    }
    //Cheesetopia
    if (theme === "BlueCheese") {
        localStorage.setItem('theme', 'BlueCheese');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/blue.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'BlueCheese';
    }
    if (theme === "Cheddar") {
        localStorage.setItem('theme', 'Cheddar');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/cheddar.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Cheddar';
    }
    if (theme === "ColbyJack") {
        localStorage.setItem('theme', 'ColbyJack');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/colbyJack.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'ColbyJack';
    }
    if (theme === "Gouda") {
        localStorage.setItem('theme', 'Gouda');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/gouda.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Gouda';
    }
    if (theme === "Muenster") {
        localStorage.setItem('theme', 'Muenster');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/muenster.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Muenster';
    }
    if (theme === "PepperJack") {
        localStorage.setItem('theme', 'PepperJack');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/pepperJack.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'PepperJack';
    }
    if (theme === "Provolone") {
        localStorage.setItem('theme', 'Provolone');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/provolone.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Provolone';
    }
    if (theme === "Swiss") {
        localStorage.setItem('theme', 'Swiss');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/swiss.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Swiss';
    }
    if (theme === "WhiteAmerican") {
        localStorage.setItem('theme', 'WhiteAmerican');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/whiteAmerican.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'WhiteAmerican';
    }
    //Anniversary
    if (theme === "ann") {
        localStorage.setItem('theme', 'ann');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/anniversary/indigo.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'ann';
    }
    //Advent & Christmas
    if (theme === "adv1") {
        localStorage.setItem('theme', 'adv1');
        document.getElementById("headerbar").style.backgroundPosition = "0px 0px";
        document.getElementById("headerbar").style.backgroundImage = "url(/images/themes/advent_christmas/adv1.fw.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'adv1';
    }
    if (theme === "adv2") {
        localStorage.setItem('theme', 'adv2');
        document.getElementById("headerbar").style.backgroundPosition = "0px 0px";
        document.getElementById("headerbar").style.backgroundImage = "url(/images/themes/advent_christmas/adv2.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'adv2';
    }
    if (theme === "adv3") {
        localStorage.setItem('theme', 'adv3');
        document.getElementById("headerbar").style.backgroundPosition = "0px 0px";
        document.getElementById("headerbar").style.backgroundImage = "url(/images/themes/advent_christmas/adv3.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'adv3';
    }
}

function themeReApply() {
const theme = localStorage.getItem('theme');
const ssLogo = document.getElementById("ss-logo");
    if (theme === "aluminum") {
        localStorage.setItem('theme', 'aluminum');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/aluminum.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'aluminum';
    }
    if (theme === "strawberry") {
        localStorage.setItem('theme', 'strawberry');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/strawberry.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'strawberry';
    }
    if (theme === "tangerine") {
         localStorage.setItem('theme', 'tangerine');
         document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
         document.getElementById("headerbar").style.backgroundImage = "url(images/themes/mango.png)";
         let selected = document.getElementById('themeselector');
         selected.value = 'tangerine';
    }
     if (theme === "dandelion") {
         localStorage.setItem('theme', 'dandelion');
         document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
         document.getElementById("headerbar").style.backgroundImage = "url(images/themes/dandelion.png)";
         let selected = document.getElementById('themeselector');
         selected.value = 'dandelion';
    }
    if (theme === "slime") {
        localStorage.setItem('theme', 'slime');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/slime.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'slime';
    }
    if (theme === "lagoon") {
        localStorage.setItem('theme', 'lagoon');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/lagoon.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'lagoon';
    }
    if (theme === "galaxy") {
        localStorage.setItem('theme', 'galaxy');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/galaxy.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'galaxy';
    }
    if (theme === "gingerbread") {
        localStorage.setItem('theme', 'gingerbread');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/gingerbread.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'gingerbread';
    }
    if (theme === "nighttime") {
        localStorage.setItem('theme', 'nighttime');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/nighttime.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'nighttime';
    }
    //iPod Themes
    if (theme === "SilverApple") {
        localStorage.setItem('theme', 'SilverApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/silver.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'SilverApple';
    }
    if (theme === "ProductRedApple") {
        localStorage.setItem('theme', 'ProductRedApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/productRed.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'ProductRedApple';
    }
    if (theme === "PinkApple") {
        localStorage.setItem('theme', 'PinkApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/pink.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'PinkApple';
    }
    if (theme === "OrangeApple") {
        localStorage.setItem('theme', 'OrangeApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/orange.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'OrangeApple';
    }
    if (theme === "YellowApple") {
        localStorage.setItem('theme', 'YellowApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/yellow.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'YellowApple';
    }
    if (theme === "GreenApple") {
        localStorage.setItem('theme', 'GreenApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/green.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'GreenApple';
    }
    if (theme === "BlueApple") {
        localStorage.setItem('theme', 'BlueApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/blue.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'BlueApple';
    }
    if (theme === "PurpleApple") {
        localStorage.setItem('theme', 'PurpleApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/purple.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'PurpleApple';
    }
    if (theme === "SlateApple") {
        localStorage.setItem('theme', 'SlateApple');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/appleiPod/slate.png";
        let selected = document.getElementById('themeselector');
        selected.value = 'SlateApple';
    }
    //Cheesetopia
    if (theme === "BlueCheese") {
        localStorage.setItem('theme', 'BlueCheese');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/blue.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'BlueCheese';
    }
    if (theme === "Cheddar") {
        localStorage.setItem('theme', 'Cheddar');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/cheddar.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Cheddar';
    }
    if (theme === "ColbyJack") {
        localStorage.setItem('theme', 'ColbyJack');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/colbyJack.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'ColbyJack';
    }
    if (theme === "Gouda") {
        localStorage.setItem('theme', 'Gouda');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/gouda.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Gouda';
    }
    if (theme === "Muenster") {
        localStorage.setItem('theme', 'Muenster');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/muenster.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Muenster';
    }
    if (theme === "PepperJack") {
        localStorage.setItem('theme', 'PepperJack');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/pepperJack.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'PepperJack';
    }
    if (theme === "Provolone") {
        localStorage.setItem('theme', 'Provolone');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/provolone.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Provolone';
    }
    if (theme === "Swiss") {
        localStorage.setItem('theme', 'Swiss');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/swiss.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'Swiss';
    }
    if (theme === "WhiteAmerican") {
        localStorage.setItem('theme', 'WhiteAmerican');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/cheesetopia/whiteAmerican.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'WhiteAmerican';
    }
    //Anniversary
    if (theme === "ann") {
        localStorage.setItem('theme', 'ann');
        document.getElementById("headerbar").style.backgroundPosition = "0px 55px";
        document.getElementById("headerbar").style.backgroundImage = "url(images/themes/anniversary/indigo.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'ann';
    }
    //Advent & Christmas
    if (theme === "adv1") {
        localStorage.setItem('theme', 'adv1');
        document.getElementById("headerbar").style.backgroundPosition = "0 0";
        document.getElementById("headerbar").style.backgroundImage = "url(/images/themes/advent_christmas/adv1.fw.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'adv1';
    }
    if (theme === "adv2") {
        localStorage.setItem('theme', 'adv2');
        document.getElementById("headerbar").style.backgroundPosition = "0 0";
        document.getElementById("headerbar").style.backgroundImage = "url(/images/themes/advent_christmas/adv2.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'adv2';
    }
    if (theme === "adv3") {
        localStorage.setItem('theme', 'adv3');
        document.getElementById("headerbar").style.backgroundPosition = "0px 0px";
        document.getElementById("headerbar").style.backgroundImage = "url(/images/themes/advent_christmas/adv3.png)";
        let selected = document.getElementById('themeselector');
        selected.value = 'adv3';
    }
}