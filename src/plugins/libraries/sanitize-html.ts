import Vue from "vue";
import sanitizeHTML from "sanitize-html";

Vue.prototype.$sanitize = sanitizeHTML;
// span(v-html="$sanitize({someContent})") で利用可能
