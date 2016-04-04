function MainController(posts, postsFactory){
  var ctrl = this;
  ctrl.posts = posts.data;

  ctrl.addPost = function(){
    if(!ctrl.newTitle || ctrl.newTitle === '') { return; }
    postsFactory.create({
      title: ctrl.newTitle,
      link: ctrl.newLink
    }, ctrl);
    ctrl.newTitle = '';
    ctrl.newLink = '';
  };

  ctrl.incrementUpvotes = function(post){
    postsFactory.upvote(post);
  }
}

MainController.$inject = ['posts', 'postsFactory'];

angular.module('flapperNews')
       .controller('MainController', MainController);
