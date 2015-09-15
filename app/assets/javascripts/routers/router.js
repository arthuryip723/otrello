TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.boards = options.boards;
    this.$rootEl = options.$rootEl;
    this.listenTo(this.boards, 'sync', this.render);
  },

  routes: {
    '': 'boardsIndex',
    'boards/new': 'newBoard',
    'boards/:id': 'show',
    'boards/:id/lists/new': 'newList'
  },

  boardsIndex: function () {
    this.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({collection: this.boards});
    this._swapView(view);
  },

  newBoard: function () {
    // alert("here");
    var board = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.BoardForm({model: board, collection: this.boards});
    this._swapView(view);
  },

  show: function (id) {
    var board = this.boards.getOrFetch(id);
    // debugger;
    // console.log(board);
    // console.log(board.lists());
    var view = new TrelloClone.Views.BoardShow({model: board});
    this._swapView(view);
  },

  newList: function(id) {
    var board = this.boards.getOrFetch(id);
    var list = new TrelloClone.Models.List({board_id: id});
    var view = new TrelloClone.Views.ListForm({collection: board.lists(), model: list});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
