
      function User(currentlocation,servicewanted) {
        this.currentlocation = currentlocation;
        this.servicewanted = servicewanted;
      }

      function Trip(totalmiles, goTo, closest){
        this.totalmiles = totalmiles;
        this.goTo = goTo;
        this.closest = closest;
      }

      function PointofInterest(storeName,poiLocation, hasGas, hasFood, hasBathroom){
        this.storeName = storeName;
        this.poiLocation = poiLocation;
        this.hasGas = hasGas;
        this.hasFood = hasFood;
        this.hasBathroom = hasBathroom;
      }

      var John = new User ("currentlocation","servicewanted");
      var Disney = new Trip (1161, "goTo", "closest");
      var Panda1 = new PointofInterest (100, "n", "y", "y");
      var Panda2 = new PointofInterest (530, "n", "y", "y");
      var Panda3 = new PointofInterest (600, "n", "y", "y");
      var Panda4 = new PointofInterest (898, "n", "y", "y");
      var Panda5 = new PointofInterest (1200, "n", "y", "y");
      var McDonalds1 = new PointofInterest (50, "n", "y", "y");
      var McDonalds2 = new PointofInterest (450, "n", "y", "y");
      var McDonalds3 = new PointofInterest (850, "n", "y", "y");
      var McDonalds4 = new PointofInterest (1050, "n", "y", "y");
      var McDonalds5 = new PointofInterest (1350, "n", "y", "y");
      var GasStop1 = new PointofInterest (90, "y", "y", "y");
      var GasStop2 = new PointofInterest (590, "y", "y", "y");
      var GasStop3 = new PointofInterest (890, "y", "y", "y");
      var GasStop4 = new PointofInterest (1090, "y", "y", "y");
      var GasStop5 = new PointofInterest (1300, "y", "y", "y");
      var Starbucks1 = new PointofInterest (20, "n", "n", "y");
      var Starbucks2 = new PointofInterest (630, "n", "n", "y");
      var Starbucks3 = new PointofInterest (910, "n", "n", "y");
      var Starbucks4 = new PointofInterest (1100, "n", "n", "y");
      var Starbucks5 = new PointofInterest (1290, "n", "n", "y");

      
      var currentlocation = document.getElementById("currentinput");
      var forwardclicked = document.getElementById("forward_button");
      forwardclicked.addEventListener('click', executeForward, false);

      function executeForward(){
        
      }
