/**
 * @file lodash をグローバルにセットする
 */
// https://ja.nuxtjs.org/guide/plugins

import { Context } from "@nuxt/vue-app";
import * as _ from "lodash";

// @ts-ignore
export default (context: Context, inject: any): void => {
  inject("_", _);
};
