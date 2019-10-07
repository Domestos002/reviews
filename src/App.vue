<template lang="pug">
  #app.site-wrapper
    .reviews__head
        .container
            h1.reviews__title Отзывы магазина
            span.btn.btn--block.reviews__add-btn(@click="toggleModal") Написать отзыв
    .reviews__contain
        .container
            .reviews__list(v-infinite-scroll="getReviews" infinite-scroll-disabled="busy" infinite-scroll-distance="limit")
                review-item(v-for='review in reviews' :key='review.id' :review="review")
    modal(:showModal="showModal")
</template>

<style lang="sass" src="./components/base.sass"></style>
<script src="./App.js"></script>
