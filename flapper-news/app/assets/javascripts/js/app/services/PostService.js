function PostService($http){
  this.getPost = function(id) {
    return $http.get('/posts/'+id+'.json').then(function(res){
      return res.data;
    });
  };
}

PostService.$inject=['$http'];

angular.module('flapperNews').service('PostService', PostService);
