function PostService(postsFactory){
  this.getPost = function(id) {
    return postsFactory.posts[id];
  }
}

PostService.$inject=['postsFactory'];

angular.module('flapperNews').service('PostService', PostService);
