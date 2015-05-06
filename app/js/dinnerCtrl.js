// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.add = function(id) {
	Dinner.Dish.get({id:dishid},function(data){
		$scope.dish = data;
		Dinner.addDishToMenu(data);
		$scope.getMenu();
	   });  
	}

  $scope.remove = function(id) {
   Dinner.removeDishFromMenu(id);
  }

   $scope.getMenu = function() {
   	data = Dinner.getFullMenu();
   	$scope.menu=data;
  }
  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});