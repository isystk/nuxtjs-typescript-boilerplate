import Vue from "vue";
import moment from "moment";

moment.locale("ja");
Vue.prototype.moment = moment;
// span(v-html="$moment({someDate}).format('')") で利用可能
