/* Portions modified from https://skyblock-wiki.github.io/tools/head-render/js/index.js, https://www.w3schools.com/howto/howto_js_snackbar.asp */

function copyText(selector, button) {
  const el = $(selector);
  const btn = $(button);
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

function showAlert(id) {
  var element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

// Duplicate Line Remover
$("#drl-clear").on("click", () => {
  $("#drl-regexInput").val("");
  $("#drl-result").val("");
  $("#drl-copy-result").prop("disabled", true);
  $("#drl-result-2").val("");
  $("#drl-copy-result-2").prop("disabled", true);
  showAlert("clearmsg");
  document.getElementById("drl-runSuccess").className = "";
  document.getElementById("drl-runError").className = "";
  document.getElementById("drl-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("drl-clear").innerHTML = "Clear";
  }, 2000);
});

function runDlrRegex() {
  let input = document.getElementById("drl-regexInput").value;
  let runError = document.getElementById("drl-runError");
  let runSuccess = document.getElementById("drl-runSuccess");
  if (input.length == 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let output = input.replace(/^(.*?)$\s+?^(?=.*^\1$)/gms, '');
    let output2 = input.replace(/^(?!\n)(.*?)$\s+?^(?=.*^\1$)/gms, '');
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    $("#drl-result").val(output);
    $("#drl-copy-result").prop("disabled", false);
    $("#drl-copy-result").on("click", () => {
      copyText("#drl-result", "drl-copy-result");
    });
    $("#drl-result-2").val(output2);
    $("#drl-copy-result-2").prop("disabled", false);
    $("#drl-copy-result-2").on("click", () => {
      copyText("#drl-result-2", "drl-copy-result-2");
    });
  }
}

// Whitespace Remover
$("#wr-clear").on("click", () => {
  $("#wr-regexInput").val("");
  $("#wr-result").val("");
  $("#wr-copy-result").prop("disabled", true);
  $("#wr-result-2").val("");
  $("#wr-copy-result-2").prop("disabled", true);
  $("#wr-result-3").val("");
  $("#wr-copy-result-3").prop("disabled", true);
  showAlert("clearmsg");
  document.getElementById("wr-runSuccess").className = "";
  document.getElementById("wr-runError").className = "";
  document.getElementById("wr-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("wr-clear").innerHTML = "Clear";
  }, 2000);
});

function runWrRegex() {
  let input = document.getElementById("wr-regexInput").value;
  let runError = document.getElementById("wr-runError");
  let runSuccess = document.getElementById("wr-runSuccess");
  if (input.length == 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let output = input.replace(/^[ \t]+|[ \t]+$/gms, '');
    let output2 = input.replace(/^[ \t\r\n]+|[ \t]+$/gms, '');
    let output3 = input.replace(/^[ \t\r\n]+|[ \t\r\n]+$/gms, '');
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    $("#wr-result").val(output);
    $("#wr-copy-result").prop("disabled", false);
    $("#wr-copy-result").on("click", () => {
      copyText("#wr-result", "wr-copy-result");
    });
    $("#wr-result-2").val(output2);
    $("#wr-copy-result-2").prop("disabled", false);
    $("#wr-copy-result-2").on("click", () => {
      copyText("#wr-result-2", "wr-copy-result-2");
    });
    $("#wr-result-3").val(output3);
    $("#wr-copy-result-3").prop("disabled", false);
    $("#wr-copy-result-3").on("click", () => {
      copyText("#wr-result-3", "wr-copy-result-3");
    });
  }
}

// NEU Format Changer
$("#neu-clear").on("click", () => {
  $("#neu-regexInput").val("");
  $("#neu-result").val("");
  $("#neu-copy-result").prop("disabled", true);
  $("#neu-result-2").val("");
  $("#neu-copy-result-2").prop("disabled", true);
  showAlert("clearmsg");
  document.getElementById("neu-runSuccess").className = "";
  document.getElementById("neu-runError").className = "";
  document.getElementById("neu-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("neu-clear").innerHTML = "Clear";
  }, 2000);
});

