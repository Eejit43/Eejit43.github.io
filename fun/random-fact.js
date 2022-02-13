/* Add event listeners */
document.getElementById('get-fact').addEventListener('click', getFact);

function getFact() {
    document.getElementById('fact').innerHTML = 'Loading...';
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('fact').innerHTML = data.text.replace(/`/g, "'").trim();
        })
        .catch((err) => {});
}

getFact();
