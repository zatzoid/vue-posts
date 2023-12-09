<template>
    <li class="postItem">
        <div class="content-slider-wrapper">
        <div class="content-slider" :class="{'content-slider_active': showComments}">
            <div class="main-content">
                <h3>{{ item.heading }}</h3>
                <p>{{ item.body }}</p>
            </div>

            <ul class="commentary">
                <li class="commentItem" v-for="(el, index) in item.commentary" :key="index">
                    <p class="comment__text">{{ el.owner }}</p>
                    <p class="comment__text">{{ el.body }}</p>
                </li>
            </ul>
        </div>
    </div>

        <div class="info">
            <p class="date">{{ item.date }}</p>
            <p class="userName">{{ item.owner }}</p>
            <button class="btn btn_like" :class="{ 'btn_like-active': isLiked }" @click="likeAction()">
                <p>{{ item.likes.length }}</p>
            </button>
            <button class="btn btn_commentary" @click=" this.showComments = !this.showComments">{{ item.commentary.length }}</button>
        </div>


    </li>
</template>
<script>
export default {
    name: 'PostItem',
    data() {
        return {
            isLiked: false,
            showComments: false

        }
    },
    methods: {
        likeAction() {
            if (this.$store.state.user.isLoggined) {
                if (!this.isLiked) {
                    this.$store.commit('posts/putLike', { postId: this.item.id, user: this.$store.state.user.currentUser })

                } else {
                    this.$store.commit('posts/disLike', { postId: this.item.id, user: this.$store.state.user.currentUser })
                }
                this.isLiked = !this.isLiked
            }
            else {
                alert('требуется авторизация')
            }
        }
    },

    props: ['item']

}
</script>
<style scoped>
.postItem {
    width: 100%;
    border-radius: 10px;
    background-color: rgb(221, 248, 221);
    padding: 15px;
 

}

.content-slider-wrapper{
    max-height: 400px;
    overflow: hidden;
}

.content-slider {
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: all .5s;
}
.content-slider_active{
    transform: translateY(-50%);
}

.main-content {
    height: 400px;
}

.commentary {
    max-height: 400px;
   overflow: scroll;
    list-style: none;
    padding: 0;
}
.commentItem{
    margin-top: 15px;
    text-align: left;
}
.comment__text:first-of-type{
    font-weight: 700;
    margin-bottom: 10px;
}
.info {
    display: flex;
    gap: 20px;
    align-items: center;
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    margin-top: 15px;

}

.date,
.userName {
    font-size: 15px;
    font-weight: 700;
    opacity: 0.5;
}


.btn {
    border: none;
    height: 50px;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: var(--col-clear);
    width: 30px;
    padding: 0;
    display: flex;
    align-items: end;
    justify-content: center;
    cursor: pointer;
}

.btn:hover,
.btn:active {
    opacity: 0.5;
}

.btn_like {
    background-image: url(../../assets/like.svg);
    margin-left: auto;
}

.btn_like-active {
    background-image: url(../../assets/like_active.svg);
}

.btn_commentary {
    background-image: url(../../assets/comments.svg);
}</style>
