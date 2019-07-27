<template>
    <div>
            <comm :id="this.$route.params.id"></comm>
    </div>
</template>
<script>
import comm from '../subcomponent/comment.vue' 
export default {
    data() {
        return {

        }
    },
    components : {
        comm
    }
}
</script>
<style lang="sass" scoped>

</style>
