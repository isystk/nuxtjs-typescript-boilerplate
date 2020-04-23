import { mount, shallowMount } from "@vue/test-utils";
import Logo from "@/components/Logo.vue";

describe("Logo", (): void => {
  test("Vueインスタンスが生成されること", (): void => {
    const wrapper = mount(Logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
