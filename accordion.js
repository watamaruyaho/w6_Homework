(() => {
  class Accordion {
    constructor(obj) {
      console.log(obj.hookName);
      const $element = document.querySelector(obj.hookName);
      const $trigger = $element.getElementsByTagName(obj.tagName);
      const triLength = $trigger.length;
      let index = 0;
      while (index < triLength) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    //クリックしたら実行される処理
    clickHandler(e) {
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    }
  }

  const fuckingAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
  });

  const dummyAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "span",
  });

  const miniAccordion = new Accordion({
    hookName: "#js-accordion-mini",
    tagName: "p",
  });
  const bigAccordion = new Accordion({
    hookName: "#js-accordion-big",
    tagName: "span",
  });
  const Accord = new Accordion({
    hookName: "#js-accord",
    tagName: "p",
  });
})();
