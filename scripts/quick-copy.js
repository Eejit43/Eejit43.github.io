function showAlert(id) {
  var element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

function copyText(button, text) {
  document.getElementById(button).innerHTML = "Copied!";
  setTimeout(function () {
    document.getElementById(button).innerHTML = "Copy";
  }, 2000);
  navigator.clipboard.writeText(text);
  showAlert("copymsg");
}

$("#clearclipboard").on("click", () => {
  document.getElementById("clearclipboard").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clearclipboard").innerHTML = "Clear Clipboard";
  }, 2000);
  navigator.clipboard.writeText("");
  showAlert("clearmsg");
});

$("#copy-zws").on("click", () => {
  copyText("copy-zws", "​");
});
$("#copy-nbsp").on("click", () => {
  copyText("copy-nbsp", " ");
});
$("#copy-ems").on("click", () => {
  copyText("copy-ems", " ");
});
$("#copy-ens").on("click", () => {
  copyText("copy-ens", " ");
});
$("#copy-ts").on("click", () => {
  copyText("copy-ts", " ");
});
$("#copy-hs").on("click", () => {
  copyText("copy-hs", " ");
});

clipboardDisplay();

async function clipboardDisplay() {
  navigator.clipboard.readText()
    .then(text => {
      if (text.length === 0) {
        $("#copiedtext").val("");
        $("#selectclipboard").prop("disabled", true);
        document.getElementById("clipboardwarning").innerHTML = "<span style='color:#009c3f;'><i class='far fa-clipboard'></i> Your clipboard is empty!<br></span>";
      } else {
        $("#copiedtext").val(text);
        document.getElementById("clipboardwarning").innerHTML = "";
        let btn = $("#selectclipboard");
        btn.prop("disabled", false);
        btn.on("click", () => {
          $("#copiedtext").select();
        });
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