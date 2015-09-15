TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',
  cards: function () {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Lists([], { list: this });
    }
    return this._cards;
  },
  parse: function (response) {
    // alert('parse');
    if (response.cards) {
      this.cards().set(response.cards);
      delete response.cards;
    }
    return response;
  }
});
