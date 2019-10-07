import icon from './../../components/icon/icon.vue'
import rating from './../../components/rating/rating.vue'

export default ({
  name: 'modal',
  data() {
    return {
      body: document.querySelector('body'),
    };
  },

  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    icon, rating
  },

  methods: {
    closeModal: function() {
      this.$emit('closeModal');
    },
  },

  computed: {
    scrollbarWidth: () => {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      outer.style.msOverflowStyle = 'scrollbar';
      document.body.appendChild(outer);

      const inner = document.createElement('div');
      outer.appendChild(inner);

      const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
      outer.parentNode.removeChild(outer);

      return scrollbarWidth;
    },
  },

  watch: {
    showModal(val) {
      if (val) {
        this.body.classList.add('body--modal');
        this.body.style.paddingRight = `${this.scrollbarWidth}px`;
      } else {
        this.body.classList.remove('body--modal');
        this.body.style.paddingRight = '';
      }
    },
  },
});
