// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {
  
  var numberOfGuest = 3;
  var menu = [];
  test = false;


  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
  }

  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }

  //Returns all the dishes on the menu.

  this.addDishToMenu = function(dish) {
      menu.push(dish);
}

  this.getFullMenu = function() {
    return menu;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    menu = this.getFullMenu();
    var j;
    var t;
    ilist = [] ;
    for(j in menu){
      for(t in menu[j].Ingredients)
        ilist.push(menu[j].Ingredients[t]);
    } 
    return ilist;
  }

  this.getPrice = function(ingredient) {
    console.log(ingredient);
    price = 0;
    for(i in ingredient) {
      price += ingredient[i].MetricQuantity;
    }
    price = parseInt(price);
    console.log(price);
    return price;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalPrice = function() {
    quant = 0;
    for(i in menu) {
      ing = menu[i].Ingredients;
      for(j in ing) {
        quant += ing[j].MetricQuantity;
      }
    }
  }
    

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    menu = this.getFullMenu();
    for(i in menu){
      if(menu[i].RecipeID == id) {
        menu.splice(i,1);
      }
    }
    return menu;
  }

  this.DishSearch = $resource('http://api.bigoven.com/recipes',{
    pg:1,
    rpp:25,
    api_key:'dvxJ8iHvQ6ZTVHFUva30K1H5U4Jt0cUA'
  });

  this.Dish = $resource('http://api.bigoven.com/recipe/:id',{
    api_key:'dvxJ8iHvQ6ZTVHFUva30K1H5U4Jt0cUA'
  }); 



  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});