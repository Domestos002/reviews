<template lang="pug">
    .modal(:class="{ 'modal--active': showModal }"
        v-show="showModal")
        .modal__dialog
            .modal__head
                icon.modal__close(name="arrow-left")
                p.modal__title Оценить
            .modal__contain
                rating.modal__rating
                form.modal__form.form
                    .form__block
                        input.form__input(placeholder="Укажите ваш никнейм")
                    .form__block
                        textarea.form__textarea(rows="5" placeholder="Расскажите, что можно улучшить?")
                    .form__block
                        button.btn.btn--block Отправить
</template>
<style src="./modal.sass" lang="sass"></style>
<script src="./modal.js"></script>
