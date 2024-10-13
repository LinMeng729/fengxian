function processFormData() {
    // var lel = document.getElementById('lel');
    // var tex = document.getElementById('tex');
    // var fast = document.getElementById('fast');
    // var energy = document.getElementById('energy');
    var lel = parseInt(document.getElementById('lel').value)
    var tex = parseInt(document.getElementById('tex').value)
    var fast = parseInt(document.getElementById('fast').value)
    var energy = parseInt(document.getElementById('energy').value)
    var n =(lel-energy-tex)/fast/60;
    alert('滿經驗需要 ' + n + ' 分鐘' );
}