<template>
        <div id="testimonials" class="testimonials">
            <div class="container">
                <div class="testimonials__content">

                    <div class="testimonials__elements">
                        <div> 
                            <span id="bench"></span>
                            <p>{{testimonials.bench}}</p>
                        </div>

                        <div> 
                            <span id="building"></span>
                            <p>{{testimonials.building}}</p>
                        </div>

                        <div> 
                            <span id="fountain"></span>
                            <p>{{testimonials.fountain}}</p>
                        </div>

                        <div> 
                            <span id="bicycle"></span>
                            <p>{{testimonials.bicycle}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: {
            testimonials: {
            type: Object,
            required: true,
            }
  }
    }
</script>

<style lang="scss" scoped>
    
.testimonials {
    background-color: #242B33;
    display: flex;
    justify-content: center;


    &__elements {
        text-align: center;
        padding: 7vh 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        flex-wrap: wrap;

        div {
            width: 24%;
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        img {
            object-fit: contain;
            width: 55%;
        }

        p {
            font-weight: 300;
            font-size: 1.3em;
            line-height: 1.7em;
            text-align: center;
            
            color: #ffffff7c;
        }

        #bench, #building, #fountain, #bicycle {
            background-repeat: no-repeat;
            width: 20vw;
            height: 15vh;
            background-position-x: center;
            background-size: contain;
            margin-bottom: 2vh;
        }
        #bench{
            background-image: url('../image/testimonials/bench.svg');
        }
        #building {
            background-image: url('../image/testimonials/building.svg');
        }
        #fountain {
            background-image: url('../image/testimonials/fountain.svg');
        }
        #bicycle {
            background-image: url('../image/testimonials/bicycle.svg');
        }
    }
}

@media (max-width: 800px) {
    .testimonials__elements {
        padding-top: 2vh;
        justify-content: space-evenly;
        padding-bottom: 0;

        article {
            margin-bottom: 4vh;
            width: 45%;
        }

        #bench, #building, #fountain, #bicycle {
            width: 17vw;
            height: 7.8vh;
            margin-bottom: 1vh
        }

        p {
            padding-top: .5em;
            font-size: .85rem;
            line-height: 1.1em;
        }
    }
}

@media (max-width: 300px) {
    .testimonials__elements {
        padding-top: 5vh;
        p {
            padding-top: .5em;
            font-size: .65rem;
            line-height: 1rem;
        }
    }
}
</style>