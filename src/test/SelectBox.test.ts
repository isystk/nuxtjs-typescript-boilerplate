import { mount, shallowMount } from "@vue/test-utils";
import PulldownInput from "@/components/elements/Input/Pulldown.vue";
import { ISelectBox } from "@/interfaces/api/Form/ISelectBox";

const values: ISelectBox<string>[] = [
  {
    text: "項目1",
    value: "1"
  },
  {
    text: "項目2",
    value: "2"
  },
  {
    text: "項目3",
    value: "3"
  }
];

describe("SelectBox", (): void => {
  test("Vueインスタンスが生成されること", (): void => {
    const wrapper = mount(PulldownInput);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("propsを受け取れること", (): void => {
    const wrapper = shallowMount(PulldownInput, {
      propsData: { values }
    });
    expect(wrapper.findAll(".dropdown-menu a").length).toBe(3);
  });
});
