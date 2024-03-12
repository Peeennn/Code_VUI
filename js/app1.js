var app = angular.module("myApp", ["ngRoute"]);
window.scroll(0, 0);

const config = function ($routeProvider) {
  $routeProvider
    .when("/index", {
      templateUrl: "views/trangchu.html",
      controller: "trangchuController",
    })
    .when("/themmoi", {
      templateUrl: "views/themmoi.html",
        controller: "themController",
    })
    .when("/capnhat/:id", {
      templateUrl: "views/capnhat.html",
        controller: "capNhatController",
    })
    .otherwise({
      redirectTo: "/index",
    });
};

app.config(config);
