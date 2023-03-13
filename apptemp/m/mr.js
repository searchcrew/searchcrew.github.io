function validateForm() {
  var x = document.forms["searchform"]["q"].value;
  if (x == "" || x == null) {
    return false;
  }
}

function searchResultsLoad() {
  if (window.location.href.indexOf("&gsc.q=") < 1) {
      window.location.href = "/index.html";
  }
  const query = window.location.href.split('?')[1]
	const url = new URLSearchParams(query)
	const value = url.get('q').split('#')[0];
  sessionStorage.setItem("title", value + " - Search Crew");
  sessionStorage.setItem("sbvalue", value);

  if (sessionStorage.getItem("title")) {
    field.value = sessionStorage.getItem("sbvalue");
    document.title = sessionStorage.getItem("title");
  }

  function settitle() {
    document.title = sessionStorage.getItem("title");
    console.log(document.title);
  }
}

 let field = document.getElementById("searchbar");

if (sessionStorage.getItem("title")) {
    field.value = sessionStorage.getItem("sbvalue");
    document.title = sessionStorage.getItem("title");
}

field.addEventListener("change", () => {
    sessionStorage.setItem("title", field.value + " - Search Crew");
    sessionStorage.setItem("sbvalue", field.value);
});

function pref() {
    window.location.href="/pref.html"
}