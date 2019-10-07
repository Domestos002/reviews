import icon from './../../components/icon/icon.vue'

export default ({
    name: "review-item",

    props: {
        review: {
            type: Object,
            default: {},
        }
    },

    data () {
        return {
        }
    },

    computed: {
        nickname() {
            return this.review.nickname
        },
        comment() {
            return this.review.comment
        },
        date() {
            return this.timeConverter(this.review.time)
        },
        rating() {
            return this.review.rating
        }
    },

    components: {
        icon
    },

    methods: {
        timeConverter(UNIX_timestamp) {
            const a = new Date(UNIX_timestamp * 1000);
            const date = a.getFullYear()+'-'+(a.getMonth()+1)+'-'+a.getDate();
            return date
        }
    }
});
