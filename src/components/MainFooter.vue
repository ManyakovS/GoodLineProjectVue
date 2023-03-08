<template>
    <footer id="footer" class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-elements">
                    <ul>
                        <li><span id="footer-icon" src="../image/first-screen/first-page-icon.png"/></li>
                        <li>ЖИЛОЙ КОМПЛЕКС</li>
                    </ul>

                    <ul name="footer-contacts">
                        <li><a href="#">О комплексе</a></li>
                        <li><a href="#">Район</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Ипотека</a></li>
                        <li><router-link to="/contacts">Контакты</router-link></li>
                    </ul>

                    <ul name="footer-contacts">
                        <li><a href="#">О комплексе</a></li>
                        <li><a href="#">Район</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Ипотека</a></li>
                        <li><router-link to="/contacts">Контакты</router-link></li>
                    </ul>

                    <ul>
                        <li>Адрес: Пролетарская, 4</li>
                        <li>Телефон: <a href="tel:88121234567">8 (812) 123-45-67</a></li>
                        <li>Отдел продаж: 10:00 - 20:00</li>
                        <li>E-mail: <a href="mailto:vip@housevip.ru">vip@housevip.ru</a></li>
                        <li>
                            <div class="social-media">
                                <a href="">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                                
                                <a href="">
                                    <ion-icon name="logo-vk"></ion-icon>
                                </a>

                                <a href="">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>

                                <a href="">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>

                            </div>
                        </li>
                    </ul>
                </div>

                <p id="project-name">© ЖК HouseVOP» 2023</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.footer {
    background-color: #2D343C;

    .footer-elements {
        display: flex;
        justify-content: space-between;

        ul {
            padding: 2vh 0 0 0;
            list-style-type: none;
            
        }

        li {
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1rem;
            letter-spacing: 0.05em;
        
            padding: 0.3rem 0px;
            color: #ffffff7f;

            #footer-icon {
                display: block;
                background-repeat: no-repeat;
                width: 160px;
                height: 32px;
                background-position-x: left;
                background-size: contain;
                background-image: url('../image/first-screen/HouseVOP.svg');
            }

            .social-media {
                padding-top: 0.3rem;
                display: flex;
                font-size: 2rem;
                justify-content: space-between;
            }
        }

        a {
            text-decoration: none;
            color: $main-text-color;
        
            transition: color 0.3s linear;
        
        }

        a:hover {
            color: $second-text-color;
        }
    }

    #project-name {
        padding-bottom: 1vh;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
    
        color: $second-text-color;
    
    }
}

@media (max-width: 1060px){
    .footer-elements{
        padding-top: 2vh;
        align-items: baseline;
        flex-direction: column;
    }
    .footer-elements ul {
        margin: .15em 0
    }
    ul[name="footer-contacts"] {
        display: none;
    }
    #project-name {
        text-align: left;

    }
    #footer-icon {
        width: 20vw !important;
        height: 3.3vh !important;
    }
}

@media (max-width: 800px){
    .footer-elements li, #project-name {
        font-size: 0.75rem;
    }

    #footer-icon {
        width: 40vw !important;
        height: 3.3vh !important;
    }

    .social-media a {
        font-size: 2rem;
    }
}
</style>