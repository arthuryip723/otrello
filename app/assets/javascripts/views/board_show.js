TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],
  events: {
    'click .delete': 'delete'
  },

  initialize: function () {
    this.listenTo(this.model.lists(), 'add', this.addListSubview);
    this.listenTo(this.model, 'sync', this.render);
    this.model.lists().each(function (list) {
      this.addListSubview(list);
    }.bind(this));
  },

  addListSubview: function (list) {
    var listListItem = new TrelloClone.Views.ListListItem({
      model: list
    });
    this.addSubview("ul.lists-index", listListItem);
  },

  render: function () {
    this.$el.html(this.template({board: this.model}));
    this.attachSubviews();
    return this;
  },

  delete: function () {
    this.model.destroy({
      success: function () {
        Backbone.history.navigate('', {trigger: true});
      }
    });
  }
});
