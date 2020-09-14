<template>
    <div>
        <div class="results">
            <h4>FORM SUBMIT SUCCESSFUL</h4>
            <p>Form data gets saved and/or sent to server. There could also be a confirmation sent to email address</p>
            <p>Button would take you to some sort of after signup page.<br>In this case it just shows the form again</p>
            <button @click="back_to_signup()">Continue</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Results",
        methods: {
            back_to_signup() {
                this.$emit('change_comp', 'signup-form');
            }
        }
    }
</script>

<style scoped>
    .results {
        width: 50%;
        height: 80%;
        padding: 20px 50px 20px 20px;
    }
</style>