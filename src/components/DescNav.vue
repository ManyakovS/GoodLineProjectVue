<template>
    <div class="desc-navigation">
        <ul class="desc-navigation__list">
            <li class="desc-navigation__item"><a href="#">О комплексе</a></li>
            <li class="desc-navigation__item"><a href="#">Район</a></li>
            <li class="desc-navigation__item"><a href="#">Каталог квартир</a></li>
            <li class="desc-navigation__item"><a href="#">Ипотека</a></li>
            <li class="desc-navigation__item"><router-link to="/contacts">Контакты</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    
.desc-navigation {
    @import "@/styles/variables";
    display: flex;

    &__list {
        display: flex;
    }

    &__item {
        list-style-type: none;
        display: flex;
        align-items: center;
    }
    &__item a {
        margin-right: 40px;
        font-weight: 400;
        font-size: .9rem;
        line-height: 1rem;
        letter-spacing: 0.05rem;
        color: $main-text-color;
        text-decoration: none;
        transition: color 0.6s linear;
    }

    &__item a:hover {
        color: $second-text-color;
    }
}
</style>