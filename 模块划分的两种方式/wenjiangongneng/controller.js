var myController = angular.module('myController',[]);
myController.controller('myController',function($scope){
    $scope.change = function(index){
        var eleList = document.querySelectorAll('.tab .item');
        for(var i=0;i<eleList.length;i++){
            eleList[i].classList.remove('show');
        }
        eleList[index].classList.add('show');
    }
    $scope.title = data.title;
    $scope.content = data.content;
});