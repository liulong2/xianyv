<template>
    <div>
        <div class="terms">
            <h4>TERMS & CONDITIONS</h4>
            <p>A list of terms, conditions, and policies.</p>
            <button @click="back_to_signup()">Back</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Terms",
        methods: {
            back_to_signup() {
                this.$emit('change_comp', 'signup-form');
            }
        }
    }
</script>

<style scoped>
    .terms {
        width: 50%;
        height: 80%;
        padding: 20px 50px 20px 20px;
    }
</style>