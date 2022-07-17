(function(){
'use strict';

var x = 'hello';

angular.module('NameCalculator',[])

.controller('NmaeCalculatorController',function($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNo = function(){
        var totalValue = calculateNo2Str($scope.name);
        $scope.totalValue = totalValue;
    }

    function calculateNo2Str(string){
        var totalStringValue = 0;
        for (var i=0;i<string.length;i++){
            totalStringValue+=string.charCodeAt(i)
        }
        return totalStringValue
    }

})

})();