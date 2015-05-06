// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
	dishid = $routeParams.dishId;
	$scope.status = "Searching...";
	Dinner.Dish.get({id:dishid},function(data){
		$scope.status = '';
		$scope.dish = data;
		$scope.btnId = data.RecipeID; 
		$scope.dishIng = ($scope.dish.Ingredients);
		$scope.dishMenu = Dinner.getFullMenu();
		$scope.dishPrice = Dinner.getPrice($scope.dishIng);
	   },function(data){
	    	 $scope.status = "There was an error";
	   });  



  
});