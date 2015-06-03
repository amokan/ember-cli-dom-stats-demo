import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var fruits = ['Bananas', 'Grapes', 'Oranges', 'Apples', 'Kiwi'];

    return Ember.RSVP.hash({
      fruits: fruits
    });
  },

  setupController: function(controller, model) {
    this._super.apply(this, arguments);
    controller.setProperties('model', model);
  }
});
