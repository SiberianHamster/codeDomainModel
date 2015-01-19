        var wantsgas = document.getElementById("checkgas");
        var wantsfood = document.getElementById("checkfood");
        var wantsbathroom = document.getElementById("checkbathroom");
        var currentlocation = document.getElementById("currentinput");
        var forwardclicked = document.getElementById("forward_button");
        var outputarea = document.getElementById("outputarea");

      function User(currentlocation, wantsgas, wantsfood, wantsbathroom) {
        this.currentlocation = currentlocation;
        this.wantsgas = wantsgas;
        this.wantsfood = wantsfood;
        this.wantsbathroom = wantsbathroom;
      }

      function Trip(totalmiles, goTo, closest){
        this.totalmiles = totalmiles;
        this.goTo = goTo;
        this.closest = closest;
      }

      function PointofInterest(storeName, poiLocation, hasGas, hasFood, hasBathroom){
        this.storeName = storeName;
        this.poiLocation = poiLocation;
        this.hasGas = hasGas;
        this.hasFood = hasFood;
        this.hasBathroom = hasBathroom;
      }

      var john = new User (currentlocation, wantsgas, wantsfood, wantsbathroom);
      var disney = new Trip (1161, "goTo", "closest");
      var Panda1 = new PointofInterest ("Panda1", 100, "false", "true", "true");
      var Panda2 = new PointofInterest ("Panda2", 530, "false", "true", "true");
      var Panda3 = new PointofInterest ("Panda3", 600, "false", "true", "true");
      var Panda4 = new PointofInterest ("Panda4", 898, "false", "true", "true");
      var Panda5 = new PointofInterest ("Panda5", 1100, "false", "true", "true");
      var McDonalds1 = new PointofInterest ("McDonalds1", 50, "false", "true", "true");
      var McDonalds2 = new PointofInterest ("McDonalds2", 450, "false", "true", "true");
      var McDonalds3 = new PointofInterest ("McDonalds3", 850, "false", "true", "true");
      var McDonalds4 = new PointofInterest ("McDonalds4", 1050, "false", "true", "true");
      var McDonalds5 = new PointofInterest ("McDonalds5", 1150, "false", "true", "true");
      var GasStop1 = new PointofInterest ("GasStop1", 90, "true", "false", "true");
      var GasStop2 = new PointofInterest ("GasStop2", 590, "true", "false", "true");
      var GasStop3 = new PointofInterest ("GasStop3", 890, "true", "false", "true");
      var GasStop4 = new PointofInterest ("GasStop4", 900, "true", "false", "true");
      var GasStop5 = new PointofInterest ("GasStop5", 1100, "true", "false", "true");
      var Starbucks1 = new PointofInterest ("Starbucks1", 20, "false", "false", "true");
      var Starbucks2 = new PointofInterest ("Starbucks2", 630, "false", "false", "true");
      var Starbucks3 = new PointofInterest ("Starbucks3", 910, "false", "false", "true");
      var Starbucks4 = new PointofInterest ("Starbucks4", 1000, "false", "false", "true");
      var Starbucks5 = new PointofInterest ("Starbucks5", 1110, "false", "false", "true");

      var poiarray = [Panda1, Panda2, Panda3, Panda4, Panda5, McDonalds1, McDonalds2, McDonalds3, McDonalds4, McDonalds5, GasStop1, GasStop2, GasStop3, GasStop4, GasStop5, Starbucks1, Starbucks2, Starbucks3, Starbucks4, Starbucks5];
      

      forwardclicked.addEventListener('click', executeStart, false);


      function executeForward(){
        for (var i = 0; i < poiarray.length; i++) {
          if((wantsgas.checked == true) && (poiarray[i].hasGas == "false")){
            poiarray.splice(i,1);
            i--;
          }
        }
        for (var i = 0; i < poiarray.length; i++) {
          if((wantsfood.checked == true) && (poiarray[i].hasFood == "false")){
            poiarray.splice(i,1);
            i--;
          }
        }
        for (var i = 0; i < poiarray.length; i++) {
          if((wantsbathroom.checked == true) && (poiarray[i].hasBathroom == "false")){
            poiarray.splice(i,1);
            i--;
          }
        }
      };

      function executeAnswer(){
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

      function executeStart(){
        executeForward();
        executeAnswer();
      }
