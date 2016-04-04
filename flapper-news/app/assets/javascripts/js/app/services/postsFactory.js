function postsFactory($http){
  var o = {
    posts: []
  };

  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };

  o.create = function(post, ctrl){
    return $http.post('/posts.json', post).success(function(data){
      console.log(data);
      ctrl.posts.push(data);
    });
  }

  return o;
}

postsFactory.$inject=['$http'];

angular.module('flapperNews').factory('postsFactory', postsFactory);
