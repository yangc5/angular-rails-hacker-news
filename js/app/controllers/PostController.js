function PostController(post){
  this.data = post.data;
}

PostController.$inject = ['post'];

angular.module('flapperNews').controller('PostController', PostController);
