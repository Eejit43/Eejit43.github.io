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

function showAlert(id) {
  let element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

function copyText(button, text) {
  navigator.clipboard.writeText(text);
  document.getElementById(button).innerHTML = "Copied!";
  setTimeout(function () {
    document.getElementById(button).innerHTML = "Copy";
  }, 2000);
  showAlert("copymsg");
}

function clearClipboard() {
  document.getElementById("clearclipboard").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clearclipboard").innerHTML = "Clear Clipboard";
  }, 2000);
  navigator.clipboard.writeText("");
  showAlert("clearmsg");
}

clipboardDisplay();

async function clipboardDisplay() {
  navigator.clipboard.readText()
    .then(text => {
      if (text.length === 0) {
        document.getElementById('copiedtext').value = "";
        document.getElementById('selectclipboard').disabled = true;
        document.getElementById("clipboardwarning").innerHTML = "<span style='color:#009c3f;'><i class='far fa-clipboard'></i> Your clipboard is empty!<br></span>";
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