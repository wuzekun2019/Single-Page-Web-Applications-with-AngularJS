(function(){
'use strict';

angular.module('LunchCheck',[]).
    controller('LunchCheckController',LunchCheckController)

LunchCheckController.$inject = ['$scope']

function LunchCheckController($scope){
    $scope.lunch = ''
    $scope.checkresult = ''

    $scope.empty = true
    $scope.enjoy = true

    $scope.checkiftoomuch = function(){

        if ($scope.lunch.length==0){
            $scope.empty = true
            $scope.checkresult =  "Please enter data first";
        }
        else {
            $scope.empty = false
            var numberoflunch = countnumber($scope.lunch)
            if (numberoflunch<=3){
                $scope.enjoy = true
                $scope.checkresult =  "Enjoy!";
            }
            else{
                $scope.enjoy = false
                $scope.checkresult =  "Too much!";
            }
        }
    }

    function countnumber(lunch) {
        var result = 0;
        lunch.split(' ').forEach(element => {
            if (element!=''){
                result+=1
            }
        });
        return result
    }

}
})();