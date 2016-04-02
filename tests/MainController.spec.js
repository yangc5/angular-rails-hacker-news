describe('MainController', function() {
  var $controller;

  beforeEach(module('flapperNews'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should be able to add valid posts', function() {
    var $scope = {};
    $controller('MainController as vm', {$scope: $scope});

    var postsCount = $scope.vm.posts.length;
    $scope.vm.newTitle="valid title";
    $scope.vm.addPost();
    expect($scope.vm.posts.length).toBe(postsCount+1);
  });

  it('should not be adding invalid posts', function(){
    var $scope = {};
    $controller('MainController as vm', {$scope: $scope});

    var postsCount = $scope.vm.posts.length;
    $scope.vm.newTitle="";
    $scope.vm.addPost();
    expect($scope.vm.posts.length).toBe(postsCount);

    $scope.vm.newTitle=null;
    $scope.vm.addPost();
    expect($scope.vm.posts.length).toBe(postsCount);
  });
})
