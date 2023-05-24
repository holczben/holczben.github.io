var elozmenyek = ""
var click = 0
var szamlalo = 0
var kijelzok = 0
function szam(value){
    if (kijelzok == 0){
        document.getElementById("kijelzo").value += value
    }
    else{
        document.getElementById("kijelzo2").value += value
        kijelzok = 0
    }
}
function torol(){
document.getElementById("kijelzo").value = ""
document.getElementById("kijel").innerHTML = '<input type="text" onclick="kijelzo()" class="kijelzo"id="kijelzo" placeholder="0"></input>'
}
function egyenlo(){
    szamlalo = 0
    if (document.getElementById("kijel").innerHTML == '<input type="text" class="kijelzo" id="kijelzo" placeholder="(K)r=">'){
        var r = document.getElementById("kijelzo").value
        var kerulet = 2*r*3.14159
        document.getElementById("kijel").innerHTML = '<input type="text" class="kijelzo" id="kijelzo" placeholder="0">'
        document.getElementById("kijelzo").value = kerulet
        elozmenyek += '<p>◦(r = ' + r + ') = ' + kerulet + '</p>'
        szamlalo = 1
    }
    if (document.getElementById("kijel").innerHTML == '<input type="text" class="kijelzo" id="kijelzo" placeholder="(T)r=">'){
        var r = document.getElementById("kijelzo").value
        var terulet = r*r*3.14159
        document.getElementById("kijel").innerHTML = '<input type="text" class="kijelzo" id="kijelzo" placeholder="0">'
        document.getElementById("kijelzo").value = terulet
        elozmenyek += '<p>●(r = ' + r + ') = ' + terulet + '</p>'
        szamlalo = 1
    }
    if (document.getElementById("kijel").innerHTML == '<input type="text" class="kijelzo" id="kijelzo" placeholder="a=">'){
        var a = document.getElementById("kijelzo").value
        var e = Math.sqrt(a*a*2)
        document.getElementById("kijel").innerHTML = '<input type="text" class="kijelzo" id="kijelzo" placeholder="0">'
        document.getElementById("kijelzo").value = e
        elozmenyek +='<p>☒(a = ' + a + ') = ' + e +'</p>'
        szamlalo = 1
    }
    if (document.getElementById("kijel").innerHTML == '<input type="text" onclick="kijelzo()" class="kijelzo" id="kijelzo" placeholder="a=">' + '<br> <br>' + '<input type="text" onclick="kijelzo2()" class="kijelzo" id="kijelzo2" placeholder="M=">'){
        var a = document.getElementById("kijelzo").value
        var M = document.getElementById("kijelzo2").value
        var V = ((((Math.sqrt(25+10*Math.sqrt(5)))/4)*(a*a))*M)/3
        document.getElementById("kijel").innerHTML = '<input type="text" class="kijelzo" id="kijelzo" placeholder="0">'
        document.getElementById("kijelzo").value = V
        elozmenyek +='<p> GT( a = ' + a + ', M = ' + M + ') = ' + V +'</p>'
        szamlalo = 1
    }
    if(szamlalo == 0){
        var ertek = document.getElementById("kijelzo").value;
        try{var kesz_szam = eval(ertek);
            document.getElementById("kijelzo").value = kesz_szam;
            elozmenyek +='<p>' + ertek + ' = ' + kesz_szam + '</p>'
    }
    catch {
        document.getElementById("kijelzo").value = "Error"
    }
}
}
function pi(value){
    var pi = 0;
    for(var i = 1;i <= value;i += 2){
        pi += (i%4 == 3?-1:1)*(1/i);
    }
    document.getElementById("kijelzo").value += (4*pi).toFixed(5);
}
function korkerulet(){
    document.getElementById("kijel").innerHTML = '<input type="text" class="kijelzo" id="kijelzo" placeholder="(K)r=">'

}
function korterulet(){
    document.getElementById("kijel").innerHTML = '<input type="text" class="kijelzo" id="kijelzo" placeholder="(T)r=">'

}
function atlo(){
    document.getElementById("kijel").innerHTML = '<input type="text" class="kijelzo" id="kijelzo" placeholder="a=">'
}
function gula(){
    document.getElementById("kijel").innerHTML = '<input type="text"  onclick="kijelzo()" class="kijelzo" id="kijelzo" placeholder="a=">' + '<br> <br>' + '<input type="text"  onclick="kijelzo2()" class="kijelzo" id="kijelzo2" placeholder="M=">'
}
function elozmeny(){
    if (click % 2 == 0){
        document.getElementById("body").innerHTML = "<div> <button onclick='elozmeny()'>×</button> </div> <li align='center' id ='lista'></li> <script src='szamologep.js'></script>"
        document.getElementById("lista").innerHTML = elozmenyek
        click += 1
    }
    else{
        document.getElementById("body").innerHTML = '<div align="center" class="plusgomb"> <button onclick="korkerulet()">◦</button class="gomb"> <button onclick="korterulet()">●</button class="gomb"> <button onclick="atlo()">☒</button class="gomb"> <button onclick="gula()">GT</button class="gomb"> <button onclick="elozmeny()">◴</button class="gomb"> </div> <div align="center" id="kijel" class="kijel"> <input type="text" onclick="kijelzo()" class="kijelzo"id="kijelzo" placeholder="0"> </div> <div align="center"> <button onclick="szam(\'1\')">1</button class="gomb"> <button onclick="szam(\'2\')">2</button class="gomb" > <button onclick="szam(\'3\')">3</button class="gomb" > <button onclick="szam(\'+\')">+</button class="gomb" > </div> <div align="center"> <button onclick="szam(\'4\')">4</button class="gomb"> <button onclick="szam(\'5\')">5</button class="gomb"> <button onclick="szam(\'6\')">6</button class="gomb"> <button onclick="szam(\'-\')">-</button class="gomb"> </div> <div align="center"> <button onclick="szam(\'7\')">7</button class="gomb"> <button onclick="szam(\'8\')">8</button class="gomb"> <button onclick="szam(\'9\')">9</button class="gomb"> <button onclick="szam(\'*\')">*</button class="gomb"> </div> <div align="center"> <button onclick="szam(\'0\')">0</button class="gomb"> <button onclick="szam(\'.\')">.</button class="gomb"> <button onclick="pi(100000000)">π</button class="gomb"> <button onclick="szam(\'/\')">÷</button class="gomb"> </div> <div align="center"> <button onclick="egyenlo()">=</button class="gomb"> <button onclick="torol()">C</button class="gomb"> </div> <script src="szamologep.js"></script>'
        click += 1
    }
}
function kijelzo(){
    kijelzok = 0
    console.log(kijelzok)
}
function kijelzo2(){
    kijelzok = 1
    console.log(kijelzok)
}