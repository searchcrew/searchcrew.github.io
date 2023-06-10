function tabSet() {
    if (window.location.href.indexOf("#gsc.tab=") === 1) {
        sessionStorage.setItem('tab', 'images');
    } else {
        sessionStorage.setItem('tab', 'web');
    }
    setInterval(tabSet, 1000)
}

function tabRecall() {
    const tab = localStorage.getItem('tab');
    if ( tab === "web") {
        if ('URLSearchParams' in window) {
            const searchParams = new URLSearchParams(window.location.search)
            searchParams.set("foo", "bar");
            const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
            history.pushState(null, '', newRelativePathQuery);
        }
    } else {
        //redirect to search results page
    }
}