
      function User(currentlocation,servicewanted) {
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

      function PointofInterest(storeName,poiLocation, hasGas, hasFood, hasBathroom){
        this.storeName = storeName;
        this.poiLocation = poiLocation;
        this.hasGas = hasGas;
        this.hasFood = hasFood;
        this.hasBathroom = hasBathroom;
      }

      var John = new User ("currentlocation","servicewanted");
      var Disney = new Trip (1161, "goTo", "closest");
      var Panda1 = new PointofInterest ("Panda1",100, "n", "y", "y");
      var Panda2 = new PointofInterest ("Panda2",530, "n", "y", "y");
      var Panda3 = new PointofInterest ("Panda3",600, "n", "y", "y");
      var Panda4 = new PointofInterest ("Panda4",898, "n", "y", "y");
      var Panda5 = new PointofInterest ("Panda5",1100, "n", "y", "y");
      var McDonalds1 = new PointofInterest ("McDonalds1", 50, "n", "y", "y");
      var McDonalds2 = new PointofInterest ("McDonalds2", 450, "n", "y", "y");
      var McDonalds3 = new PointofInterest ("McDonalds3", 850, "n", "y", "y");
      var McDonalds4 = new PointofInterest ("McDonalds4", 1050, "n", "y", "y");
      var McDonalds5 = new PointofInterest ("McDonalds5", 1150, "n", "y", "y");
      var GasStop1 = new PointofInterest ("GasStop1", 90, "y", "n", "y");
      var GasStop2 = new PointofInterest ("GasStop2", 590, "y", "n", "y");
      var GasStop3 = new PointofInterest ("GasStop3", 890, "y", "n", "y");
      var GasStop4 = new PointofInterest ("GasStop4", 900, "y", "n", "y");
      var GasStop5 = new PointofInterest ("GasStop5", 1100, "y", "n", "y");
      var Starbucks1 = new PointofInterest ("Starbucks1", 20, "n", "n", "y");
      var Starbucks2 = new PointofInterest ("Starbucks2", 630, "n", "n", "y");
      var Starbucks3 = new PointofInterest ("Starbucks3", 910, "n", "n", "y");
      var Starbucks4 = new PointofInterest ("Starbucks4", 1000, "n", "n", "y");
      var Starbucks5 = new PointofInterest ("Starbucks5", 1110, "n", "n", "y");

      var options = ["wantsgas", "wantsfood"] // fill in the rest of this
      // put all of these in an object called preferences. use
      // these variable names as the property names in the object
      var wantsgas = document.getElementById("checkgas");
      var wantsfood = document.getElementById("checkfood");
      var wantsbathroom = document.getElementById("checkbathroom");
      var currentlocation = document.getElementById("currentinput");
      var forwardclicked = document.getElementById("forward_button");

      function whatDoesntMatch(location) {
        // cycle through options, check if the location matches
        // preferences[option]. add the name of the option if they
        // don't match to a new array. return the new array
      }
      forwardclicked.addEventListener('click', executeForward, false);

      var poiarray = [Panda1, Panda2, Panda3, Panda4, Panda5, McDonalds1, McDonalds2, McDonalds3, McDonalds4, McDonalds5, GasStop1, GasStop2, GasStop3, GasStop4, GasStop5, Starbucks1, Starbucks2, Starbucks3, Starbucks4, Starbucks5];
    


//below needs work//
        if (whatDoesntMatch.length === 0){console.log("ALL Yes")
        } else console.log("you need two locations");  
        if (poiarray[0].hasGas.checked==wantsgas && poiarray[0].hasFood.checked==wantsfood && poiarray[0].hasBathroom.checked==wantsbathroom){console.log("Yes this is the location")
        } else console.log("you need two locations"); 



      console.log(poiarray[0].poiLocation);


      function executeForward(){}






// console.log (wantsgas.checked)
      // poiarray.push();
