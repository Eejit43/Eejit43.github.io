window.onload = function () {
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg'
    });

    setTimeout(function () {
        twemoji.parse(document.body, {
            folder: 'svg',
            ext: '.svg'
        });
    }, 200);

    setTimeout(function () {
        twemoji.parse(document.body, {
            folder: 'svg',
            ext: '.svg'
        });
    }, 1000);
}