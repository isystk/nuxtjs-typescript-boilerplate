import Vue from "vue";
import Vuex from "vuex";
import { ICounterState } from "../types";

Vue.use(Vuex);

export interface State {
  counter: ICounterState;
}
export default new Vuex.Store<State>({});
