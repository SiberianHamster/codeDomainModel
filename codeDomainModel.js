  var currentlocation = document.getElementById("currentinput");
  var forwardclicked = document.getElementById("forward_button");
  var dropdown = document.getElementById("dropdown");

  function User(currentlocation) {
    this.currentlocation = currentlocation;
  }

  function Trip(totalmiles){
    this.totalmiles = totalmiles;
  }

  function stoppingLocations(storeName, poiLocation, hasGas, hasFood, hasBathroom){
    this.storeName = storeName;
    this.poiLocation = poiLocation;
    this.hasGas = hasGas;
    this.hasFood = hasFood;
    this.hasBathroom = hasBathroom;
  }

  var john = new User (currentlocation);
  var disney = new Trip (1161);
  var Costco1 = new stoppingLocations ("Costco1", 14, "true", "true", "true");
  var Costco2 = new stoppingLocations ("Costco2", 234, "true", "true", "true");
  var Costco3 = new stoppingLocations ("Costco3", 342, "true", "true", "true");
  var Costco4 = new stoppingLocations ("Costco4", 457, "true", "true", "true");
  var Costco5 = new stoppingLocations ("Costco5", 1021, "true", "true", "true");
  var Panda1 = new stoppingLocations ("Panda1", 100, "false", "true", "true");
  var Panda2 = new stoppingLocations ("Panda2", 530, "false", "true", "true");
  var Panda3 = new stoppingLocations ("Panda3", 600, "false", "true", "true");
  var Panda4 = new stoppingLocations ("Panda4", 898, "false", "true", "true");
  var Panda5 = new stoppingLocations ("Panda5", 1100, "false", "true", "true");
  var McDonalds1 = new stoppingLocations ("McDonalds1", 50, "false", "true", "true");
  var McDonalds2 = new stoppingLocations ("McDonalds2", 450, "false", "true", "true");
  var McDonalds3 = new stoppingLocations ("McDonalds3", 850, "false", "true", "true");
  var McDonalds4 = new stoppingLocations ("McDonalds4", 1050, "false", "true", "true");
  var McDonalds5 = new stoppingLocations ("McDonalds5", 1150, "false", "true", "true");
  var GasStop1 = new stoppingLocations ("GasStop1", 90, "true", "false", "true");
  var GasStop2 = new stoppingLocations ("GasStop2", 590, "true", "false", "true");
  var GasStop3 = new stoppingLocations ("GasStop3", 890, "true", "false", "true");
  var GasStop4 = new stoppingLocations ("GasStop4", 900, "true", "false", "true");
  var GasStop5 = new stoppingLocations ("GasStop5", 1100, "true", "false", "true");
  var Starbucks1 = new stoppingLocations ("Starbucks1", 20, "false", "false", "true");
  var Starbucks2 = new stoppingLocations ("Starbucks2", 630, "false", "false", "true");
  var Starbucks3 = new stoppingLocations ("Starbucks3", 910, "false", "false", "true");
  var Starbucks4 = new stoppingLocations ("Starbucks4", 1000, "false", "false", "true");
  var Starbucks5 = new stoppingLocations ("Starbucks5", 1110, "false", "false", "true");


  var poiarray = [Costco1, Costco2, Costco3, Costco4, Costco5, Panda1, Panda2, Panda3, Panda4, Panda5, McDonalds1, McDonalds2, McDonalds3, McDonalds4, McDonalds5, GasStop1, GasStop2, GasStop3, GasStop4, GasStop5, Starbucks1, Starbucks2, Starbucks3, Starbucks4, Starbucks5];



  forwardclicked.addEventListener('click', ExecuteStart, false);

  function ExecuteStart(){
    if ((dropdown.value != "None") &&
       ((john.currentlocation.value <= disney.totalmiles) &&
         (john.currentlocation.value>0)) &&
       (($("#checkgas").is(':checked') == true) || ($("#checkbathroom").is(':checked') == true) || ($("#checkfood").is(':checked') == true))){
    NarrowInterestedLocation();
    ExecuteAnswer();
    }
    else outputarea.innerHTML = "Please select a destination location, a valid distance (in miles) that is not greater than the destination and at least one point of interest checked.";
  }

    function NarrowInterestedLocation(){
      for (var i = 0; i < poiarray.length; i++) {
        if(($("#checkgas").is(':checked') == true) && (poiarray[i].hasGas == "false")){
          poiarray.splice(i,1);
          i--;
        }
      }
      for (var i = 0; i < poiarray.length; i++) {
        if(($("#checkfood").is(':checked') == true) && (poiarray[i].hasFood == "false")){
          poiarray.splice(i,1);
          i--;
        }
      }
      for (var i = 0; i < poiarray.length; i++) {
        if(($("#checkbathroom").is(':checked') == true) && (poiarray[i].hasBathroom == "false")){
          poiarray.splice(i,1);
          i--;
        }
      }
    };

    function ExecuteAnswer(){
      var nextneareststoreName = "none";
      var neareststoreName = "none";
      var nearest = disney.totalmiles;

      for (var i = 0; i < poiarray.length; i++){
        if(Math.abs(poiarray[i].poiLocation - Number(john.currentlocation.value)) < nearest){
          nearest = (Math.abs(poiarray[i].poiLocation - Number(john.currentlocation.value)));
          neareststoreName = poiarray[i].storeName;
          var nearestdistance = nearest;
        }
      }
      nearest = disney.totalmiles;
      for (var i = 0; i < poiarray.length; i++){
        if(((poiarray[i].poiLocation - Number(john.currentlocation.value)) < nearest) && ((poiarray[i].poiLocation - Number(john.currentlocation.value))>0)){
          nextneareststoreName = poiarray[i].storeName;
          nearest = (poiarray[i].poiLocation - Number(john.currentlocation.value));
          var nextnearestdistance = nearest;
        }
      }
      outputarea.innerHTML = "The nearest location is " + nearestdistance + " miles away at " + neareststoreName + ".<br> The next nearest location is " + nextnearestdistance + " miles away at " + nextneareststoreName + "."
    }
