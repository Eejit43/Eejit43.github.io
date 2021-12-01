/* Portions modified from https://skyblock-wiki.github.io/tools/head-render/js/index.js, https://www.w3schools.com/howto/howto_js_snackbar.asp */

$("#clear").on("click", () => {
  $("#regexInput").val("");
  $("#result").val("");
  $("#copy-result").prop("disabled", true);
  showAlert("clearmsg");
  document.getElementById("clear").innerHTML = "Cleared!";
  setTimeout(function(){ document.getElementById("clear").innerHTML = "Clear"; }, 2000);
});

function copyText(selector, button) {
  const el = $(selector);
  const btn = $(button);
  el.select();
  document.execCommand("copy");
  el.blur();
  document.getSelection().removeAllRanges();
  document.getElementById(button).innerHTML = "Copied!";
  setTimeout(function(){ document.getElementById(button).innerHTML = "Copy"; }, 2000);
  showAlert("copymsg");
}

function showAlert(id) {
  var element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function(){ element.className = element.className.replace("alert show", "alert"); }, 2000);
}

function runRegex() {
  let input = document.getElementById("regexInput").value
  let runError = document.getElementById("runError");
  let runSuccess = document.getElementById("runSuccess");
  if (input.length == 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function(){ runError.className = runError.className.replace("fas fa-times", ""); }, 2000);
  } else {
    let output = input.replace(/    "|",?/gi, '');
    output = output.replace(/§/gi, '&');
    output = output.replace(/(&[ol].*?)(&[a-f1-9]|\n)/gis, '$1&r$2');
    output = output.replace(/\n&r/gi, '&r\n');
    output = output.replace(/&[a-f1-9]&([a-f1-9])/gi, '&$1');
    output = output.replace(/\\/gi, '"');
    output = output.replace(/\n &8\[/gi, '\n &8[');//em space
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function(){ runSuccess.className = runSuccess.className.replace("fas fa-check", ""); }, 2000);
    $("#result").val(output);
    $("#copy-result").prop("disabled", false);
    $("#copy-result").on("click", () => {
      copyText("#result", "copy-result");
    });
  }
}