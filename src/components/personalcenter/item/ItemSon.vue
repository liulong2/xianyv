<template>
    <div class="son" @click="itemClick">
        <div ><slot name="item-text"></slot></div>
<!--        :style="activityColorItem"-->
    </div>
</template>

<script>
    export default {
        name: "ItemSon",
        props: {
            path: String,
            activityColor: {
                type: String,
                default: ''
            }
        },
        computed: {
            isActivity() {
                // console.log(this.path)
                return this.$route.path.indexOf(this.path) !== -1
            },
            /*activityColorItem() {
                return this.isActivity ? {color: this.activityColor} : {}
            }*/
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