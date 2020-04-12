import { MutationTree, ActionTree, ActionContext } from "vuex";
import { Context as AppContext } from "@nuxt/types";

interface RootState {
}

export const state = (): RootState => ({
})

export const mutations: MutationTree<RootState> = {
}

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit (actionContext: ActionContext<S, R>, appContext: AppContext): void
}

export const actions: Actions<RootState, RootState> = {

  // サーバー起動時に初期データを設定したい場合
  async nuxtServerInit({ commit }, context) {
  }
}

