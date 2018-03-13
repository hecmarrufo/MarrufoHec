var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("./DataBases/data1.json").then(function (response) {
        $scope.myData = response.data;
    });
});

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.addEventListener('click', function (e) {

    if (hasClass(e.target, 'tabs')) {
        var x = event.target.id;
        var hideThese = document.getElementsByClassName('ka');
        for (i = 0; i < hideThese.length; i++){
            hideThese[i].style.display = "none";
        }
        var showThese = document.getElementsByName(x);
        document.getElementsByClassName('floating')[0].id=(x);
        for (i = 0; i < showThese.length; i++) {
            showThese[i].style.display = "block";
        }
    }

        if (hasClass(e.target, 'floating')) {
        var x = event.target.id;
        var a = Math.floor(Math.random() * 10) + 1;
        var b = Math.floor(Math.random() * 10) + 1;
        if (a>b) {
            var newEle = "<div class='ka' name='"+x+"'>Dummy Values<br><div class='nums'>" + a + " <span style='color: red'> " + b + "%</span></div></div>";
            angular.element(document.getElementById("kapis")).append(newEle)
        }else{
            var newEle = "<div class='ka' name='"+x+"'>Dummy Values<br><div class='nums'>" + a + " <span style='color: green'> " + b + "%</span></div></div>";
            angular.element(document.getElementById("kapis")).append(newEle)
        }
        var showThese = document.getElementsByName(x);
        for (i = 0; i < showThese.length; i++) {
            showThese[i].style.display = "block";
        }
    }
}, false);
