// import { shallowMount } from "@vue/test-utils";
// import CheckoutForm from "../src/components/CheckoutForm.vue";

// const factory = (values = {}) => {
//   return shallowMount(CheckoutForm, {
//     data() {
//       return {
//         ...values
//       };
//     }
//   });
// };

// describe("CheckoutForm", () => {
//   it("renders an error if cardholders_name is less than 3", () => {
//     const wrapper = factory({ cardholders_name: "" });

//     expect(wrapper.find(".form").text()).toBeTruthy("");
//   });

//   it("renders an error if card_type is not entered", () => {
//     const wrapper = factory({ card_type: "" });

//     expect(wrapper.find(".form").exists()).toBeTruthy();
//   });

//   it("renders an error if length is not 16", () => {
//     const wrapper = factory({ card_number: " ".repeat(7) });

//     expect(wrapper.find(".form").exists()).toBeTruthy();
//   });

//   it("renders an error if month is not entered", () => {
//     const wrapper = factory({ month: "" });

//     expect(wrapper.find(".form").exists()).toBeTruthy();
//   });

//   it("renders an error if year is not entered", () => {
//     const wrapper = factory({ year: "" });

//     expect(wrapper.find(".form").exists()).toBeTruthy();
//   });

//   it("renders an error if cvc is not entered", () => {
//     const wrapper = factory({ cvc: "" });

//     expect(wrapper.find(".form").exists()).toBeTruthy();
//   });
// });

// // cardholders_name: "",
// //       card_type: "",
// //       card_number: "",
// //       month: "",
// //       year: "",
// //       cvc: "",

import { shallowMount } from "@vue/test-utils";
import Component from "../src/components/HelloWorld.vue";

describe("Component", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
