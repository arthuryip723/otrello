TrelloClone.Views.CardListItem = Backbone.View.extend({
  template: JST['cards/card_list_item'],
  tagName: 'li',
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  render: function () {
    this.$el.html(this.template({card: this.model}));
    return this;
  },
});
