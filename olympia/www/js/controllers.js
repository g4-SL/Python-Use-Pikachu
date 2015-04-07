angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$rootScope) {
//	$rootScope.allegiance = "China";
//	$rootScope.sports = [];
//	$rootScope.sports.push({type:"badminton"});
//	$rootScope.athletes = [];
//	$rootScope.athletes.push({name:"Aliya Garayeva"});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CoverStoryCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate,$rootScope) {
	
	  $scope.existed = function(section,param){
		  if (section == 'sport'){
			  for (var i = 0 ; i < $rootScope.sports.length;i++){
				  if ($rootScope.sports[i].type == param)
					  return true;
			  }

		  }
		  else{
			  for (var i = 0 ; i < $rootScope.athletes.length;i++){
				  if ($rootScope.athletes[i].name == param){
					  return true;
				  }
			  }
		  }
		  return false;
	  };
	
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };

  $ionicModal.fromTemplateUrl('templates/instruction_modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });

  $scope.closeModal = function() {
    $scope.modal.hide();
  };


  
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LiveEventCtrl', function($scope, $stateParams) {
})

.controller('StandingCtrl', function($scope, $stateParams,$ionicPopup) {

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

})

.controller('firstUserAllegianceCtrl',function($scope,$rootScope){

	$scope.next = function(){
		if ($rootScope.allegiance == null){
			alert("You must select an allegiance!");
		}
		else{
			$("#allegiance_next").attr("href", "#/app/firstUser_sports");
			$("#allegiance_next").trigger("click");
		}
		};
	$scope.setAllegiance = function(country){
		$rootScope.allegiance = country;
		if (country == "Canada"){
			$("#"+country).css("background-color","#C8C8C8");
			$("#China").css("background-color","white");
		}
		else{
			$("#"+country).css("background-color","#C8C8C8");
			$("#Canada").css("background-color","white");	
		}
	};
})

.controller('firstUserSportsCtrl',function($scope,$rootScope){
	if ($rootScope.sports == null)
		$rootScope.sports = [];

	$scope.setSport = function(sport){
		var found = false;
		for (var i = 0 ; i < $rootScope.sports.length; i++){
			if ($rootScope.sports[i].type == sport){
				$rootScope.sports.splice(i, 1);
				$("#"+sport).css("background-color","white");
				found = true;
				break;
			}
				
		}
		
		if(found == false){
			var sportObj = {type:sport,imageURL:"img/sports/"+sport+".png"};
			$rootScope.sports.push(sportObj);
			$("#"+sport).css("background-color","#C8C8C8");
		}
	};
})

.controller('firstUserAthletesCtrl',function($scope,$rootScope){
	if ($rootScope.athletes == null)
		$rootScope.athletes = [];
	
	$scope.setAthlete = function(athlete,short_name,country){
		var found = false;
		for (var i = 0 ; i < $rootScope.athletes.length; i++){
			if ($rootScope.athletes[i].name == athlete){
				$rootScope.athletes.splice(i, 1);
				$("#"+short_name).css("background-color","white");
				found = true;
				break;
			}
		}
		
		if(found == false){
			var athleteObj = {name:athlete,imageURL:"img/athletes/"+short_name+".png",country:country};
			$rootScope.athletes.push(athleteObj);
			$("#"+short_name).css("background-color","#C8C8C8");
		}

	};
})
.controller('PreferenceAllegianceCtrl',function($scope,$rootScope){
	//$rootScope.allegiance = "Canada";
	$scope.imageURL = "img/country/"+$rootScope.allegiance+".png";
	
})
.controller('PreferenceSportsCtrl',function($scope,$rootScope){
	
})



;
