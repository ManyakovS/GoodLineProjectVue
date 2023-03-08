<template>
    <div id="cta" class="cta">
        <div class="container">
            <div class="cta-content">
                <h2 id="cta-subtitle" class="page-subtitles">Хотите посмотреть?</h2>

                <div class="cta-content-group">
                    <p>Оставьте заявку на покупку недвижимости</p>
                        <main-form  
                        @addForm="addForm"
                        :style="true">></main-form>
                        
                        
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainForm from '@/components/UI/MainForm.vue'
    export default {
        components: { MainForm},

        methods: {
            addForm(form) {
                this.$emit('addForm', form)
            }
    },
    }
</script>

<style lang="scss" scoped>
.cta {
    background-image: url(../image/cta-bg.png);
    background-repeat: no-repeat;
    background-size: cover;

    #cta-subtitle {
        padding-top: 8vh;
    } 

        
    .cta-content-group{
        grid-template-columns: 1fr 1.3fr;
        gap: 10%;
        padding-bottom: 6vh;
        display: grid;

        form {
            grid-column: 2/3;
        }

        p {
            width: 100%;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
        
            color: #FFFFFF;
            opacity: .5;
        }
    }
}

@media (max-width: 1060px) {
    #cta-subtitle {
        padding-top: 1vh;
    }
    .cta-content-group {
        grid-template-columns: 1fr !important;
        gap: 0 !important;
        padding-bottom: 0;
        place-items: center;
        

        form {
            grid-column: 1/2 !important;
        }
        p {
            grid-column: 1/2 !important;
            width: 100% !important;
            text-align: center;
        }
    }
}

    

    
    

</style>