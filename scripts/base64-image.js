window.onload = function () {
  document.getElementById('file-upload').addEventListener("change", fileUpload);
  document.getElementById('encode').addEventListener("click", encode);
  document.getElementById('decode').addEventListener("click", decode);
  document.getElementById('clear').addEventListener("click", clear1);
  document.getElementById('clear2').addEventListener("click", clear2);
  document.getElementById('b64-copy-result').addEventListener("click", function () {
    copyText('b64-result', 'b64-copy-result')
  });
  document.getElementById('b64-copy-with-prefix-result').addEventListener("click", function () {
    let button = 'b64-copy-with-prefix-result';
    navigator.clipboard.writeText(base64);
    document.getElementById(button).innerHTML = "Copied!";
    setTimeout(function () {
      document.getElementById(button).innerHTML = "Copy with prefix";
    }, 2000);
    showAlert('Copied!', '#009c3f')
  });
}

function showAlert(text, color) {
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

function clear1() {
  validFile = 1;
  document.getElementById("file-upload").value = "";
  document.getElementById("file-message").innerHTML = "";
  document.getElementById('b64-result').value = "";
  document.getElementById('b64-copy-result').disabled = true;
  document.getElementById('b64-copy-with-prefix-result').disabled = true;
  document.getElementById('b64-open-result').disabled = true;
  showAlert('Cleared!', '#009c3f')
  document.getElementById("clear").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clear").innerHTML = "Clear";
  }, 2000);
  document.getElementById("e-runSuccess").className = "";
  document.getElementById("e-runError").className = "";
}

function clear2() {
  document.getElementById('stringToDecode').value = "";
  document.getElementById('image-output').src = "";
  showAlert('Cleared!', '#009c3f')
  document.getElementById("clear2").innerHTML = "Cleared!";
  setTimeout(function () {
    document.getElementById("clear2").innerHTML = "Clear";
  }, 2000);
  document.getElementById("d-runSuccess").className = "";
  document.getElementById("d-runError").className = "";
}

function copyText(toCopy, button) {
  const element = document.getElementById(toCopy);
  navigator.clipboard.writeText(element.value);
  document.getElementById(button).innerHTML = "Copied!";
  setTimeout(function () {
    document.getElementById(button).innerHTML = "Copy";
  }, 2000);
  showAlert('Copied!', '#009c3f')
}

function fileUpload() {
  let file = document.getElementById("file-upload");
  let fileMsg = document.getElementById("file-message");
  let fileName = file.value.split("\\").pop()
  fileMsg.innerHTML = "Uploaded: " + fileName;
  let runError = document.getElementById("e-runError");
  let runSuccess = document.getElementById("e-runSuccess");
}

// https://newbedev.com/base64-image-open-in-new-tab-window-is-not-allowed-to-navigate-top-frame-navigations-to-data-urls
function openBase64InNewTab(data, mimeType) {
  var byteCharacters = atob(data);
  var byteNumbers = new Array(byteCharacters.length);
  for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  var file = new Blob([byteArray], {
    type: mimeType + ';base64'
  });
  var fileURL = URL.createObjectURL(file);
  window.open(fileURL);
}

function encode() {
  let old_element = document.getElementById("b64-open-result");
  let new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);

  let image = document.getElementById("file-upload");
  let output = document.getElementById("b64-result");
  let runError = document.getElementById("e-runError");
  let runSuccess = document.getElementById("e-runSuccess");
  if (image.value) {
    let reader = new FileReader();
    reader.onloadend = function () {
      let imageType = reader.result.replace(/^data:image\/(.*?);base64,.*$/g, '$1');

      if (imageType === 'png' || imageType === 'jpg' || imageType === 'jpeg' || imageType === 'webp' || imageType === 'bmp' || imageType === 'gif') {
        base64 = reader.result;
        output.value = reader.result.replace(/data:image\/.*?;base64,/g, '');
        document.getElementById('b64-open-result').addEventListener("click", function () {
          openBase64InNewTab(reader.result.replace(/data:image\/.*?;base64,/g, ''), 'image/' + imageType);
        });
        document.getElementById('b64-copy-result').disabled = false;
        document.getElementById('b64-copy-with-prefix-result').disabled = false;
        document.getElementById('b64-open-result').disabled = false;
        runError.className = "";
        runSuccess.className = "fas fa-check";
        setTimeout(function () {
          runSuccess.className = runSuccess.className.replace("fas fa-check", "");
        }, 2000);
      } else {
        showAlert('Invalid file type! (must be .png, .jpg, .jpeg, .webp, .bmp, or .gif)', '#FF5555')
        runSuccess.className = "";
        runError.className = "fas fa-times";
        setTimeout(function () {
          runError.className = runError.className.replace("fas fa-times", "");
        }, 2000);
      }
    }
    reader.readAsDataURL(image.files[0]);
  } else {
    showAlert('Empty input!', '#FF5555')
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  }
}

async function isBase64UrlImage(string) {
  let image = new Image()
  image.src = string
  return await (new Promise((resolve) => {
    image.onload = function () {
      if (image.height === 0 || image.width === 0) {
        resolve(false);
        return;
      }
      resolve(true)
    }
    image.onerror = () => {
      resolve(false)
    }
  }))
}

const valid = async(string) => {
  let image = document.getElementById("image-output");
  let runError = document.getElementById("d-runError");
  let runSuccess = document.getElementById("d-runSuccess");
  const valid = await isBase64UrlImage(string);
  if (valid === true) {
    image.src = string;
  } else if (valid === false) {
    document.getElementById('image-output').src = "";
    showAlert('Malformed input!', '#FF5555')
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  }
};

function decode() {
  let string = document.getElementById("stringToDecode").value;
  let image = document.getElementById("image-output");
  let runError = document.getElementById("d-runError");
  let runSuccess = document.getElementById("d-runSuccess");

  let testRegex = new RegExp('data:image\/.*?;base64,');
  let stringHasType = testRegex.test(string);
  if (stringHasType === false) {
    string = "data:image/png;base64," + string;
  }
  if (string.length === 0) {
    showAlert('Empty input!', '#FF5555')
    runSuccess.className = "";
    runError.className = "fas fa-times";
    setTimeout(function () {
      runError.className = runError.className.replace("fas fa-times", "");
    }, 2000);
  } else {
    valid(string)
  }
}