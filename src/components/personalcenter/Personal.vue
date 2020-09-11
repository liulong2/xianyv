<template>
    <div class="personal-center">
        <item-father>
            <item-son path="/personal">
                <template v-slot:item-text>
                    内容测试
                </template>
            </item-son>
        </item-father>
    </div>
</template>

<script>
    import ItemFather from "@/components/personalcenter/item/ItemFather";
    import ItemSon from "@/components/personalcenter/item/ItemSon";
    export default {
        name: "Personal",
        components: {
            ItemFather,
            ItemSon
        }
    }
</script>

<style scoped>

</style>