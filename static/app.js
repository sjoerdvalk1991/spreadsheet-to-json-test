var app = angular.module('plunker', []);

app.controller('SuperCtrl', ['$scope', '$http', function($scope,$http) {
    var totalScore = 0;
    var spreadsheetID = '1yjOuR_qKvU7cHgM2gJE7vHuHHgq1bRrNuOeczVjgjoY';
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
    var parse = function(entry) {
      console.log(entry);
      var name = entry['gsx$naam']['$t'];
      var rules = entry['gsx$regelsvooreenkanbetalen']['$t'];
      var stripes = entry['gsx$aantal']['$t'];
      var number = stripes.length;
      $scope.totalScore = $scope.totalScore + number;
      console.log($scope.totalScore);
      return {
        name: name,
        number: number,
        rules: rules
      };
    }
    $http.get(url)
    .success(function(response) {
      var entries = response['feed']['entry'];
      $scope.parsedEntries = [];
      for (key in entries) {
        var content = entries[key];
        $scope.parsedEntries.push(parse(content));
      }
    });
}]);