window.onload = function () {
  document.getElementById('clearclipboard').addEventListener("click", clearClipboard);
  document.getElementById('copy-zws').addEventListener("click", function () {
    copyText('copy-zws', '​')
  });
  document.getElementById('copy-nbsp').addEventListener("click", function () {
    copyText('copy-nbsp', ' ')
  });
  document.getElementById('copy-ems').addEventListener("click", function () {
    copyText('copy-ems', ' ')
  });
  document.getElementById('copy-ens').addEventListener("click", function () {
    copyText('copy-ens', ' ')
  });
  document.getElementById('copy-ts').addEventListener("click", function () {
    copyText('copy-ts', ' ')
  });
  document.getElementById('selectclipboard').addEventListener("click", function () {
    document.getElementById('copiedtext').select()
  });
}

function showAlert(text, color) {
  if (color === 'success') {
    color = '#009c3f'
  } else if (color === 'error') {
    color = '#FF5555'
  }
  Toastify({
    text: text,
    duration: 2000,
    position: "center",
    style: {
      background: "#333",
      boxShadow: "none",
      minWidth: "150px",
      textAlign: "center",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "bold",
      fontSize: "17px",
      color: color,
      padding: "16px 30px",
    },
  }).showToast();
}

function copyText(button, text) {
  let oldElement = document.getElementById(button);
  let newElement = oldElement.cloneNode(true);
  oldElement.parentNode.replaceChild(newElement, oldElement);
  navigator.clipboard.writeText(text);
  newElement.innerHTML = "Copied!";
  setTimeout(function () {
    newElement.innerHTML = "Copy";
  }, 2000);
  showAlert('Copied!', 'success');

  newElement.addEventListener("click", function () {
    copyText(button, text)
  });
}

let clipboardTimeout;

function clearClipboard() {
  clearTimeout(clipboardTimeout);
  document.getElementById("clearclipboard").innerHTML = "Cleared!";
  clipboardTimeout = setTimeout(function () {
    document.getElementById("clearclipboard").innerHTML = "Clear Clipboard";
  }, 2000);
  navigator.clipboard.writeText("");
  showAlert('Cleared!', 'success')
}

navigator.permissions.query({
  name: "clipboard-read"
}).then((result) => {
  if (result.state == "granted" || result.state == "prompt") {
    clipboardDisplay();
  } else {
    document.getElementById("clipboardwarning").innerHTML = "<i class='fas fa-exclamation-triangle'></i> Permission to read clipboard denied!<br>";
  }
})

async function clipboardDisplay() {
  navigator.clipboard.readText()
    .then(text => {
      if (text.length === 0) {
        document.getElementById('copiedtext').value = "";
        document.getElementById('selectclipboard').disabled = true;
        document.getElementById("clipboardwarning").innerHTML = "<span style='color:#009c3f;'><i class='far fa-clipboard'></i> Your clipboard is empty!<br></span>";
        getImg()
      } else {
        document.getElementById('copiedtext').value = text;
        document.getElementById("clipboardwarning").innerHTML = "";
        document.getElementById('selectclipboard').disabled = false;
      }
    })
    .catch(err => {
      if (err.toString().match(/focused/g)) {
        document.getElementById("clipboardwarning").innerHTML = "<i class='fas fa-exclamation-triangle'></i> Tab not focused, unable to read clipboard!<br>";
      } else if (err.toString().match(/denied/g)) {
        document.getElementById("clipboardwarning").innerHTML = "<i class='fas fa-exclamation-triangle'></i> Permission to read clipboard denied!<br>";
      } else {
        document.getElementById("clipboardwarning").innerHTML = "<i class='fas fa-exclamation-triangle'></i> Unable to read clipboard!<br>";
      }
    })
  setTimeout(clipboardDisplay, 1000);
}


function getImg() {
  try {
    navigator.permissions.query({
      name: "clipboard-read"
    }).then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.read().then((data) => {
          for (let i = 0; i < data.length; i++) {
            data[i].getType("image/png").then((blob) => {
              let url = URL.createObjectURL(blob);
              document.getElementById("clipboardwarning").innerHTML = `<span style='color:#1c62d4;'><i class='far fa-clipboard'></i> Clipboard has image! (<a href='${url}' target="_blank">view</a>)<br></span>`;
            });
          }
        });
      }
    });
  } catch (err) {

  }
}