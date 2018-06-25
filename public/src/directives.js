app
  .value("FieldTypes", {
    text: ["Text", "should be text"],
    email: ["Email", "should be an email address"],
    number: ["Number", "should be an number"],
    date: ["Date", "should be an date"],
    datetime: ["Datetime", "should be an datetime"],
    time: ["Time", "should be an time"],
    month: ["Month", "should be an month"],
    week: ["Week", "should be an week"],
    url: ["URL", "should be an URL"],
    tel: ["Phone Number", "should be an phone number"],
    color: ["Color", "should be an color"]
  })
  .directive("formField", function($timeout, FieldTypes) {
    return {    
      restrict: "EA",
      templateUrl: "views/form-field.html",
      replace: true,
      scope: {
        record: "=",
        field: "@",
        live: "@",
        required: "@"
      },
      link: function($scope, element, attr) {
        $scope.$on("record:invalid", function() {
          $scope[$scope.field].$setDirty();
        });
        $scope.types = FieldTypes;
        $scope.remove = function(field) {
          delete $scope.record[field];
          $scope.blurUpdate();
        };

        $scope.blurUpdate = function() {
          if ($scope.live !== "false") {
            $scope.record.$update(function(updatedRecord) {
              $scope.record = updatedRecord;
            });
          }
        };

        let saveTimeout;
        $scope.update = function() {
          $timeout.cancel(saveTimeout);
          saveTimeout = $timeout($scope.blurUpdate, 1000);
        };
      }
    };
  });
