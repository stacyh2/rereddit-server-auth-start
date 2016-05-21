app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  console.log("hey");
  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if ($scope.title === '') { return; }

    posts.create({ 
      title: $scope.title, 
      link: $scope.link
    });

    $scope.title = '';
    $scope.link = '';
  }

  $scope.incrementUpvotes = function(item) {
    posts.upvote(item);
  }
}]);