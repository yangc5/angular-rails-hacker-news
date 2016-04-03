function PostService(postsFactory){
  this.getPost = function(id) {
    return postFactory.posts[id];
  }
}

PostService.$inject=['postsFactory'];

angular.module('flapperNews').service('PostService', PostService);
