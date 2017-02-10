function multiply() {
  var w = document.getElementById('width').value;
  var h = document.getElementById('height').value;
  var result = Number(w) * Number(h);
  document.getElementById('result').innerText = result;
}