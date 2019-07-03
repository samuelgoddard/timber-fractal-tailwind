import Vue from "vue";
import Accordion from "./Accordion";
import '../../../assets/js/lib/font-awesome';

function AccordionWrapper(el) {
  const targetId = el.getAttribute("data-target");
  return new Vue({
    el,
    name: "AccordionWrapper",
    data() {
      return {
        id: el.id,
        htmlClasses: [...el.classList],
        text: el.querySelector('[data-accordion-heading]').innerHTML,
        targetId,
        target: document.querySelector(targetId),
      };
    },
    render(h) {
      return h(Accordion, {
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

export function bindAccordions() {
	return [...document.querySelectorAll("[data-accordion]")].map((el) => AccordionWrapper(el));
}
