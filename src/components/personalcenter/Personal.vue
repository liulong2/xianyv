<template>
    <div class="personal-center">
        <item-father>
            <item-son path="/personal">
                <template v-slot:item-text>
                    <h1 class="title">将鼠标悬停在卡片上</h1>
                    <div v-if="isShowClick" class="container">
                        <card :data-image="require('../../assets/img/card/1.jpg')">
                            <h1 slot="header">峡谷</h1>
                            <p slot="content">这是一个漂亮的峡谷</p>
                        </card>
                        <card :data-image="require('../../assets/img/card/2.jpg')">
                            <h1 slot="header">海滩</h1>
                            <p slot="content">这是一个漂亮的海滩</p>
                        </card>
                        <card :data-image="require('../../assets/img/card/3.jpg')">
                            <h1 slot="header">树木</h1>
                            <p slot="content">这是一个漂亮的树木</p>
                        </card>
                        <card :data-image="require('../../assets/img/card/4.jpg')">
                            <h1 slot="header">湖泊</h1>
                            <p slot="content">这是一个漂亮的湖泊</p>
                        </card>
                    </div>
                </template>
            </item-son>
        </item-father>
    </div>
</template>

<script>
    import ItemFather from "@/components/personalcenter/item/ItemFather";
    import ItemSon from "@/components/personalcenter/item/ItemSon";
    import Card from "../card/Card";
    export default {
        name: "Personal",
        components: {
            ItemFather,
            ItemSon,
            Card
        },
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            isShowClick() {
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped>


    .title {
        font-family: "Raleway",sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #5D4037;
        text-align: center;
    }

    p {
        line-height: 1.5em;
    }

    h1+p, p+p {
        margin-top: 10px;
    }

    .container {
        padding: 40px 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }


</style>