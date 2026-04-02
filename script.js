let sites = []

fetch('sites.json')
    .then(response => response.json())
    .then((members) => {
            sites = members;
            redirect();
        });

function redirect() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const to = params.get('to')

    let currentIndex = sites.findIndex(
        url => url.name.toLowerCase() === (name || "").toLowerCase()
    );

    if (currentIndex === -1) {
        currentIndex = 0;
    }

    let newIndex = currentIndex;
    if (to == "next") {
        newIndex = (currentIndex + 1) % sites.length;
    } else if (to == "prev") {
        newIndex = (currentIndex - 1 + sites.length) % sites.length;
    }

window.location.href = sites[newIndex].url;