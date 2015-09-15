TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: '/api/boards',
  model: TrelloClone.Models.Board,
  getOrFetch: function (id) {
    var model = this.get(id);
    var that = this;
    if (model) {
      model.fetch();
    } else {
      model = new TrelloClone.Models.Board({id: id});
      this.add(model);
      model.fetch({
        error: function (model) {
          that.remove(model);
        }
      });
    }
    return model;
  }
});
