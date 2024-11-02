
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
    n=Math.round( n ) ;
    alert('滿經驗需要 ' + n + ' 分鐘' );
}
function processFormData2() {
    var power = parseInt(document.getElementById('power').value)
    var x =power*1.05/0.95;
    x=Math.round( x ) ;
    var y =power*0.95/1.05;
    y=Math.round( y ) ;
    alert('可打到 ' + x + '\n戰力滿'+ y + ' 可打我');
}
function processFormData3() {
    var roomnum = parseInt(document.getElementById('roomnum').value)
    x=[];
    for(var i=1;i<=5;i++){
    if(roomnum%2!=0){
        roomnum=(roomnum+1)/2;
        x.push(i);
    }
    else{
        roomnum=roomnum/2;
    }
    }
    // alert('共有 ' + roomnum + ' 間靈泉房' );
    alert('共有 ' + roomnum + ' 間靈泉房\n第 '+x+' 輪有機會輪空' );
}
function processFormData4() {
    // var lel = document.getElementById('lel');
    // var tex = document.getElementById('tex');
    var lel2 = parseInt(document.getElementById('lel2').value)
    var tex2 = parseInt(document.getElementById('tex2').value)
    tex2=tex2-lel2;
    if(lel2==24150){    //3後
        let arr4=[0,25000,26000,44625];
        for(var i=0;i<=3;i++){
            var tex3=tex2-arr4[i];
            if(tex3<0,i=1){
                alert('打過秘境後在 4前 期');
                break;
            }
            else if(tex3<0,i=2){
                alert('打過秘境後在 4中 期' );
                break;
            }
            else if(tex3<0,i=3){
                alert('打過秘境後在 4後 期' );
                break;
            }
        }
    }
    if(lel2==44625){    //4後
        let arr5=[0,48825,51240,54915];
        for(var i=0;i<=3;i++){
            var tex4=tex2-arr5[i];
            if(tex4<0,i=1){
                alert('打過秘境後在 5前 期');
                break;
            }
            else if(tex4<0,i=2){
                alert('打過秘境後在 5中 期' );
                break;
            }
            else if(tex4<0,i=3){
                alert('打過秘境後在 5後 期' );
                break;
            }
        }
    }
    if(lel2==54915){    //5後
        let arr6=[0,56490,59325,61950];
        for(var i=0;i<=3;i++){
            var tex5=tex2-arr6[i];
            if(tex5<0,i=1){
                alert('打過秘境後在 6前 期');
                break;
            }
            else if(tex5<0,i=2){
                alert('打過秘境後在 6中 期' );
                break;
            }
            else if(tex5<0,i=3){
                alert('打過秘境後在 6後 期' );
                break;
            }
        }
    }
    if(lel2==61950){    //6後
        let arr7=[0,65415,68670,72135];
        for(var i=0;i<=3;i++){
            var tex6=tex2-arr7[i];
            if(tex6<0,i=1){
                alert('打過秘境後在 7前 期');
                break;
            }
            else if(tex6<0,i=2){
                alert('打過秘境後在 7中 期' );
                break;
            }
            else if(tex6<0,i=3){
                alert('打過秘境後在 7後 期' );
                break;
            }
        }
    }
    if(lel2==72135){    //7後
        let arr8=[0,75705,79485,166950];
        for(var i=0;i<=3;i++){
            var tex7=tex2-arr8[i];
            if(tex7<0,i=1){
                alert('打過秘境後在 8前 期');
                break;
            }
            else if(tex7<0,i=2){
                alert('打過秘境後在 8中 期' );
                break;
            }
            else if(tex7<0,i=3){
                alert('打過秘境後在 8後 期' );
                break;
            }
        }
    }
    if(lel2==166950){    //8後
        let arr9=[0,175350,183750,193220];
        for(var i=0;i<=3;i++){
            var tex8=tex2-arr9[i];
            if(tex8<0,i=1){
                alert('打過秘境後在 9前 期');
                break;
            }
            else if(tex8<0,i=2){
                alert('打過秘境後在 9中 期' );
                break;
            }
            else if(tex8<0,i=3){
                alert('打過秘境後在 9後 期' );
                break;
            }
        }
    }
    if(lel2==193220){    //9後
        let arr10=[0,202965,213150,223650];
        for(var i=0;i<=3;i++){
            var tex9=tex2-arr10[i];
            if(tex9<0,i=1){
                alert('打過秘境後在 10前 期');
                break;
            }
            else if(tex9<0,i=2){
                alert('打過秘境後在 10中 期' );
                break;
            }
            else if(tex9<0,i=3){
                alert('打過秘境後在 10後 期' );
                break;
            }
        }
    }
    if(lel2==223650){    //10後
        let arr11=[0,262500,283500,315000];
        for(var i=0;i<=3;i++){
            var tex10=tex2-arr11[i];
            if(tex10<0,i=1){
                alert('打過秘境後在 11前 期');
                break;
            }
            else if(tex10<0,i=2){
                alert('打過秘境後在 11中 期' );
                break;
            }
            else if(tex10<0,i=3){
                alert('打過秘境後在 11後 期' );
                break;
            }
        }
    }
    if(lel2==315000){    //11後
        let arr12=[0,1050000,861000,903000];
        for(var i=0;i<=3;i++){
            var tex11=tex2-arr12[i];
            if(tex11<0,i=1){
                alert('打過秘境後在 12前 期');
                break;
            }
            else if(tex11<0,i=2){
                alert('打過秘境後在 12中 期' );
                break;
            }
            else if(tex11<0,i=3){
                alert('打過秘境後在 12後 期' );
                break;
            }
        }
    }
    if(lel2==903000){    //12後
        let arr13=[0,924000,945000,950985];
        for(var i=0;i<=3;i++){
            var tex12=tex2-arr13[i];
            if(tex12<0,i=1){
                alert('打過秘境後在 13前 期');
                break;
            }
            else if(tex12<0,i=2){
                alert('打過秘境後在 13中 期' );
                break;
            }
            else if(tex12<0,i=3){
                alert('打過秘境後在 13後 期' );
                break;
            }
        }
    }
    if(lel2==950985){    //13後
        let arr14=[0,966980,985530,1003275];
        for(var i=0;i<=3;i++){
            var tex13=tex2-arr14[i];
            if(tex13<0,i=1){
                alert('打過秘境後在 14前 期');
                break;
            }
            else if(tex13<0,i=2){
                alert('打過秘境後在 14中 期' );
                break;
            }
            else if(tex13<0,i=3){
                alert('打過秘境後在 14後 期' );
                break;
            }
        }
    }
    if(lel2==1003275){    //14後
        let arr15=[0,1020000,1039500,1058422];
        for(var i=0;i<=3;i++){
            var tex14=tex2-arr15[i];
            if(tex14<0,i=1){
                alert('打過秘境後在 15前 期');
                break;
            }
            else if(tex14<0,i=2){
                alert('打過秘境後在 15中 期' );
                break;
            }
            else if(tex14<0,i=3){
                alert('打過秘境後在 15後 期' );
                break;
            }
        }
    }
    if(lel2==1058422){    //15後
        let arr16=[0,2520000,1890000,1942500];
        for(var i=0;i<=3;i++){
            var tex15=tex2-arr16[i];
            if(tex15<0,i=1){
                alert('打過秘境後在 16前 期');
                break;
            }
            else if(tex15<0,i=2){
                alert('打過秘境後在 16中 期' );
                break;
            }
            else if(tex15<0,i=3){
                alert('打過秘境後在 16後 期' );
                break;
            }
        }
    }
}
function processFormData6() {
    document.getElementById("hid").style.display = '';
    document.getElementById("view").style.display = 'none';
}
function processFormData7() {
    document.getElementById("hid").style.display = 'none';
    document.getElementById("view").style.display = '';
}
function processFormData5() {
    var lel3 = parseInt(document.getElementById('lel3').value)
    if(lel3==1){
        alert('Lv.1 凡人\n功法：戰力+150\n百寶袋：戰力+180\n保底：5  (2,500金幣)\n挑戰帖：20修為');
    }
    if(lel3==2){
        alert('Lv.2 練氣\n功法：戰力+400\n百寶袋：戰力+430\n保底：10  (5,000金幣)\n挑戰帖：100修為');
    }
    if(lel3==3){
        alert('Lv.3 築基\n功法：戰力+7000\n百寶袋：戰力+7000\n保底：20  (10,000金幣)\n挑戰帖：800修為');
    }
    if(lel3==4){
        alert('Lv.4 結丹\n功法：修練速度+5%\n百寶袋：戰力+20,000\n保底：40  (20,000金幣)\n挑戰帖：1000修為');
    }
    if(lel3==5){
        alert('Lv.5 元嬰\n功法：修練速度+5%\n百寶袋：戰力+60,000\n保底：60  (30,000金幣)\n挑戰帖：1,500修為');
    }
    if(lel3==6){
        alert('Lv.6 出竅\n功法：火系戰力+3%\n百寶袋：戰力+80,000\n保底：80  (40,000金幣)\n挑戰帖：2,000修為');
    }
    if(lel3==7){
        alert('Lv.7 化神\n功法：水系戰力+3%\n百寶袋：戰力+100,000\n保底：100  (50,000金幣)\n挑戰帖：3,000修為');
    }
    if(lel3==8){
        alert('Lv.8 合體\n功法：木系戰力+3%\n百寶袋：戰力+140,000\n保底：120  (60,000金幣)\n挑戰帖：4,000修為');
    }
    if(lel3==9){
        alert('Lv.9 洞虛\n功法：戰力+100,000\n百寶袋：戰力+200,000\n保底：150  (75,000金幣)\n挑戰帖：5,000修為');
    }
    if(lel3==10){
        alert('Lv.10 大承\n功法：戰力+1%\n百寶袋：戰力+400,000\n保底：180  (90,000金幣)\n挑戰帖：6,000修為');
    }
    if(lel3==11){
        alert('Lv.11 渡劫\n功法：修練速度+15%\n百寶袋：戰力+1%\n保底：210  (105,000金幣)\n挑戰帖：8,000修為');
    }
    if(lel3==12){
        alert('Lv.12 人仙\n功法：修練速度+30%\n百寶袋：戰力+1,000,000\n保底：250  (125,000金幣)\n挑戰帖：20,000修為');
    }
    if(lel3==13){
        alert('Lv.13 真仙\n功法：木系戰力+5%\n百寶袋：戰力+1,300,000\n保底：290  (145,000金幣)\n挑戰帖：25,000修為');
    }
    if(lel3==14){
        alert('Lv.14 金仙\n功法：火系戰力+5%\n百寶袋：戰力+1,700,000\n保底：330  (165,000金幣)\n挑戰帖：28,000修為');
    }
    if(lel3==15){
        alert('Lv.15 上仙\n功法：水系戰力+5%\n百寶袋：戰力+5%\n保底：370  (185,000金幣)\n挑戰帖：30,000修為');
    }
    if(lel3==16){
        alert('Lv.16 仙君\n功法：戰力+3,000,000\n百寶袋：戰力+3,000,000\n保底：410  (205,000金幣)\n挑戰帖：45,000修為');
    }
    if(lel3==17){
        alert('Lv.17 仙尊\n功法：戰力+15%\n百寶袋：戰力+3,500,000\n保底：450  (225,000金幣)\n挑戰帖：60,000修為');
    }
    if(lel3==18){
        alert('Lv.18 仙帝\n功法：修練速度+70%\n百寶袋：戰力+15%\n保底：500  (250,000金幣)\n挑戰帖：100,000修為');
    }
}
function processFormData8() {
    var a=Math.floor(Math.random() * 9);
    // alert(a);
    if(a<=3){
        alert(a+'木');
    }
    if(3<a & a<=6){
        alert(a+'火');
    }
    if(6<a & a<=9){
        alert(a+'水');
    }
}