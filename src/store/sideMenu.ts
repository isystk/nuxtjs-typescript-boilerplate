import {
  Mutation,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import store from "@/store/store"; // デコレータでstoreを指定するためimportする必要あり
import { ISideMenu } from "@/interfaces/api/ISideMenu"; // デコレータでstoreを指定するためimportする必要あり

/**
 * store 用インターフェイス
 */
export interface IState {
  /**
   * 現在選択中のメニュー
   */
  currentMenu: ISideMenu;
}

@Module({ dynamic: true, store, name: "sideMenu", namespaced: true })
class SideMenu extends VuexModule implements IState {
  // state
  currentMenu = {
    group: "",
    item: ""
  };

  // mutation
  // 現在選択中のメニューを設定します。
  @Mutation
  public setCurrentMenu(currentMenu: ISideMenu): void {
    this.currentMenu = currentMenu;
  }
}

export const sideMenuModule = getModule(SideMenu);
