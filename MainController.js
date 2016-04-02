function MainController(){
  var ctrl = this;
  ctrl.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];

  ctrl.addPost = function(){
    if(!ctrl.newTitle || ctrl.newTitle === '') { return; }
    ctrl.posts.push({title: ctrl.newTitle, upvotes: 0});
    ctrl.newTitle = '';
  }
}

angular.module('flapperNews')
       .controller('MainController', MainController);
