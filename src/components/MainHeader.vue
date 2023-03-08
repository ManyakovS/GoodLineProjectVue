<template>
    <header class="header" id="header">
            <a href="/" class="header__icon">
                <span class="header__img"/>
                <p class="header__title">ЖИЛОЙ КОМПЛЕКС</p>
            </a>

            <desc-nav v-if="!$isMobile()"></desc-nav>
            <mobile-nav v-else></mobile-nav>
    </header>
</template>

<script>
import DescNav from '@/components/DescNav.vue'
import MobileNav from '@/components/MobileNav.vue'
    export default {
  components: { DescNav, MobileNav },
        
    }
</script>

<style lang="scss" scoped>
$main-text-color: #ffffff80;
    
.header {
    padding-top: 30px;

    display: flex;
    justify-content: space-between;

    &__icon {
        cursor: pointer;
        max-width: 140px;
        z-index: 5;
        text-decoration: none;
    }

    &__img {
            display: block;
            background-repeat: no-repeat;
            width: 160px;
            height: 32px;
            margin-bottom: 2vh;
            background-position-x: center;
            background-size: contain;
            background-image: url('../image/first-screen/HouseVOP.svg');
    }

    &__title {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.12em;
        color: $main-text-color;
    }
}
</style>