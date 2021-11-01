<template>
    <div class="time-tracking-dashboard">
        <CardProfile full-name="Jeremy Robson" :avatar-image="avatarImage" />
        <CardTime card-type="work" />
        <CardTime card-type="play" />
        <CardTime card-type="study" />
        <CardTime card-type="exercise" />
        <CardTime card-type="social" />
        <CardTime card-type="self-care" />
    </div>
</template>

<script>
import CardProfile from "@/components/cards/CardProfile.vue";
import CardTime from "@/components/cards/CardTime.vue";

export default {
    name: "TimeTrackingDashboard",
    components: {
        CardProfile,
        CardTime
    },
    data() {
        return {
            avatarImage: require("../assets/images/image-jeremy.png")
        }
    }
}
</script>

<style lang="scss" scoped>
.time-tracking-dashboard {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    row-gap: 25px;

    width: 87%;

    margin: 80px auto;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(4, auto);
        gap: 25px;
    }

    @media screen and (min-width: 768px) {
        width: 70%;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(2, 255px);
        justify-content: center;
        gap: 30px;
    }

    @media screen and (min-width: 1440px) {
        grid-template-columns: repeat(4, 255px);
        grid-template-rows: repeat(2, 1fr);
    }
}
</style>
