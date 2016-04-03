function MainController(posts){
  var ctrl = this;
  ctrl.posts = posts.data;

  ctrl.addPost = function(){
    if(!ctrl.newTitle || ctrl.newTitle === '') { return; }
    ctrl.posts.push({
      title: ctrl.newTitle,
      link: ctrl.newLink,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    ctrl.newTitle = '';
    ctrl.newLink = '';
  };

  ctrl.incrementUpvotes = function(post){
    post.upvotes += 1;
  }
}

MainController.$inject = ['posts'];

angular.module('flapperNews')
       .controller('MainController', MainController);
