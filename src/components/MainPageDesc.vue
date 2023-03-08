<template>
    <div class="first-screen-desc">
            <h1>{{description.title}}</h1>

            <img class="first-screen-desc__img" src="../image/first-screen/mouse.png" alt="mouse icon">

            <div class="first-screen-desc__contacts">

                <div class="first-screen-desc__element first-screen-contacts__adress">
                    <img src="../image/first-screen/place-holder.png" alt="place holder">
                    <p>{{description.adress}}</p>
                </div>

                <div class="first-screen-desc__element first-screen-contacts__number">
                    <img src="../image/first-screen/phone.png" alt="phone">
                    <p><a href="tel:88121234567">{{description.phone}}</a></p>
                </div>
                
            </div>
        </div>
</template>

<script>
export default {
  props: {
    description: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
    
.first-screen-desc {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 30vh;

    a {
        text-decoration: none;
        color: $second-text-color;
        transition: color .5s linear;
        justify-self: center;
    }

    a:hover {
        color: #ffffffcb;
    }

    h1 {    
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 3rem;
        line-height: 4rem;
        color: $main-gold-color;
        max-width: 540px;
        margin: 0 auto;
    }

    &__img {
        padding-top: 5.2vh;
        max-width: 40px;
        object-fit: cover;
    }

    &__contacts {
        display: flex;
        justify-content: space-between;
        margin-top: 24vh;
        width: 50%;
    }

    &__element {
        display: flex;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.3125rem;
        color: $second-text-color;
    
        h1 {
            font-size: 1.9rem;
            line-height: 2.6rem;
        }

        img {
            object-fit: contain;
            margin-right: 1.5vw;
        }
    }
}

@media (max-width: 1060px) {
    .first-screen-desc {
        h1 {
            font-size: 2.5rem;
            line-height: 3rem;
        }
        &__contacts {
            flex-direction: column;
            align-items: center;
        }
        &__element {
            width: 80vw;
            font-size: .95rem;
            padding-top: 2vh;
            display: flex;
            justify-content: center;
        }
    }
}
@media (max-width: 800px) {
    .first-screen-desc {
        margin-top: 25vh;

        h1 {
            font-size: 1.9rem;
            line-height: 2.6rem;
        }
    }
}

@media (max-width: 300px) {
    .first-screen-desc__contacts {
        margin-top: 10vh !important;
    }
}

</style>