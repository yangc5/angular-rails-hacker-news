function MainController(postsFactory){
  var ctrl = this;
  ctrl.posts = postsFactory.posts;

  ctrl.addPost = function(){
    if(!ctrl.newTitle || ctrl.newTitle === '') { return; }
    ctrl.posts.push({
      title: ctrl.newTitle,
      link: ctrl.newLink,
      upvotes: 0});
    ctrl.newTitle = '';
    ctrl.newLink = '';
  };

  ctrl.incrementUpvotes = function(post){
    post.upvotes += 1;
  }
}

MainController.$inject = ['postsFactory'];

angular.module('flapperNews')
       .controller('MainController', MainController);
