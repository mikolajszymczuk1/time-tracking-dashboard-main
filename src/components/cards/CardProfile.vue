<template>
    <div class="card-profile">
        <div class="card-profile__main-part">
            <div class="card-profile__avatar"
                :style="{ backgroundImage: `url('${ avatarImage }')` }"
            ></div>

            <h1 class="card-profile__fullname">
                <span class="card-profile__report-text">Report for</span><br>
                {{ fullName }}
            </h1>
        </div>

        <div class="card-profile__timeframes">
            <label class="card-profile__timeframe-category">
                <input class="card-profile__input" type="radio" name="timeframe" value="daily"
                    v-model="timeframe"
                >
                <span class="card-profile__category-name">Daily</span>
            </label>

            <label class="card-profile__timeframe-category">
                <input class="card-profile__input" type="radio" name="timeframe" value="weekly"
                    v-model="timeframe"
                >
                <span class="card-profile__category-name">Weekly</span>
            </label>

            <label class="card-profile__timeframe-category">
                <input class="card-profile__input" type="radio" name="timeframe" value="monthly"
                    v-model="timeframe"
                >
                <span class="card-profile__category-name">Monthly</span>
            </label>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "CardProfile",
    props: {
        fullName: {
            type: String,
            required: true
        },
        avatarImage: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            timeframe: ""
        }
    },
    watch: {
        timeframe() {
            this.changeTimeframe(this.timeframe);
        }
    },
    computed: {
        ...mapState({ currentTimeframe: state => state.currentTimeframe })
    },
    methods: {
        ...mapActions(["changeTimeframe"])
    },
    created() {
        this.timeframe = this.currentTimeframe;
    }
}
</script>

<style lang="scss" scoped>
.card-profile {
    $self: &;

    background-color: colors.$Dark-blue;
    border-radius: 15px;

    @media screen and (min-width: 600px) {
        grid-column: 1 / 3;
    }

    @media screen and (min-width: 1024px) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }
    
    // Top part
    &__main-part {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 30px 0;

        background-color: colors.$Blue;
        border-radius: 15px;

        @media screen and (min-width: 1024px) {
            display: grid;

            padding: 30px 30px 78px 30px;
        }
    }

    &__avatar {
        width: 70px;
        height: 70px;

        margin-right: 20px;

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 50%;
        border: solid 3px white;

        @media screen and (min-width: 1024px) {
            width: 85px;
            height: 85px;

            margin-right: 0;
            margin-bottom: 20px;
        }
    }

    &__fullname {
        color: white;
        font-weight: 400;
        font-size: 1.5em;
        text-shadow: 0 0 3px rgba(colors.$Dark-blue, 0.2);
    
        @media screen and (min-width: 1024px) {
            font-size: 2.5em;
            font-weight: 300;
        }
    }

    &__report-text {
        color: rgba(colors.$Pale-Blue, 0.8);
        font-size: 0.65em;
    
        @media screen and (min-width: 1024px) {
            font-size: 0.4em;
            font-weight: 400;
        }
    }

    // Bottom part
    &__timeframes {
        display: flex;
        justify-content: space-around;
        align-items: center;

        padding: 25px 10px;

        background-color: colors.$Dark-blue;
        border-radius: 0 0 15px 15px;

        @media screen and (min-width: 1024px) {
            align-items: flex-start;
            flex-direction: column;

            padding: 25px 30px 30px 30px;
        }
    }

    &__timeframe-category {
        color: colors.$Desaturated-blue;
        font-size: 1.1em;
    
        @media screen and (min-width: 1024px) {
            margin-bottom: 23px;

            &:last-child {
                margin: 0;
            }
        }
    }

    &__input {
        display: none;
    
        &:checked ~ #{ $self }__category-name {
            color: white;
        }
    }

    // &__category-name { }
}
</style>
