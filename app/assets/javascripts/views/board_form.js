TrelloClone.Views.BoardForm = Backbone.View.extend({
  // template: JST['boards/new_board'],
  template: JST['boards/board_form'],
  tagName: 'form',
  events: {
    'click button': 'submit'
  },
  initialize: function () {
  },
  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  },
  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;
    this.model.save(attrs, {
      success: function (board) {
        that.collection.add(board, {merge: true});
        Backbone.history.navigate("#/boards/" + board.get('id'), {trigger: true});
      }
    });
  }
});
