function PostService(postsFactory, $filter){
  this.getPost = function(id) {
    return $filter('filter')(postsFactory.posts, {id: id})[0];
  }
}

PostService.$inject=['postsFactory', '$filter'];

angular.module('flapperNews').service('PostService', PostService);
