<template>
    <CommentList v-if="comment.length" :comments="comment"/>
    <CommentFrom @submitted="addComment"/>
</template>

<script>
import CommentFrom from '@/components/commentFrom.vue'
import CommentList from '@/components/commentList.vue'
export default{
    components: {
        CommentFrom,
        CommentList
    },
    data(){
        return{
            comment: []
        }
    },
    methods:{
        addComment(doc){
            this.comment.push(doc)
        }
    }
}
</script>
