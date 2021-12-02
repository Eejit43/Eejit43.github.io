function showAlert(id) {
  var element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

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
