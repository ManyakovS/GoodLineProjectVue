<template>
<div class="page-container">
    <div class="container">
        <MainHeader class="contacts__header"></MainHeader>
    </div>
    <main>
        <div class="contacts">
            <div class="container">
                <div class="contacts-content">
                    <img src="../image/contacts/bg.png" alt="background">
                    <h1>Контакты</h1>
                </div>
                <div class="cental-office-desc">
                    <h2 class="page-subtitles">Центральный офис</h2>
                    <p>г. Кемерово, улица Дзержинского, дом 29.<br>                                                                                                              
                        График работы:<br>
                        Понедельник - пятница с 08.30 -17.30<br>
                        Обеденный перерыв с 12.30-13.30<br>
                        Суббота и воскресенье - выходные дни<br>
                        Контакты: 8(3842) 77-33-33 </p>

                        <h2 class="page-subtitles">Проектный отдел</h2>
                        <p>
                            Сычева Ольга Николаевна, инженер-конструктор, контактный телефон +7-903-048-9358<br>

                            Бабина Татьяна Валерьевна, инженер-конструктор, контактный телефон +7-961-701-0073<br>
    
                            У нас вы можете заказать проект для своей будущей квартиры!<br>
                        </p>
                </div>
            </div>
        </div>
    </main>
    <MainFooter></MainFooter>
</div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
    export default {
        components: {MainHeader, MainFooter}
    }
</script>

<style lang="scss">
.contacts-content {
    margin-top: 4vh;
    background-position: 0vw;
    position: relative;

    img {
        object-fit: contain;
        width: 100%;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-family: 'Playfair Display';
        font-weight: 700;
        font-size: 5rem;
        line-height: 6rem;
        text-align: center;
    
    
        color: #ffffff;
    
        position: absolute;
        left: 2vw;
        bottom: 2vh;
    }
    
}

.cental-office-desc {
    margin-top: 8vh;
    margin-bottom: 8vh;

    p {
        padding-top: 1vh;
        font-weight: 400;
        font-size: 1rem;
        line-height: 2.2rem;
    
        color: #ffffff7f;
    }

    .contacts__header {
        margin: 0 20px;
    }
}

@media (max-width: 800px) {
.contacts-content h1 {
    font-size: 2.5rem;
    line-height: 3rem;
}

.cental-office-desc p {
    font-size: 0.92rem;
    line-height: 2rem;
    letter-spacing: -.1px;
}
}

@media (max-width: 300px) {
    .first-screen-contacts {
        margin-top: 20vh;
    }
    .contacts-content h1 {
        font-size: 1.6rem;
        line-height: 1.7rem;
    }
}
</style>