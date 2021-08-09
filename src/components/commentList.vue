<template>
    <div class="review-container">
        <h3>Comments</h3>
        <ul>
            <li v-for="(comment,index) in comments" :key="index">
                "{{comment.comment}}"
                <br/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        comments:{
            type:Array,
            required: true
        }
    },
}
</script>
