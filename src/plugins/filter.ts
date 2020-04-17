import Vue from "vue";
import moment from "moment";

Vue.filter("sanitize", function(value) {
  if (!value) {
    return "";
  }
  return value.replace(/¥n/g, "<br/>");
});

Vue.filter("formatDate", function(value, format) {
  const date = moment(value);
  return date.format(format);
});
