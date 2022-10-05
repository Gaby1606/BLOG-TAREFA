angular.modele('blog02', []);
            angular.module('blog').controller('Rest', function($scope, $http){
                $http.get('http://api.-fake-blog.herokuapp.com/postagens').sucess(function(data){
                    $scope.publicacoes=data;
                })
            })