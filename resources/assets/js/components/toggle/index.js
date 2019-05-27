import Vue from "vue";
import Toggle from "./Toggle";

function Toggler(el) {
  const targetId = el.getAttribute("data-target");
  return new Vue({
    el,
    name: "ToggleWrapper",
    data() {
      return {
        id: el.id,
        htmlClasses: [...el.classList],
        target: document.querySelector(targetId),
        targetId,
        text: el.innerHTML,
      };
    },
    render(h) {
      return h(Toggle, {
        props: {
          id: this.id,
          target: this.target,
          targetId: this.targetId,
          text: this.text,
        },
      });
    },
  });
}

export function bindToggles() {
  return [...document.querySelectorAll("[data-toggle]")].map((el) => Toggler(el));
}
