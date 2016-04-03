angular.module('flapperNews', ['ui.router'])
       .config(function($stateProvider, $urlRouterProvider) {
                $stateProvider
                  .state('posts', {
                    url: '/posts',
                    templateUrl: 'views/posts.html',
                    controller: 'MainController as ctrl'
                  });

                $urlRouterProvider.otherwise('/');
              });
