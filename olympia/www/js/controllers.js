angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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

.controller('CoverStoryCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate) {
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

.controller('PlaylistCtrl', function($scope, $stateParams,$ionicPopup) {

  $scope.showDialog = function() {
    var alertPopup = $ionicPopup.alert({
     title: 'Confirmation',
     template: 'Changes have been saved!'
    });
    alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
    });
  };

   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Reminder',
       template: 'Do you want to set a reminder for this event?'
/*       templateUrl: 'templates/reminder_popup.html'*/
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

});
