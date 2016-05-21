var app = angular.module('redditFun', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/templates/home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
       }
    })

    .state('login', {
        url: '/login',
        templateUrl: '/templates/login.html',
        controller:'AuthCtrl'
      })
    
     .state('register', {
        url: '/register',
        templateUrl: '/templates/register.html',
        controller:'AuthCtrl'
      })

    .state('post', {
      url: '/posts/:id',
      templateUrl: '/templates/posts.html',
      controller: 'PostsCtrl',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      }
    })

  $urlRouterProvider.otherwise('home');
}]);