angular.module('app')

.controller('myController', function($scope, bookService){
$scope.authors = [];
for(i = 0; i < authors.length; ++i){
  var promise = bookService.getBook(authors[i]);
  promise.then(function(response){
    $scope.authors.push(response);
    console.log($scope.authors);
  })
}//end of for loop

}).directive('redNavBar', function() {
  return {
    templateUrl: 'views/redNavBar.html'
  }; //end of control
})

var authors = ['243930', '3961', '1194', '13199', '3311222', '80801', '7956', '2636', '3389', '14424', '192696',
               '1113469', '432', '1466', '1938', '3706', '239579', '3137322', '112082', '3032451', '776', '128382',
               '1265', '5031025', '5144', '7084', '670307', '795282', '72401', '319571', '221', '54393', '41856',
               '3371', '608087', '256', '1847', '116379', '8365972'];
