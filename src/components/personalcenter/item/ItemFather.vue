<template>
    <div class="father">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ItemFather"
    }
</script>

<style scoped>
    /*.father {

        display: flex;
        background-color: #f6f6f6;

        !*底部*!
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0px -2px 1px rgba(100, 100, 100, .1);

    }*/
</style>
