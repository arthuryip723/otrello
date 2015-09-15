TrelloClone.Views.ListListItem = Backbone.CompositeView.extend({
  template: JST['lists/list_list_item'],
  tagName: 'li',
  initialize: function () {
    // alert("here")
    // console.log(this.model.cards());
    this.listenTo(this.model.cards(), 'add', this.addCardSubview);
    this.listenTo(this.model, 'sync', this.render);
    this.model.cards().each(function (card) {
      this.addCardSubview(card);
    }.bind(this));
  },

  addCardSubview: function (card) {
    // alert("here");
    var cardListItem = new TrelloClone.Views.CardListItem({
      model: card
    });
    this.addSubview("ul.cards-index", cardListItem);
  },

  render: function () {
    this.$el.html(this.template({list: this.model}));
    this.attachSubviews();
    return this;
  }
});
