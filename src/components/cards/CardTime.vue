<template>
    <div class="card-time"
        :class="'card-time--' + cardType + '-theme'"
    >
        <div class="card-time__banner">
            <img class="card-time__banner-icon"
                :src="require(`@/assets/svg/icon-${ cardType }.svg`)"
                :alt="cardType + ' icon'"
                :title="cardType + ' icon'"
            >
        </div>

        <div class="card-time__content">
            <div class="card-time__heading-part">
                <h2 class="card-time__card-header">{{ getCardData.title }}</h2>
                <IconMenu />
            </div>

            <div class="card-time__time-part">
                <h3 class=card-time__time>{{ getCardData.currentTime }}hrs</h3>
                <p class="card-time__last-time">
                    Last {{ convertTimeframeName(currentTimeframe) }} - {{ getCardData.previousTime }}hrs
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import IconMenu from "@/components/icons/IconMenu.vue";
import { mapState, mapGetters } from "vuex";

export default {
    name: "CardTime",
    components: {
        IconMenu
    },
    props: {
        cardType: {
            type: String,
            required: true,
            validator: function(value) {
                return [
                    "work",
                    "play",
                    "study",
                    "exercise",
                    "social",
                    "self-care"
                ].indexOf(value) !== -1
            }
        }
    },
    computed: {
        ...mapState({ currentTimeframe: state => state.currentTimeframe }),
        ...mapGetters(["getSingleCategory"]),
        getCardData() {
            const data = this.getSingleCategory(this.cardType);
            let timeframe = data.timeframes[this.currentTimeframe];
            return {
                title: data.title,
                currentTime: timeframe.current,
                previousTime: timeframe.previous
            }
        }
    },
    methods: {
        convertTimeframeName(timeframe) {
            switch(timeframe) {
                case "daily":
                    return "Day";
                case "weekly":
                    return "Week";
                case "monthly":
                    return "Month";
                default:
                    return "Time";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card-time {
    $self: &;
    $categoryColors: (
        "work": colors.$Light-red-a,
        "play": colors.$Soft-blue,
        "study": colors.$Light-red-b,
        "exercise": colors.$Lime-green,
        "social": colors.$Violet,
        "self-care": colors.$Soft-orange,
    );
    
    @media screen and (min-width: 375px) {
        border-radius: 15px;
    }

    @each $cardType, $color in $categoryColors {
        &--#{ $cardType }-theme {
            background-color: $color;

            #{ $self }__banner {
                background-color: $color;
            }
        }
    }

    &__banner {
        position: relative;

        padding: 18px 0;

        overflow: hidden;
        border-radius: 15px 15px 0 0;
    
        @media screen and (min-width: 1024px) {
            padding: 22px 0;
        }
    }

    &__banner-icon {
        position: absolute;
        top: 50%;
        right: 0;

        transform: translateY(-35%);
    }

    &__content {
        padding: 30px 25px;

        background-color: colors.$Dark-blue;

        @media screen and (min-width: 375px) {
            border-radius: 15px;
        }

        @media screen and (min-width: 1024px) {
            padding: 30px 25px 34px 25px;
        }
    }

    &__heading-part {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 10px;
    
        @media screen and (min-width: 1024px) {
            margin-bottom: 25px;
        }
    }

    &__card-header {
        color: white;
        font-size: 1.1em;
        font-weight: 500;
    }

    &__time-part {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (min-width: 1024px) {
            align-items: flex-start;
            flex-direction: column;
        }
    }

    &__time {
        font-size: 2em;
        font-weight: 300;
        color: white;

        @media screen and (min-width: 1024px) {
            margin-bottom: 12px;
            
            font-size: 3.3em;
        }
    }

    &__last-time {
        color: colors.$Pale-Blue;
        font-size: 0.9em;
    }
}
</style>
