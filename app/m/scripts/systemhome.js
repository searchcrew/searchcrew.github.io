function validateForm() {
  var x = document.forms["searchform"]["q"].value;
  if (x == "" || x == null) {
    return false;
  }
}
const field = document.getElementById("searchbar");

if (sessionStorage.getItem("title")) {
    document.title = "Search Crew"
}

field.addEventListener("change", () => {
    sessionStorage.setItem("title", field.value + " - Search Crew");
    sessionStorage.setItem("sbvalue", field.value);
});

function clearss() {
	sessionStorage.clear();
	document.title = "Search Crew";
}

function pref() {
    window.location.href="/pref.html"
}

const specialIframe = document.getElementById("specialIframe");
const learnmore = specialIframe.contentWindow.document.getElementById("learnmore");

learnmore.onclick = function() {
    parent.document.getElementById("exploreHeader").style.display = 'block'
    parent.document.getElementById("bodyIframe").style.height = 'calc(100vh - 171px)'
}