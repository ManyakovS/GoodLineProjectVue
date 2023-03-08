<template>
    <div class="page-container">
        <div class="form_reaction"  
        v-if="form.isVisible === true" @click="form.isVisible = undefined"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent>
            <div class="form_reaction__message-positive" 
                v-bind:class="{ form_reaction__message_animate: form.isVisible }">
                <strong>Заявка успешно отправлена!</strong>

                <p>{{form.name}}, мы с вами свяжемся в ближайшее время</p>


            </div>
        </div>

        <div class="form_reaction"  v-if="form.isVisible === false" @click="form.isVisible = undefined">
            <div class="form_reaction__message-negative" 
                v-bind:class="{ form_reaction__message_animate: form.isVisible === false }">
                <p>Введен неверный номер телефона!</p>


            </div>
        </div>

        <div id="first-screen" class="first-screen">
            <div class="container">
                <div class="first-screen-content">
                    <MainHeader></MainHeader>

                    <MainPageDesc
                    :description="description">
                    </MainPageDesc>
                </div>
            </div>
        </div>

        <main>
            <MainTestimonial
            :testimonials="testimonials">
            </MainTestimonial>
    
           <MainAppartaments
           :appartaments="appartaments"></MainAppartaments>
    
           <CTA
           @addForm="addForm"></CTA>
    
            <div id="video" class="video">
                <div class="container">
                    <div class="video-content">
                        <video src="../video/video-main-page.mp4" controls poster="../image/video-main-page-poster.png"></video>
                    </div>
                </div>
            </div>

            <yandex-map :settings="settings" :coords="[55.342652, 86.075466]" :zoom="16" >
                <ymap-marker 
                :coords="[55.342652, 86.075466]"
                marker-id="123" 
                hint-content="HouseVOP" 
              />
            </yandex-map>
            
            <MainQuestions v-if="!$isMobile()" @addForm="addForm"></MainQuestions>
            
            
        </main>
        <main-footer></main-footer>
    </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import MainHeader from '@/components/MainHeader.vue'
import MainPageDesc from '@/components/MainPageDesc.vue';
import MainTestimonial from '@/components/MainTestimonial.vue';
import MainAppartaments from '@/components/MainAppartaments.vue'
import CTA from '@/components/CTA.vue'
import MainQuestions from '@/components/MainQuestions.vue';
import MainFooter from '@/components/MainFooter.vue';

import {mapState} from 'vuex'
    export default {
  components: { MainHeader, MainPageDesc, MainTestimonial, MainAppartaments ,CTA, MainQuestions, MainFooter,yandexMap, ymapMarker },
        data(){ 
        return {
            description:{
                title: "Жилой комплекс в историческом центре",
                adress: "Наб. реки Фонтанки 10-15",
                phone: "8 (812) 123-45-67",
            },
            testimonials: {
                bench: "Рядом исторические парки и скверы",
                building: "Полностью обустроенный",
                fountain: "10 фонтанов на территории",
                bicycle: "6 км велодорожек"
            },
            form: {
                    name: '',
                    phone: '',
                    isVisible: undefined,
                },
            settings: {
                apiKey: 'e55eed53-a8d5-452a-9e4b-41dab29ae2ba',
                lang: 'ru_RU',
                coordorder: 'latlong',
                enterprise: false,
                version: '2.1',
                coords: [55.3456, 86.1682]
                }
        }
    },
    computed: {
           ...mapState({
                appartaments: state => state.main.appartaments,
           })
        },
        methods: {
            addForm(form) {
                this.form = form;
            }
        }
}
</script>

<style lang="scss">
@import "@/styles/variables";
.ymap-container {
    width: 60vw;
    height: 80vh;
    margin: 0 auto;
}

.page-container {
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1920px;
}
.container {
    margin: 0 auto;
    max-width: 1060px;   
    height: 100%;
   }
.first-screen-content, .testimonials-content, 
.appartaments-content, .cta-content, 
.video-content, .questions-content, 
.footer-content, .contacts-content,
#contacts-header, .cental-office-desc, 
.header {
    margin: 0 20px;
}

.form_reaction {
    position: fixed;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    animation: form_reaction-opacity 5s linear;

    @keyframes form_reaction-opacity {
        0% {
            background-color: rgba(0, 0, 0, 0);
            z-index: 100;
        }
        10% {
            background-color: rgba(0, 0, 0, .6);
            z-index: 100;
        }
        90% {
            background-color: rgba(0, 0, 0, .6);
            z-index: 100;
        }
        100% {
            background-color: rgba(0, 0, 0, 0);
            z-index: 0;
        }
      }

    .form_reaction__message-positive, .form_reaction__message-negative {
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        top: -20%;
        left: calc(50% - 24vw/2);
        width: 24vw;
        height: 11vh;
        background-color: #ffffff;
        border-radius: 15px;

        font-size: 1.1rem;

        strong {
            display: block;
            width: 100%;
            padding-top: .5vh;
            text-align: center;
        }
    
        p {
            padding: .5vh 1vw .5vh 1vw;
        }
    }
    .form_reaction__message-negative {
        align-items: center;
        border-radius: 15px;
        height: 7vh;
        left: calc(50% - 26vw/2);
    }

    .form_reaction__message_animate {
        animation: 
        form_reaction__message_animate-start 4s linear .1s,
        form_reaction__message_animate-end .8s ease-out 4s;
    }

    @keyframes form_reaction__message_animate-start {
        0% {
            top: -20%;
        }
        16% {
            top: calc(20% - 20vh/2);
        }
        100% {
            top: calc(20% - 20vh/2);
        }
      }
      @keyframes form_reaction__message_animate-end {
        from {
            top: calc(20% - 20vh/2);
        }
        to {
            top: -20%;
        }
      }
}

.page-subtitles {
    font-family: 'Playfair Display';
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 4rem;
    color: $main-gold-color;
}
.first-screen {
    height: 100vh;
    background-image: url(../image/first-screen/first-page-bg.png);
    background-repeat: no-repeat;
    background-size: cover
}
.video-content {
    display: flex;
    justify-content: center;

    video {
        padding-top: 8vh;
        padding-bottom: 8vh;
        max-width: 50%;
    }
}

.map {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 8vh;
}

@media (max-width: 1060px) {
    .ymap-container {
        width: 80vw;
        height: 35vh;
        margin: 0 auto;
    }
    label {
        font-size: 0.8125rem;
    }
    .page-subtitles {
        text-align: center;
    }
    .video-content video {
        max-width: 90%;
        padding: 4vh 0;
    }
}
    @media (max-width: 800px) {
        .form_reaction__message-positive, .form_reaction__message-negative {
            width: 90vw !important;
            left: calc(50% - 90vw/2) !important;
        }

        .page-subtitles {
            font-size: 1.85rem;
        }

    }

</style>