(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };
    
    // define router
    App.Router = Backbone.Router.extend({
        
        routes: {
            "": "index",
        },
        
        index: function() {
            prepareIndex();
        }
    });
    
    new App.Router();
    Backbone.history.start();
})();