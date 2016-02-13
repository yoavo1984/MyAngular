'use strict';

var mySimpleController = angular.module('mySimpleController', []);

mySimpleController.controller('FirstController', ['$scope', '$http', function ($scope, $http) {
    $scope.dataArray = ["one", "two", "three", "four", "five", "six", "seven"];

    $http.get('data.json').success(function(data){
        $scope.data = data;
    });

    $scope.onGridBoxHover = function () {

    }

}]);
