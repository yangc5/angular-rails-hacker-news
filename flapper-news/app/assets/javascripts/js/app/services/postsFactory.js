function postsFactory($http){
  var o = {};

  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      console.log(o.posts);
      angular.copy(data, o.posts);
    });
  };

  return o;
}

postsFactory.$inject=['$http'];

angular.module('flapperNews').factory('postsFactory', postsFactory);
