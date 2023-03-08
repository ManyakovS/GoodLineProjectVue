<template>
    <div id="questions" class="questions">
        <div class="container">
            <div class="questions-content">
                <h2 class="page-subtitles">Есть вопросы?</h2>
                <MainForm :style="false" @addForm="addForm"></MainForm>
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
        }
    }
</script>

<style lang="scss" scoped>
.questions {
    margin-bottom: 8vh;
}
    .content-form__elements{
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>