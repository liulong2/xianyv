<template>
        <div class="container">
            <header>
                <h2>这是一个猫</h2>
                <p> <a @click="clickPerson" target="blank">.
                    </a></p>
            </header>
            <div class="signup">
                <transition name="fade" mode="out-in">
                    <component :is="compname" @change_comp="swapcomp($event)"></component>
                </transition>
            </div>
        </div>
</template>

<script>
    import SignupForm from "./item/SignupForm";
    import Results from "./item/Results";
    import Terms from "./item/Terms";
    import {signUp} from "../../common/mixin"

    export default {
        name: "SignIn",
        data() {
            return {
                compname: 'signup-form'
            }
        },
        mixins: [signUp],
        // COMPONENTS
        components: {
            SignupForm,
            Results,
            Terms
        },

        methods: {
            swapcomp: function (comp) {
                this.compname = comp;
            },
            clickPerson() {
                this.$router.push('/personal')
            }
        }
    }
</script>

<style scoped lang="scss">
    /*@import "src/assets/css/sgin";*/
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    $green-dark: #79CB0A;
    $green-light: #B5D020;
    $orange-dark: #FF8700;
    $orange-light: #FFB100;
    $red: #FF3400;
    $grey: #8F949B;





    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }



    .signup {
        width: 700px;
        height: 460px;
        position: relative;
        overflow: hidden;
        box-shadow: 10px 10px 60px rgba(0, 0, 0, .4);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-radius: 5px;
    }

    .signup:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        transform: scaleX(-1);
        z-index: -1;
        background: url(../../assets/img/sgin/cat.jpg) no-repeat;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .8s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: translateX(-40px);
    }

    header {
        margin: 30px 0;
        text-align: center;

        h2 {
            text-transform: uppercase;
            margin: 0;
        }

        p {
            font-size: 1em;
        }

        a {
            text-decoration: none;
            border-bottom: 2px dotted $orange-dark;
            color: inherit;
        }

    }
</style>