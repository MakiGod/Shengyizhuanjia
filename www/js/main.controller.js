/**
 * Created by Administrator on 2017/9/20.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('MainCtrl',['$scope','$localStorageService','$state',
      function ($scope,$localStorageService,$state) {
        var APP_KEY='APP';
        var app=localStorageService.get(APP_KEY,{
          version:'1.0.0',
          run:false
        });
      }
    ]);
})();
