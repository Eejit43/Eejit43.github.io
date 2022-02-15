let currentTime = new Date();
let year = currentTime.getFullYear();
let month = currentTime.getMonth() + 1;
let date = currentTime.getDate();
if (month < 10) {
    month = '0' + month;
}
if (date < 10) {
    date = '0' + date;
}

fetch(`https://api.nasa.gov/planetary/apod?api_key=zKDatvp1WcJI6msXG39REUkcXmf84Kiax5lHqge6&date=${year}-${month}-${date}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let result = [];
        if (data.media_type === 'image') {
            result.push(
                `Astronomy Picture of the Day for ${new Date(`${year}-${month}-${date} 00:00:00`).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.<br />`, // prettier-ignore
                `<div style="text-align: center; font-size: 30px">${data.title}</div>`,
                `<img style="display: block; margin: 10px auto -25px; width: 900px; max-width: 90%" alt="${data.title}" src="${data.url}"><br />`,
                `<div style="text-align: center"><a href="${data.hdurl}" target="_blank">View high definition image</a></div><br />`,
                `${data.explanation.replace(/  /g, ' ')}`
            );
        } else if (data.media_type === 'video') {
            result.push(
                `Astronomy <strike>Picture</strike> Video of the Day for ${new Date(`${year}-${month}-${date} 00:00:00`).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.<br />`, // prettier-ignore
                `<div style="text-align: center; font-size: 30px">${data.title}</div>`,
                `<div style="position: relative; overflow: hidden; margin: 15px auto -15px; width: 900px; max-width: 90%; padding-top: 56.25%;">`,
                `<iframe style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height: 100%;" src="${data.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                `</div><br />`,
                `${data.explanation.replace(/  /g, ' ')}`
            );
        }
        document.getElementById('result').innerHTML = result.join('');
    })
    .catch((err) => {});
