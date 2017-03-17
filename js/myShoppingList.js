var app = angular.module('myShoppingList',[]);
app.controller('myCtrl',function($scope){
    $scope.products = ['Milk','Bread','Cheese'];
    $scope.addItem = function(){
        $scope.error = '';
        if(!$scope.addMe){}
        else if($scope.products.indexOf($scope.addMe) == -1){
            $scope.products.push($scope.addMe);
        }
        else{
            $scope.error = $scope.addMe + ' is already on your shopping list.';
        }
    };
    $scope.removeItem = function(x){
        $scope.error = '';
        $scope.products.splice(x,1);
    };
});