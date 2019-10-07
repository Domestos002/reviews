<template lang="pug">
    .review-item
        p.review-item__title {{ nickname }}
        span.review-item__date {{ date }}
        div.review-item__rating
            icon.review-item__star-icon(
                v-for="index in 5" name="star"
                :class="{ 'review-item__star-icon--active': index <= rating }")
        div.review-item__comment {{ comment }}
</template>

<style lang="sass" src="./review-item.sass"></style>
<script src="./review-item.js"></script>
