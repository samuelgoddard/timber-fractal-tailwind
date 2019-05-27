<script>
import scrollIntoView from "smooth-scroll-into-view-if-needed";

// import Icon from "@/components/atoms/icon/Icon";

export default {
  components: {
    // Icon,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: [String, Element],
    },
    target: {
      required: true,
      type: [String, Element],
    },
    hideClass: {
      type: String,
      default: "js:hidden",
    },
    htmlClasses: {
      required: false,
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isExpanded: false,
      shownOnInit: false,
      hashWatcher: () => {},
    };
  },
  computed: {
    expandIcon() {
      return this.isExpanded ? "caret-top" : "caret-bottom";
    },
    ariaLabel() {
      return `${this.text} - expand for more information`;
    },
    toggleLabel() {
      return this.isExpanded ? "Close" : "Show";
    },
    targetId() {
      return this.target.id;
    },
  },
  watch: {
    isExpanded() {
      if (this.isExpanded) {
        this.target.classList.remove(this.hideClass);
      } else {
        this.target.classList.add(this.hideClass);
      }
    },
  },
  created() {
    const initialState = this.getInitialState();
    this.isExpanded = initialState;
    this.shownOnInit = initialState;
    this.bindWatchHash();
    this.$nextTick(() => this.checkHash(window.location.hash));
  },
  beforeDestroy() {
    this.unbindWatchHash();
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    },
    getInitialState() {
      return !this.target.classList.contains(this.hideClass);
    },
    bindWatchHash() {
      window.addEventListener("hashchange", () => this.checkHash(window.location.hash), false);
    },
    unbindWatchHash() {
      window.removeEventListener(this.checkHash);
    },
    checkHash(hash) {
      return hash.substring(1) === this.id ? this.scrollToItemAndExpand() : false;
    },
    scrollToItemAndExpand() {
      this.isExpanded = true;
      scrollIntoView(this.$el, {
        scrollMode: "if-needed",
        block: "nearest",
        inline: "nearest",
      });
    },
  },
};
</script>
