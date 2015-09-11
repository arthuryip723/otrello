window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert("Hello from Backbone!");
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();
    // router
    new TrelloClone.Routers.Router({boards: boards, $rootEl: $('#main')})
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
