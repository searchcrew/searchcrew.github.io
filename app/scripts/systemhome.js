function validateForm() {
  var x = document.forms["searchform"]["q"].value;
  if (x == "" || x == null) {
    return false;
  }
}
let field = document.getElementById("searchbar");

if (sessionStorage.getItem("title")) {
    document.title = sessionStorage.getItem("title")
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