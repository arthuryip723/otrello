TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/boards_index'],
  render: function () {
    this.$el.html(this.template({boards: this.collection}));
    return this;
  }
});
