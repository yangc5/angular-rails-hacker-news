function PostController(post){
  this.data = post;
}

PostController.$inject = ['post'];

angular.module('flapperNews').controller('PostController', PostController);
