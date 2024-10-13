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
function processFormData2() {
    var power = parseInt(document.getElementById('power').value)
    var x =power*1.05/0.95;
    var y =power*0.95/1.05;
    alert('可以打到 ' + x + '/n戰力滿'+ y + ' 可打');
}
function processFormData3() {
    var roomnum = parseInt(document.getElementById('roomnum').value)
    for(var i=1;i<=5;i++){
    if(roomnum%2!=0){
        roomnum=(roomnum+1)/2;
    }
    roomnum=roomnum/2;
    i++;
    }
    alert('共有 ' + roomnum + ' 間靈泉房' );
}