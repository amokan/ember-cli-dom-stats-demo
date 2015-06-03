import Ember from 'ember';

export default Ember.Controller.extend({
  fruitList: ['Apples', 'Oranges'],

  actions: {
    addItem: function(item) {
      this.get('fruitList').pushObject(item);
    },
    removeItem: function(item) {
      this.get('fruitList').removeObject(item);
    }
  }
});
