(function () {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);
		LunchCheckController.$inject = ['$scope'];

		function LunchCheckController($scope){
			$scope.lunchItems = "";
			$scope.message = "";
			$scope.status = "";
			$scope.formStatus = "";

			$scope.checkAmount = function(){
				if($scope.lunchItems.replace(/,/g, '').trim() === ""){
					$scope.status = "danger";
					$scope.formStatus = "warning";
					$scope.message = "Please enter data first";
					return;
				}

				var lunchItemsArray = $scope.lunchItems.split(',');
				var counter = 0;
				for(var i = 0; i < lunchItemsArray.length; i++){
					if(lunchItemsArray[i].trim() !== ""){
						counter++;
					}
				}

				$scope.status = "success";
				$scope.formStatus = "success";
				if(counter <=3){
					$scope.message = "Enjoy!";
				}
				else{
					$scope.message = "Too much!";
				}
			}
		}
})();