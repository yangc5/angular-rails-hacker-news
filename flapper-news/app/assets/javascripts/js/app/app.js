angular.module('flapperNews', ['ui.router', 'templates'])
       .config(function($stateProvider, $urlRouterProvider) {
                $stateProvider
                  .state('posts', {
                    url: '/posts',
                    templateUrl: 'views/_posts.html',
                    controller: 'MainController as ctrl',
                    resolve: {
                      posts: function(postsFactory){
                        console.log(postsFactory.getAll());
                        return postsFactory.getAll();
                      }
                    }
                  })
                  .state('posts.post', {
                    url: '/:id',
                    templateUrl: 'views/_post.html',
                    controller: 'PostController as post',
                    resolve: {
                      post: function($stateParams, PostService){
                        return PostService.getPost($stateParams.id);
                      }
                    }
                  });

                $urlRouterProvider.otherwise('/');
              });
