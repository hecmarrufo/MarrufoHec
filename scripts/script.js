var requestURL = './DataBasesJSON/data1.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var contenidos = request.response; //storing DataBases son variable
//////////////////////////////////////////////////////////////////
    for(i=0; i < contenidos.menu.length; i++) {
        var elem = contenidos.menu[i];
        var li = document.createElement('li');
        li.innerHTML = elem;
        document.getElementById('sidebar').appendChild(li);
    }
//////////////////////////////////////////////////////////////////
    for(i=0; i < contenidos.sections.length; i++) {
        var elem = contenidos.sections[i].name;
        var li = document.createElement('li');
        li.classList.add("selectores");
        li.id = i;
        li.innerHTML = elem;
        document.getElementById('section').appendChild(li);
        for (j = 0; j < contenidos.sections[i].kpis.length; j++) {
            document.getElementById("kapis").innerHTML +="<div name='kpi"+i+"' class='ka' style='display: none'>"+
                contenidos.sections[i].kpis[j].name + "<br><div class='nums'>" +
                contenidos.sections[i].kpis[j].value +
                " <span id='i"+i+"j"+j+"'> "+contenidos.sections[i].kpis[j].limit +
                contenidos.sections[i].kpis[j].unit + "</span></div></div>";
            var lim = parseInt(contenidos.sections[i].kpis[j].limit);
            var val = parseInt(contenidos.sections[i].kpis[j].value);
            if (val>lim){
                document.getElementById("i"+i+"j"+j).style.color = "red";
            }else {
                document.getElementById("i"+i+"j"+j).style.color = "green";
            }
        }
    }
};
//////////////////////////////////////////////////////////////////
//show KPIS functionality
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'selectores')) {
        var x = event.target.id;
        var hideThese = document.getElementsByClassName('ka');
        for (i = 0; i < hideThese.length; i++){
            hideThese[i].style.display = "none";
        }
        document.getElementById(x).style.backgroundColor="lightgray";
        document.getElementById(x).style.color="black";
        var showThese = document.getElementsByName('kpi'+x);
        document.getElementsByClassName('floating')[0].id=('kpi'+x);
        for (i = 0; i < showThese.length; i++) {
            showThese[i].style.display = "block";
        }
    }
    if (hasClass(e.target, 'floating')) {
        var x = event.target.id;
        var a = Math.floor(Math.random() * 10) + 1;
        var b = Math.floor(Math.random() * 10) + 1;
        if (a>b) {
            document.getElementById("kapis").innerHTML += "<div name='" + x + "' class='ka'>Dummy Values<br><div class='nums'>" + a + " <span style='color: red'> " + b + "%</span></div></div>";
        }else{
            document.getElementById("kapis").innerHTML += "<div name='" + x + "' class='ka'>Dummy Values<br><div class='nums'>" + a + " <span style='color: green'> " + b + "%</span></div></div>";
        }
    }
}, false);
