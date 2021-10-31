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
                    @input="changeTimeFrame('daily')"
                >
                <span class="card-profile__category-name">Daily</span>
            </label>

            <label class="card-profile__timeframe-category">
                <input class="card-profile__input" type="radio" name="timeframe" value="weekly"
                    @input="changeTimeFrame('weekly')"
                >
                <span class="card-profile__category-name">Weekly</span>
            </label>

            <label class="card-profile__timeframe-category">
                <input class="card-profile__input" type="radio" name="timeframe" value="monthly"
                    @input="changeTimeFrame('monthly')"
                >
                <span class="card-profile__category-name">Monthly</span>
            </label>
        </div>
    </div>
</template>

<script>
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
    methods: {
        changeTimeFrame(timeFrameName) {
            console.log(timeFrameName);
        }
    }
}
</script>

<style lang="scss" scoped>
.card-profile {
    $self: &;

    background-color: colors.$Dark-blue;
    border-radius: 15px;
    
    // Top part
    &__main-part {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 30px 0;

        background-color: colors.$Blue;
        border-radius: 15px;
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
    }

    &__fullname {
        color: colors.$Pale-Blue;
        font-weight: 400;
        font-size: 1.5em;
        text-shadow: 0 0 3px rgba(colors.$Dark-blue, 0.2);
    }

    &__report-text {
        color: rgba(colors.$Pale-Blue, 0.8);
        font-size: 0.65em;
    }

    // Bottom part
    &__timeframes {
        display: flex;
        justify-content: space-around;
        align-items: center;

        padding: 25px 10px;

        background-color: colors.$Dark-blue;
        border-radius: 0 0 15px 15px;
    }

    &__timeframe-category {
        color: colors.$Desaturated-blue;
        font-size: 1.1em;
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
