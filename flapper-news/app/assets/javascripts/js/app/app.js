angular.module('flapperNews', ['ui.router'])
       .config(function($stateProvider, $urlRouterProvider) {
                $stateProvider
                  .state('posts', {
                    url: '/posts',
                    templateUrl: 'views/posts.html',
                    controller: 'MainController as ctrl',
                    resolve: {
                      posts: function(postsFactory){
                        return postsFactory.posts;
                      }
                    }
                  })
                  .state('posts.post', {
                    url: '/:id',
                    templateUrl: 'views/post.html',
                    controller: 'PostController as post',
                    resolve: {
                      post: function($stateParams, PostService){
                        return PostService.getPost($stateParams.id);
                      }
                    }
                  });

                $urlRouterProvider.otherwise('/');
              });
