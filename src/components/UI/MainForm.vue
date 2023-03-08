<template>
        <form action="#" class="content-form">
            <div class="content-form__elements two-v-two" v-if="style === true">
                <input v-model="form.name" type="text" name="client__name" :placeholder="placeholderName"  
                v-bind:class="{ error: form.isVisible === false }">

                <input v-model="form.phone" type="tel" name="phone-number" :placeholder="placeholderPhone" >

                <label for="cta-content-btn">
                    Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
                </label>

                <button id="cta-content-btn" @click.prevent="newForm">
                Посмотреть район
            </button>
            
            </div>

            <div class="content-form__elements one-v-four" v-else>
                <label for="cta-content-btn">
                    Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
                </label>

                <input v-model="form.name" type="text" name="client__name" :placeholder="placeholderName">

                <input v-model="form.phone" type="tel" name="phone-number" :placeholder="placeholderPhone" >


                <button id="cta-content-btn" @click.prevent="newForm">
                    Посмотреть район
                </button>
            </div>
        </form>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        name: 'MainForm',

        data() {
            return {
                form: {
                    name: '',
                    phone: '',
                    isVisible: undefined,
                },
                placeholderName: 'Ваше имя',
                placeholderPhone: 'Ваш телефон',
                
            }
        },
        ...mapMutations({
                setForm: 'main/setForm',
            }),

        props: {
            style: {
                type: Boolean,
                required: true,
            }
        },
        methods: {
            newForm() {
                    this.form.isVisible = undefined
                    if(this.form.name === '')
                        {
                            this.placeholderName= 'Введите имя!!'
                            return
                        }
                        if(this.form.phone === '')
                        {
                            this.placeholderPhone= 'Введите номер телефона!!'
                            return
                        }
                    var rgx = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
                    if(rgx.test(this.form.phone) && this.form.name != '')
                    {
                        this.form.isVisible = true,
                        this.$emit('addForm', Object.assign({}, this.form))
                    }
                    else
                    {
                        this.form.isVisible = false;
                        this.$emit('addForm', Object.assign({}, this.form))
                    }                
                    this.form.phone = ''
                    this.form.name = ''
            }
        },
    }
</script>

<style lang="scss" scoped>
.two-v-two {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    row-gap: 4vh;
}

.one-v-four {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
    
.content-form {
    width: inherit;

    &__elements {
        display: grid;
        place-content: center;
        place-items: center;

        input, label, button, span {
            width: 90%;
            height: 5.5vh;
        }
        label {
            max-width: none;
        }
    }

    ::placeholder {
        color: #BEBEBE;
      }
}

@media (max-width: 1060px) {
    .content-form {
        margin-top: 3vh;
        width: 80%;

        &__elements {
            grid-template-columns: 1fr;

            input,label, button {
            min-height: 5.5vh;
            height: fit-content;
            width: 100% !important;
        
            max-width: none !important;
            }
        }
    }
}


</style>