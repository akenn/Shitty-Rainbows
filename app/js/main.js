'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    crafty: {
      exports: 'Crafty'
    },
  },
  paths: {
    templates: '../templates',
    jquery: '../libs/jquery.min',
    backbone: '../libs/backbone-min',
    underscore: '../libs/underscore-min',
    crafty: '../libs/crafty-min',
    tpl: '../libs/requirejs-tpl'
  }
});

require(['backbone', 'crafty', 'jquery', 'router'], function (Backbone, Crafty, $, Router) {
  $(document).ready(function() {

    // create namespaces
    window.BGJ = window.BGJ || {};
    BGJ.dispatcher = BGJ.dispatcher || {};
    window.Crafty = window.Crafty || Crafty;

    // create a global dispatcher of events
    _.extend(BGJ.dispatcher, Backbone.Events);

    // create the main app router
    BGJ.router = new Router();
    Backbone.history.start();

    //todo: needs to be moved into an init function for something. Should be an extension of Crafty but maybe the router?
    $(window).keypress(function(ev){
      ev.preventDefault();
    });

    $(window).keydown(function(ev){
      ev.preventDefault();
    });
  });
});
