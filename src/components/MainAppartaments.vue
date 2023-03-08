<template>
    <div id="appartaments" class="appartaments">
        <div class="container">
            <section class="appartaments-content">
                <h2 id="appartaments-subtitle" class="page-subtitles">Наши квартиры</h2>

                <div class="appartaments-elements">
                    <article  v-for="appart in appartaments" :key="appart.id">
                        <a @click="$router.push('/appartament/' + appart.id)">
                            <img v-if="appart.id%2===1" src="../image/appartaments/appart3.png" alt="loft 3 floors">
                            <img v-else src="../image/appartaments/appart4.png" alt="loft 2 floors">
                            <span>{{appart.name}}</span>
                        </a>
                    </article>
                </div>

            </section>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            appartaments:{
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
.appartaments-elements {
    margin-top: 7vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
        position: relative;
        margin: 0 auto;
        width: 48%;
        padding-bottom: 4%;
        transition: all .3s ease;
    }

    article:hover {
        transform: scale(1.02, 1.02);
    }
    

    a {
        cursor: pointer;
        text-decoration: none;
        color: $main-text-color;
        transition: color .3s linear;
    }
    a:hover {
        color: $second-text-color
    }

    img {
        object-fit: cover;
        width: 100%;
    }

    span {
        position: absolute;
        display: block;
        bottom: 4vh;
        left: 1.5vw;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.75rem;
    }
}

@media (max-width: 1060px) {
    .appartaments-elements {
        margin-top: 2vh;
        flex-direction: column;
        justify-content: center;
    }
    .appartaments-elements article {
        width: 95%;
    }
    .appartaments-elements a {
        left: 2vw;
        bottom: 4vh;

    }
}

@media (max-width: 800px) {
    .appartaments-elements span {
        font-size: 1.1rem;
        line-height: 1.2rem;
    }
}
</style>