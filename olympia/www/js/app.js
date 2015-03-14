// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.cover_stories', {
    url: "/cover_stories",
    views: {
      'menuContent': {
        templateUrl: "templates/cover.html",
        controller: 'CoverStoryCtrl'
      }
    }
  })


  .state('app.firstUser_allegiance', {
    url: "/firstUser_allegiance",
    views: {
      'menuContent': {
        templateUrl: "templates/firstUser_allegiance.html"
      }
    }
  })

  .state('app.firstUser_sports', {
    url: "/firstUser_sports",
    views: {
      'menuContent': {
        templateUrl: "templates/firstUser_sports.html"
      }
    }
  })

  .state('app.firstUser_athletes', {
    url: "/firstUser_athletes",
    views: {
      'menuContent': {
        templateUrl: "templates/firstUser_athletes.html"
      }
    }
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.live_events', {
    url: "/live_events",
    views: {
      'menuContent': {
        templateUrl: "templates/live_events.html"
      }
    }
  })

  .state('app.live_feed_01', {
    url: "/live_feed_01",
    views: {
      'menuContent': {
        templateUrl: "templates/live_feed_01.html"
      }
    }
  })

  .state('app.live_feed_01_athelets', {
    url: "/live_feed_01_athletes",
    views: {
      'menuContent': {
        templateUrl: "templates/live_feed_01_atheletes.html"
      }
    }
  })

    .state('app.live_feed_01_standing', {
    url: "/live_feed_01_standing",
    views: {
      'menuContent': {
        templateUrl: "templates/live_feed_01_standing.html"
      }
    }
  })

  .state('app.live_feed_10', {
    url: "/live_feed_10",
    views: {
      'menuContent': {
        templateUrl: "templates/live_feed_10.html"
      }
    }
  })

  .state('app.live_feed_11', {
    url: "/live_feed_11",
    views: {
      'menuContent': {
        templateUrl: "templates/live_feed_11.html"
      }
    }
  })
  
  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent': {
        templateUrl: "templates/schedule.html",
      }
    }
  })

  .state('app.preference_allegiance', {
    url: "/preference_allegiance",
    views: {
      'menuContent': {
        templateUrl: "templates/preference_allegiance.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.preference_sports', {
    url: "/preference_sports",
    views: {
      'menuContent': {
        templateUrl: "templates/preference_sports.html",
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.preference_athletes', {
    url: "/preference_athletes",
    views: {
      'menuContent': {
        templateUrl: "templates/preference_athletes.html",
        controller: 'PlaylistCtrl'
      }
    }
  })
	
  .state('app.medalCount', {
    url: "/medalCount",
    views: {
      'menuContent': {
        templateUrl: "templates/medalCount.html",
      }
    }
  })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/app/firstUser_allegiance');
});
