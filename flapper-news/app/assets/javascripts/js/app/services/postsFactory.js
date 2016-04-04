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
  };

  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
      .success(function(data){
        post.upvotes += 1;
      });
  };

  return o;
}

postsFactory.$inject=['$http'];

angular.module('flapperNews').factory('postsFactory', postsFactory);
