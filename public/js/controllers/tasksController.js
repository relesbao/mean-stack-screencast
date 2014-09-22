app.controller('tasksController', ['$scope', '$resource',
    function($scope, $resource) {
        
        var Task = $resource('/api/tasks')
        
        Task.query(function(results){
            $scope.tasks = results;
            $scope.tasksCount = $scope.tasks.length;
        })
        
        $scope.saveTask = function(){
            var task = new Task();
            task.description = $scope.taskDescription;
            task.$save(function(result){
                $scope.tasks.push(result);
                $scope.tasksCount = $scope.tasks.length;
            });
            $scope.taskDescription = '';
        }
    }
])