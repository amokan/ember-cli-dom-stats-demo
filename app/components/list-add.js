import Ember from 'ember';

export default Ember.Component.extend({
  selectedValue: null,
  actions: {
    addItem: function() {
      this.sendAction('addItem', this.get('selectedValue'));
    }
  }
});
