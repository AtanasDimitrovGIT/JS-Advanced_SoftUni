function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      function calculateBestRestaurant() {
         
         var restaurantArray = document.getElementById("input").value.split("\n");
       
       
         document.getElementById("input").value = "";
       
       
         var restaurantData = {};
       
       
         for (var i = 0; i < restaurantArray.length; i++) {
           var restaurantInfo = restaurantArray[i].split(","); 
       
           var restaurantName = restaurantInfo[0].trim();
           var workerName = restaurantInfo[1].trim();
           var workerSalary = parseFloat(restaurantInfo[2]);
       
        
           if (restaurantData.hasOwnProperty(restaurantName)) {
           
             restaurantData[restaurantName].workers.push({ name: workerName, salary: workerSalary });
       
         
             var totalSalary = restaurantData[restaurantName].totalSalary + workerSalary;
             var workerCount = restaurantData[restaurantName].workers.length;
             var avgSalary = totalSalary / workerCount;
             var bestSalary = Math.max(restaurantData[restaurantName].bestSalary, workerSalary);
       
             restaurantData[restaurantName].totalSalary = totalSalary;
             restaurantData[restaurantName].avgSalary = avgSalary;
             restaurantData[restaurantName].bestSalary = bestSalary;
           } else {
         
             restaurantData[restaurantName] = {
               workers: [{ name: workerName, salary: workerSalary }],
               totalSalary: workerSalary,
               avgSalary: workerSalary,
               bestSalary: workerSalary
             };
           }
         }
       
     
         var bestRestaurant = null;
         for (var restaurant in restaurantData) {
           if (!bestRestaurant || restaurantData[restaurant].avgSalary > bestRestaurant.avgSalary) {
             bestRestaurant = {
               name: restaurant,
               avgSalary: restaurantData[restaurant].avgSalary.toFixed(2),
               bestSalary: restaurantData[restaurant].bestSalary.toFixed(2),
               workers: restaurantData[restaurant].workers
             };
           }
         }
       
        
         bestRestaurant.workers.sort(function (a, b) {
           return b.salary - a.salary;
         });
       
      
         var bestRestaurantString =
           "Name: " +
           bestRestaurant.name +
           " Average Salary: " +
           bestRestaurant.avgSalary +
           " Best Salary: " +
           bestRestaurant.bestSalary;
       
         var workersString = "";
         for (var j = 0; j < bestRestaurant.workers.length; j++) {
           workersString +=
             "Name: " + bestRestaurant.workers[j].name + " With Salary: " + bestRestaurant.workers[j].salary.toFixed(2) + " ";
         }
       
      
         document.getElementById("output").innerHTML =
           "<p>" + bestRestaurantString + "</p>" + "<p>" + workersString + "</p>";
       }
       
      
   }
}