import Vue from 'vue'

Vue.filter('sanitize', function (value) {
  if (!value) {
    return '';
  }
  return value.replace(/¥n/g, '<br/>');
})
