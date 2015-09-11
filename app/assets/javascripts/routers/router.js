TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.boards = options.boards;
    this.$rootEl = options.$rootEl;
    this.listenTo(this.boards, 'sync', this.render);
  },

  routes: {
    '': 'boardsIndex'
  },

  boardsIndex: function () {
    // make a new view
    var view = new TrelloClone.Views.BoardsIndex({collection: this.boards});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
