import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll'
import reviewItem from './components/review-item/review-item.vue'
import modal from './components/modal/modal.vue'

export default {
    name: 'app',
    directives: {infiniteScroll},
    data() {
        return {
            reviews: [],
            limit: 10,
            busy: false,
            showModal: false
        };
    },

    mounted() {
      this.getReviews()
    },

    components: {
        reviewItem, modal
    },

    methods: {
        getReviews() {
            if(!this.hasNextReview){
                return false
            }
            this.busy = true;
            return axios.get(`${this.$store.state.apiUrl}/reviews?_start=${this.reviews.length}&_limit=${this.limit}`, {
                crossDomain: true,
            }).then(response => {
                this.reviews = [...this.reviews, ...response.data];
                this.busy = false;
            })
            .catch((error) => {
                alert(error);
            });
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
    },

    computed: {
        hasNextReview: function () {
            return this.reviews.length > 0 ? this.reviews[this.reviews.length - 1].nextLink : true;
        },
    },
};
