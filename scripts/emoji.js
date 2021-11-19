window.onload = function() {
    twemoji.parse(document.body,
        {folder: 'svg', ext: '.svg'}
        );

    setTimeout(function(){
    twemoji.parse(document.body,
        {folder: 'svg', ext: '.svg'}
        );
}, 100);
}