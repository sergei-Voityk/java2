function fun1() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var option= document.getElementById('mySelect').options;
    alert('Выброна опция' +option[sel].text);
}
function fun2() {
    var rng=document.getElementById('r1');
    var div=document.getElementById('test');
    div.style.width=rng.value+'px';
}