angular.module('d3', []).factory('d3Factory',
    function ($document, $rootScope, $window, $q) {

    var d = $q.defer();

        var scriptTag = $document[0].createElement('script');
        scriptTag.async = true;
        script.type = 'text/javascript';
        script.src = '../../../vendor/d3/d3.js';
        script.onload = function () {
            $rootScope.$apply(function(){d.resolve($window.d3)});
        };

        var b  = $document[0].getElementByTagName('body')[0];
        b.appendChild(scriptTag);

        return {
            d3: function () {
                return  d.promise;
            }
        }

    });


//Value
//Factory {}
//Service  new
//Provider


//API модулей