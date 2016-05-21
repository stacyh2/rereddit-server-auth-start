app.controller('NavCtrl', ['$scope', 'auth', function($scope, auth){
  console.log("hello");
  $scope.isLoggedIn = auth.isLoggedIn;
  console.log()
  $scope.currentUser = auth.currentUser;
  $scope.logOut = auth.logOut;
}]);