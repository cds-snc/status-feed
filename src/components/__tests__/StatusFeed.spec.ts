import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import StatusFeed from "../StatusFeed.vue";

describe("StatusFeed", () => {
  it("renders properly", () => {
    const wrapper = mount(StatusFeed, {
      props: { title: "Card", msg: "Hello Vitest" },
    });
    expect(wrapper.text()).toContain("CardHello Vitest");
  });
});
