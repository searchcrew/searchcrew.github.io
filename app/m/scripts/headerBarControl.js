/* document.getElementById("bodyIframe").onchange = function() {
    let example = document.getElementById("bodyIframe").src;
    let ourSubstring = "/m/pages/results.html";

    if (example.includes(ourSubstring)) {
	    console.log("/m/ is in the string.");
    } else {
	    console.log("/m/e is not in the string.");
    }
};
*/


let bodyIframe = document.getElementById("bodyIframe").contentWindow.location.href;

 function headerBarControl() {

    setTimeout(controlFire, 1000);

    function controlFire() {
    console.log(bodyIframe);
    alert(bodyIframe);
    }

};