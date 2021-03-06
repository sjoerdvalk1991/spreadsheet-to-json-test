var app = angular.module('plunker', []);

app.controller('SuperCtrl', ['$scope', '$http', function($scope,$http) {
    var url = 'https://spreadsheets.google.com/feeds/list/1lZWwacSVxTD_ciOsuNsrzeMTNAl0Dj8SOrbaMqPKM7U/od6/public/values?alt=json'
    var parse = function(entry) {
      console.log(entry);
      var category = entry['gsx$category']['$t'];
      var description = entry['gsx$description']['$t'];
      var title = entry['gsx$title']['$t'];
      return {
        category: category,
        description: description,
        title: title,
        url: url
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