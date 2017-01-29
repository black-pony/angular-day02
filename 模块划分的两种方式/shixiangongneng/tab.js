var tab = angular.module('tab',[]);
tab.controller('tabController',function($scope){
    $scope.change = function(index){
        var eleList = document.querySelectorAll('.tab .item');
        for(var i=0;i<eleList.length;i++){
            eleList[i].classList.remove('show');
        }
        eleList[index].classList.add('show');
    }
});