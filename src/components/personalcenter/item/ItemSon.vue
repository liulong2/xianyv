<template>
    <div class="son" @click="itemClick">
        <div :style="activityColorItem"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "ItemSon",
        props: {
            path: String,
            activityColor: {
                type: String,
                default: 'red'
            }
        },
        computed: {
            isActivity() {
                console.log(this.path)
                return this.$route.path.indexOf(this.path) !== -1
            },
            activityColorItem() {
                return this.isActivity ? {color: this.activityColor} : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>

</style>