<template>
    <div class="page-container">
        <div class="container">
            <MainHeader class="contacts__header"></MainHeader>
        </div>
        <main class="main">
            <div class="container">
                <div class="slider_container">

                        <div class="images" v-bind="img" v-if="!$isMobile()">
                            <div class="" v-for="p in img.filter(i => i.isBig === true)" :key="p.id">
                                 <img class="big-image" :src="require('@/image/appart/house1/' + p.path + '.jpg')">
                            </div>
                            <div class="small-image__container" 
                            >

                                <span class="before" @click="SlideUp"><ion-icon name="arrow-up-outline"></ion-icon></span>
                                <span class="after"  @click="SlideDown"><ion-icon name="arrow-down-outline"></ion-icon></span>
                                <img v-for="p in img.slice(slideU, slideD)" 
                                :key="p.id" class="small-image" 
                                :src="require('@/image/appart/house1/' + p.path + '.jpg')"
                                @click="Swipe(p)"
                                v-bind:class="{ opacity: p.isBig,  image_anime : SlideAnimate = true && p.isBig === false}"
                                >
                            </div>
                        </div>

                        <div class="images-mobile" v-bind="img" v-else>
                            <div class="big-image_container" v-for="p in img.filter(i => i.isBig === true)" :key="p.id">
                                <img class="big-image" :src="require('@/image/appart/house1/' + p.path + '.jpg')">
                            </div>
                            <div class="small-image__container"
                            v-touch:swipe.left="SlideDown"
                            v-touch:swipe.right="SlideUp"
                            >
                                <img v-for="p in img.slice(slideU, slideD)" 
                                :key="p.id" class="small-image" 
                                :src="require('@/image/appart/house1/' + p.path + '.jpg')"
                                @click="Swipe(p)"
                                v-bind:class="{ opacity: p.isBig }">
                            </div>
                        </div>
                </div>
            </div>
        </main>
        <MainFooter class="footer"></MainFooter>
    </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue"
import MainFooter from "@/components/MainFooter.vue"

import {mapState} from 'vuex'

export default {
    data() {
        return {
            appartId: Number,
            appart: Object,
            img: [],


            slideU: 0,
            slideD: 3,
            SlideAnimate:'',
        }
    },
    components: {
        MainHeader, MainFooter
    },
    computed: {
           ...mapState({
                appartaments: state => state.main.appartaments
           })
        },
    mounted() {
        this.appart = this.appartaments.filter(a => a.id === Number(this.$route.params.id))
        this.link = (this.appart[0].appartImg)
        .forEach(el => {
            this.img.push(el[0])
        })


    },
    methods: 
    {
       Swipe(el) {
        if(el.isBig === true)
            return;
        this.img.forEach((i) => {
            if(i.isBig === true)
                i.isBig = false
        })
        /* el.isBig = true; */
        this.img.forEach((i) => {
            if(i.id === el.id)
                i.isBig = true
        })
        

       },

       SlideUp() {
        this.SlideAnimate = false
        if(this.slideU > 0){
            this.slideU -= 1, 
            this.slideD -= 1
            this.SlideAnimate = true
        }
        else
            this.img.unshift(this.img.pop()) 
            this.SlideAnimate = true
            
        
       },
       SlideDown() {
        this.SlideAnimate = false
        if(this.img.length > this.slideD){
            this.slideU += 1, 
            this.slideD += 1
            this.SlideAnimate = true
        }
        else
            this.img.push(this.img.shift()) 
            this.SlideAnimate = true
        
        },
    }
}

</script>
    
<style lang="scss" scoped>
@import "@/styles/variables";
$animSpd: 750 * 1ms;
.opacity{
    animation: opacity_animate .4s ease-out;
    opacity: .5;
    
}

@keyframes opacity_animate {
    0% {
        opacity: 0;
    }
    100% {
        opacity: .5;
    }
}

main {
    margin-bottom: 6vh;
}
    .page-container {
        min-height: 100vh;
    }

    .slider_container {
        margin: 6vh 20px 0 20px;
    }

    .images {
        max-width: 1060px;
        width: 100%;
        display: grid;
        grid-template-columns: 2.8fr 1fr;
    }
    .images {
        -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
           -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
      }


        .big-image {
            grid-column: 1/2;
            animation: big-image-animate .9s ease-out ;
            width: 100%;
            height: 60vh;

            border: 4px solid black;


        }
        @keyframes big-image-animate {
            0% {
                opacity: .3;
            }
            100% {
                opacity: 1;
            }
            
        }

        .small-image__container {
            position: relative;
            grid-column: 2/3;
            width: 100%;
            display: flex;
            flex-direction: column;

            img {
                width: 100%;
                height: 20vh;

                border: 2px solid black;
            }

            .image_anime {
                animation: img_animate .6s ease-out;
            }

            @keyframes img_animate {
                0% {
                    opacity: .1;
                }
                100% {
                    opacity: 1;
                }
            }

            .before,
            .after {
                padding-right: .5px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2.1rem;
                cursor: pointer;
                height: 50px;
                width: 50px;
                border-radius: 50%;
                background-color: #fff;
                position: absolute;
                left: 40%;
                z-index: 10;

                transition: all .5s ease-in;
            }
            .before{
                top: -20px;
            }
            .after{
                bottom: -10px;
            }
            .before:hover,
            .after:hover {
                color: #fff;
                background-color: $background-color;
            }

        }
    

    @media (max-width: 900px) {

        .images-mobile {
            display: grid;
            grid-template-rows: 2.5fr 1fr !important;

            .big-image_container {
                max-height: 50vh;
            }

            .big-image {
                grid-column: 1/3 !important;
                width: 90vw;
                max-height: 50vh;
                object-fit: fill;
                border: 3px solid black;

                animation: big-image-animate .8s ease-out ;
            }
            @keyframes big-image-animate {
                0% {
                    opacity: .3;
                }
                100% {
                    opacity: 1;
                }
                
            }
            .small-image__container-active {
                animation: move-left backwards .5s ease;
            }
            .small-image__container-animation-none {
                animation: none;
            }

            .small-image__container {
                grid-column: 1/3;
                grid-row: 2/3;
                flex-direction: row;
                width: 90vw;
                

                img {
                    width: 30vw;
                    height: 10vh;
                    object-fit: fill;
                }
                @keyframes move-left {
                    0%{
                        transform: translateX(-15%)
                    }
                    100%{
                        transform: translateX(0%)
                    }
                }

                
                .before,
                .after{
                    height: 40px;
                    width: 40px;
                    font-size: 1.8rem;
                    top: 12vh;
                    left: none !important;
                }


                .before{
                    left: 27%;
                    transform: rotate(-90deg);
                }
                .after{
                    bottom: none;
                    left: 62%;
                    
                    transform: rotate(270deg);
                }
            }
        }

    }

    @media (max-width: 450px) {

        .big-image_container{ 
            max-height: 38vh !important;
        }
        .big-image {
            max-height: 38vh !important; 
        }

    }

</style>