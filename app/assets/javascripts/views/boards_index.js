TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/boards_index'],
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addBoardSubview);
    this.listenTo(this.collection, 'sync add', this.render);
    this.collection.each(function (board) {
      this.addBoardSubview(board);
    }.bind(this));
  },
  addBoardSubview: function (board) {
    // alert("addboardsubview");
    var boardListItem = new TrelloClone.Views.BoardListItem({model: board});
    this.addSubview("ul.boards-index", boardListItem);
  },
  render: function () {
    // alert('here');
    this.$el.html(this.template({boards: this.collection}));
    this.attachSubviews();
    return this;
  }
});
