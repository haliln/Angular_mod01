(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.manot = '';
        $scope.message = '';
        $scope.messageOK = false;

        $scope.checkLunch = function() {
            if ($scope.manot.trim().length === 0) {
                $scope.message = 'Please enter data first';
                $scope.messageOK = false;
            } else {
                var arrayManots = $scope.manot.split(',');
                var arrayNonEmptyManots = arrayManots.filter(function(v) {
                    return v.trim() !== '';
                });
                $scope.messageOK = true;
                if (arrayNonEmptyManots.length <= 3) {
                    $scope.message = 'Enjoy!';
                    $scope.messageOK = true;
                } else {
                    $scope.message = 'Too much!';
                    $scope.messageOK = false;
                }
            }
        };
    }
})();
