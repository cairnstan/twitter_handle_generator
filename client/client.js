var app=angular.module('handleApp', []);

app.controller('TwitterController', ['$scope', '$http', function($scope, $http){
  $scope.message='it works';
$scope.nouns=[];
$scope.adjectives=[];
$scope.handles=[];
$scope.handle = {};


$http.get('/nouns').then(function(response){
$scope.nouns=response.data.list;

  console.log($scope.nouns);
})
$http.get('/adjectives').then(function(response){
  $scope.adjectives=response.data.list;

  console.log($scope.adjectives);
})

$scope.shuffleHandles = function(){
  $scope.handles = [];
  shuffleArray($scope.adjectives);
  shuffleArray($scope.nouns);
  for (var i = 0; i < $scope.adjectives.length; i++){
    $scope.handle = {};
    var twitterHandle = $scope.adjectives[i] + $scope.nouns[i];
    $scope.handle.name = twitterHandle;
    $scope.handle.url = 'http://twitter.com/' + twitterHandle;

    $scope.handles.push($scope.handle);
  }
  console.log($scope.handles);
}


}]);

//Shuffle array function
function shuffleArray(array) {
  var i = 0;
  var j = 0;
  var temp = null;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array [j];
    array[j] = temp;
  }
  return array;
}
