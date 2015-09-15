TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/list_form'],
  tagName: 'form',
  events: {
    'click button': 'submit'
  },
  initialize: function(options) {
    // this.board = options.board;
  },
  render: function () {
    // console.log(this.board);
    // console.log(this.model);
    // this.$el.html(this.template({board: this.board, list: this.model}));
    this.$el.html(this.template({list: this.model}));
    return this;
  },
  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var that = this;
    console.log(attrs);
    this.model.save(attrs, {
      success: function (model) {
        // that.collection.add(model);
        Backbone.history.navigate('#/boards/' + model.get('board_id'), {trigger: true});
      }
    });
  }
});
