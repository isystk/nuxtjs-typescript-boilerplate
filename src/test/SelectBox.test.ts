import { mount, shallowMount } from "@vue/test-utils";
import SelectBox from "@/components/form/SelectBox.vue";
import { ISelectBox } from "@/interfaces/api/Form/ISelectBox";

const values: ISelectBox<string>[] = [
  {
    value: "項目1",
    code: "1"
  },
  {
    value: "項目2",
    code: "2"
  },
  {
    value: "項目3",
    code: "3"
  }
];

describe("SelectBox", (): void => {
  test("Vueインスタンスが生成されること", (): void => {
    const wrapper = mount(SelectBox);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("propsを受け取れること", (): void => {
    const wrapper = shallowMount(SelectBox, {
      propsData: { values }
    });
    expect(wrapper.findAll(".dropdown-menu a").length).toBe(3);
  });
});
