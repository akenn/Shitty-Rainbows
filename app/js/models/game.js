define(['jquery', 'backbone'], function($, Backbone) {
    $(window).bind({
        keypress: function(e) {
            if ([32,37,38,39,40].indexOf(e.which) > -1)
                e.preventDefault();
        },
        keydown: function(e) {
            if ([32,37,38,39,40].indexOf(e.which) > -1)
                e.preventDefault();
        }
    });
    
    return Backbone.Model.extend({
        defaults: {
            width: 800,
            height: 600,
            bg: 'url("assets/img/starfield.png")'
        }
    });
});
