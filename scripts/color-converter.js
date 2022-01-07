// Some formulas modified from https://css-tricks.com/converting-color-spaces-in-javascript/
window.onload = function () {
  document.getElementById('hexInput').addEventListener('input', hex);
  document.getElementById('hex-rgb-copy').addEventListener('click', function () {
    copyText('hex-rgb', 'hex-rgb-copy')
  });
  document.getElementById('hex-hsl-copy').addEventListener('click', function () {
    copyText('hex-hsl', 'hex-hsl-copy')
  });
  document.getElementById('rgbInput').addEventListener('input', rgb);
  document.getElementById('rgb-hex-copy').addEventListener('click', function () {
    copyText('rgb-hex', 'rgb-hex-copy')
  });
  document.getElementById('rgb-hsl-copy').addEventListener('click', function () {
    copyText('rgb-hsl', 'rgb-hsl-copy')
  });
  document.getElementById('hslInput').addEventListener('input', hsl);
  document.getElementById('hsl-hex-copy').addEventListener('click', function () {
    copyText('hsl-hex', 'hsl-hex-copy')
  });
  document.getElementById('hsl-rgb-copy').addEventListener('click', function () {
    copyText('hsl-rgb', 'hsl-rgb-copy')
  });
}

function hex() {
  let hex = document.getElementById('hexInput').value;
  if (hex.match(/^#([\da-f]{3}){1,2}$/i)) {
    hex = hex.substring(1);
    document.getElementById('hex-display').style.backgroundColor = '#' + hex;
    document.getElementById('hex-display').innerHTML = '';
    // To RBG
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length == 3) {
      r = '0x' + hex[0] + hex[0];
      g = '0x' + hex[1] + hex[1];
      b = '0x' + hex[2] + hex[2];
    } else if (hex.length == 6) {
      r = '0x' + hex[0] + hex[1];
      g = '0x' + hex[2] + hex[3];
      b = '0x' + hex[4] + hex[5];
    }
    document.getElementById('hex-rgb').value = 'rgb(' + +r + ',' + +g + ',' + +b + ')';

    document.getElementById('hex-rgb-copy').disabled = false;
    // To HSL
    r = 0
    g = 0
    b = 0;
    if (hex.length == 3) {
      r = '0x' + hex[0] + hex[0];
      g = '0x' + hex[1] + hex[1];
      b = '0x' + hex[2] + hex[2];
    } else if (hex.length == 6) {
      r = '0x' + hex[0] + hex[1];
      g = '0x' + hex[2] + hex[3];
      b = '0x' + hex[4] + hex[5];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
      h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    document.getElementById('hex-hsl').value = 'hsl(' + h + ',' + s + '%,' + l + '%)';

    document.getElementById('hex-hsl-copy').disabled = false;
  } else if (hex.match(/^([\da-f]{3}){1,2}$/i)) {
    document.getElementById('hex-display').style.backgroundColor = '#' + hex;
    document.getElementById('hex-display').innerHTML = '';
    // To RBG
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length == 3) {
      r = '0x' + hex[0] + hex[0];
      g = '0x' + hex[1] + hex[1];
      b = '0x' + hex[2] + hex[2];
    } else if (hex.length == 6) {
      r = '0x' + hex[0] + hex[1];
      g = '0x' + hex[2] + hex[3];
      b = '0x' + hex[4] + hex[5];
    }
    document.getElementById('hex-rgb').value = 'rgb(' + +r + ',' + +g + ',' + +b + ')';

    document.getElementById('hex-rgb-copy').disabled = false;
    // To HSL
    r = 0
    g = 0
    b = 0;
    if (hex.length == 3) {
      r = '0x' + hex[0] + hex[0];
      g = '0x' + hex[1] + hex[1];
      b = '0x' + hex[2] + hex[2];
    } else if (hex.length == 6) {
      r = '0x' + hex[0] + hex[1];
      g = '0x' + hex[2] + hex[3];
      b = '0x' + hex[4] + hex[5];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
      h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    document.getElementById('hex-hsl').value = 'hsl(' + h + ',' + s + '%,' + l + '%)';

    document.getElementById('hex-hsl-copy').disabled = false;
  } else {
    document.getElementById('hex-display').innerHTML = hex === '' ? '' : '<i class="fas fa-times" style="color:#bf4042;padding-bottom:5px;vertical-align:middle;display:inline-flex;padding-bottom:20px;font-size:25px;"></i>';
    document.getElementById('hex-display').style.backgroundColor = '';
    document.getElementById('hex-rgb').value = '';
    document.getElementById('hex-rgb-copy').disabled = true;
    document.getElementById('hex-hsl').value = '';
    document.getElementById('hex-hsl-copy').disabled = true;
  }
}

function rgb() {
  let rgb = document.getElementById('rgbInput').value;
  if (rgb.match(/^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i)) {
    document.getElementById('rgb-display').style.backgroundColor = rgb;
    document.getElementById('rgb-display').innerHTML = '';
    // To Hex
    let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    rgb = rgb.substr(4).split(')')[0].split(sep);

    let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length == 1)
      r = '0' + r;
    if (g.length == 1)
      g = '0' + g;
    if (b.length == 1)
      b = '0' + b;

    document.getElementById('rgb-hex').value = '#' + r + g + b;

    document.getElementById('rgb-hex-copy').disabled = false;
    // To HSL
    rgb = document.getElementById('rgbInput').value;
    sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    rgb = rgb.substr(4).split(')')[0].split(sep);

    for (let R in rgb) {
      let r = rgb[R];
      if (r.indexOf('%') > -1)
        rgb[R] = Math.round(r.substr(0, r.length - 1) / 100 * 255);
    }

    // Make r, g, and b fractions of 1
    r = rgb[0] / 255;
    g = rgb[1] / 255;
    b = rgb[2] / 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
      h += 360;
    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    document.getElementById('rgb-hsl').value = 'hsl(' + h + ',' + s + '%,' + l + '%)';

    document.getElementById('rgb-hsl-copy').disabled = false;
  } else {
    document.getElementById('rgb-display').innerHTML = rgb === '' ? '' : '<i class="fas fa-times" style="color:#bf4042;padding-bottom:5px;vertical-align:middle;display:inline-flex;padding-bottom:20px;font-size:25px;"></i>';
    document.getElementById('rgb-display').style.backgroundColor = '';
    document.getElementById('rgb-hex').value = '';
    document.getElementById('rgb-hex-copy').disabled = true;
    document.getElementById('rgb-hsl').value = '';
    document.getElementById('rgb-hsl-copy').disabled = true;
  }
}

