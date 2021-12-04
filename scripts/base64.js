function showAlert(id) {
  var element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

$("#clear").on("click", () => {
  $("#stringToModify").val("");
  $("#result").html("");
  $("#copy-result").prop("disabled", true);
  showAlert("clearmsg");
  document.getElementById("clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clear").innerHTML = "Clear";
  }, 2000);
  document.getElementById("e-runSuccess").className = "";
  document.getElementById("e-runError").className = "";
  document.getElementById("d-runSuccess").className = "";
  document.getElementById("d-runError").className = "";
});

function copyText(selector, button) {
  const el = $(selector);
  el.select();
  document.execCommand("copy");
  el.blur();
  document.getSelection().removeAllRanges();
  document.getElementById(button).innerHTML = "Copied!";
  setTimeout(function () {
    document.getElementById(button).innerHTML = "Copy";
  }, 2000);
  showAlert("copymsg");
}

function encode() {
  let stringToEncode = document.getElementById("stringToModify").value;
  let runError = document.getElementById("e-runError");
  let runSuccess = document.getElementById("e-runSuccess");
  if (stringToEncode.length === 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    try {
      let decodedString = btoa(stringToEncode);
      document.getElementById("result").innerHTML = decodedString;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      $("#copy-result").prop("disabled", false);
      $("#copy-result").on("click", () => {
        copyText("#result", "copy-result");
      });
    } catch (err) {
      showAlert("errormsg");
      runSuccess.className = "";
      runError.className = "fas fa-times";
      setTimeout(function () {
        runError.className = runError.className.replace("fas fa-times", "");
      }, 2000);
    }
  }
}

function decode() {
  let stringToDecode = document.getElementById("stringToModify").value;
  let runError = document.getElementById("d-runError");
  let runSuccess = document.getElementById("d-runSuccess");
  if (stringToDecode.length === 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    try {
      let encodedString = atob(stringToDecode);
      document.getElementById("result").innerHTML = encodedString;
      runError.className = "";
      runSuccess.className = "fas fa-check";
      setTimeout(function () {
        runSuccess.className = runSuccess.className.replace("fas fa-check", "");
      }, 2000);
      $("#copy-result").prop("disabled", false);
      $("#copy-result").on("click", () => {
        copyText("#result", "copy-result");
      });
    } catch (err) {
      showAlert("errormsg");
      runSuccess.className = "";
      runError.className = "fas fa-times";
      setTimeout(function () {
        runError.className = runError.className.replace("fas fa-times", "");
      }, 2000);
    }
  }
}