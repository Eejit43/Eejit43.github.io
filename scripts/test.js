/* Portions modified from https://skyblock-wiki.github.io/tools/head-render/js/index.js, https://www.w3schools.com/howto/howto_js_snackbar.asp */

$("#clear").on("click", () => {
  $("#regexInput").val("");
  $("#result").val("");
  $("#copy-result").prop("disabled", true);
  showAlert("clearmsg");
});

function copyText(selector) {
  const el = $(selector);
  el.select();
  document.execCommand("copy");
  el.blur();
  document.getSelection().removeAllRanges();
  showAlert("copymsg");
}

function showAlert(id) {
  var element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function(){ element.className = element.className.replace("alert show", "alert"); }, 2000);
}

function runRegex() {
  if (document.getElementById("regexInput").value.length == 0) {
    alert("empty");
  } else {
    let testString = document.getElementById('regexInput').value;
    let output = testString.replace('test', 'test successful!');
    $("#result").val(output);
    $("#copy-result").prop("disabled", false);
    $("#copy-result").on("click", () => {
      copyText("#result");
    });
  }
}