function hsl() {
  let hsl = document.getElementById('hslInput').value;
  if (hsl.match(/^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i)) {
    document.getElementById('hsl-display').style.backgroundColor = hsl;
    document.getElementById('hsl-display').innerHTML = '';
    // To Hex
    let sep = hsl.indexOf(',') > -1 ? ',' : ' ';
    hsl = hsl.substr(4).split(')')[0].split(sep);

    let h = hsl[0],
      s = hsl[1].substr(0, hsl[1].length - 1) / 100,
      l = hsl[2].substr(0, hsl[2].length - 1) / 100;

    // Strip label and convert to degrees (if necessary)
    if (h.indexOf('deg') > -1)
      h = h.substr(0, h.length - 3);
    else if (h.indexOf('rad') > -1)
      h = Math.round(h.substr(0, h.length - 3) * (180 / Math.PI));
    else if (h.indexOf('turn') > -1)
      h = Math.round(h.substr(0, h.length - 4) * 360);
    if (h >= 360)
      h %= 360;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length == 1)
      r = '0' + r;
    if (g.length == 1)
      g = '0' + g;
    if (b.length == 1)
      b = '0' + b;

    document.getElementById('hsl-hex').value = '#' + r + g + b;

    document.getElementById('hsl-hex-copy').disabled = false;
    // To RGB
    hsl = document.getElementById('hslInput').value;
    sep = hsl.indexOf(',') > -1 ? ',' : ' ';
    hsl = hsl.substr(4).split(')')[0].split(sep);

    h = hsl[0];
    s = hsl[1].substr(0, hsl[1].length - 1) / 100;
    l = hsl[2].substr(0, hsl[2].length - 1) / 100;

    c = (1 - Math.abs(2 * l - 1)) * s;
    x = c * (1 - Math.abs((h / 60) % 2 - 1));
    m = l - c / 2;
    r = 0;
    g = 0;
    b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    document.getElementById('hsl-rgb').value = 'rgb(' + r + ',' + g + ',' + b + ')';

    document.getElementById('hsl-rgb-copy').disabled = false;
  } else {
    document.getElementById('hsl-display').innerHTML = hsl === '' ? '' : '<i class="fas fa-times" style="color:#bf4042;padding-bottom:5px;vertical-align:middle;display:inline-flex;padding-bottom:20px;font-size:25px;"></i>';
    document.getElementById('hsl-display').style.backgroundColor = '';
    document.getElementById('hsl-hex').value = '';
    document.getElementById('hsl-hex-copy').disabled = true;
    document.getElementById('hsl-rgb').value = '';
    document.getElementById('hsl-rgb-copy').disabled = true;
  }
}