function runNeuRegex() {
  let input = document.getElementById("neu-regexInput").value;
  let runError = document.getElementById("neu-runError");
  let runSuccess = document.getElementById("neu-runSuccess");
  if (input.length == 0) {
    showAlert("emptymsg");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    let output = input.replace(/\\"/gmi, 'Ɣ'); //filler character
    output = output.replace(/    "|",?/gmi, '');
    output = output.replace(/Ɣ/gmi, '"');
    output = output.replace(/§/gmi, '&');
    output = output.replace(/(&[ol].*?)(&[a-f1-9]|\n)/gmis, '$1&r$2');
    output = output.replace(/\n&r/gmi, '&r\n');
    output = output.replace(/&[a-f1-9]&([a-f1-9])/gmi, '&$1');
    output = output.replace(/\n &8\[/gmi, '\n &8['); //em space
    let output2 = output.replace(/\//gmi, '\\\\/');
    output2 = output2.replace(/\\(?!\/|\\\/)/gmi, '\\\\\\\\');
    output2 = output2.replace(/\n/gmi, '/');
    output2 = output2.replace(/"/gmi, '\\"');
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    $("#neu-result").val(output);
    $("#neu-copy-result").prop("disabled", false);
    $("#neu-copy-result").on("click", () => {
      copyText("#neu-result", "neu-copy-result");
    });
    $("#neu-result-2").val(output2);
    $("#neu-copy-result-2").prop("disabled", false);
    $("#neu-copy-result-2").on("click", () => {
      copyText("#neu-result-2", "neu-copy-result-2");
    });
  }
}

// Regex Maker
$("#rm-clear").on("click", () => {
  $("#rm-regexInput").val("");
  $("#rm-result").val("");
  $("#rm-copy-result").prop("disabled", true);
  showAlert("clearmsg");
  document.getElementById("rm-runSuccess").className = "";
  document.getElementById("rm-runError").className = "";
  document.getElementById("rm-clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("rm-clear").innerHTML = "Clear Input";
  }, 2000);
});

$("#rm-clear-2").on("click", () => {
  $("#rm-regexInput").val("");
  $("#rm-result").val("");
  $("#rm-copy-result").prop("disabled", true);
  $("#rm-regex").val("");
  $("#rm-flags").val("g");
  $("#rm-replace").val("");
  showAlert("clearmsg");
  document.getElementById("rm-runSuccess").className = "";
  document.getElementById("rm-runError").className = "";
  document.getElementById("rm-clear-2").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("rm-clear-2").innerHTML = "Clear All";
  }, 2000);
});

function runRmRegex() {
  let input = document.getElementById("rm-regexInput").value;
  let runError = document.getElementById("rm-runError");
  let runSuccess = document.getElementById("rm-runSuccess");
  let regex = document.getElementById("rm-regex").value;
  let flags = document.getElementById("rm-flags").value;
  let isValid = true;
  try {
    new RegExp(regex, flags);
  } catch (e) {
    isValid = false;
  }
  if (input.length == 0 || regex.length == 0) {
    showAlert("emptymsg-2");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else if (isValid) {
    let finalregex = new RegExp(regex, flags);
    let replace = document.getElementById("rm-replace").value;
    let output = input.replace(finalregex, replace);
    runError.className = "";
    runSuccess.className = "fas fa-check";
    setTimeout(function () {
      runSuccess.className = runSuccess.className.replace("fas fa-check", "");
    }, 2000);
    $("#rm-result").val(output);
    $("#rm-copy-result").prop("disabled", false);
    $("#rm-copy-result").on("click", () => {
      copyText("#rm-result", "rm-copy-result");
    });
  } else if (isValid === false) {
    showAlert("notvalidregex");
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  }
}