<template>
  <div>
    <div class="title">
      <img class="like-img" src="../../../assets/images/heart.png" alt>
      <span class="like-title">猜你喜欢</span>
    </div>
    <div class="like-list">
      <div class="like-item" v-for="(item, index) in result" :key="index">
        <div class="item-img">
          <p>
            <img class="img" :src="item.imgurl">
          </p>
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-comment"></div>
          <div class="item-price">
            <span class="item-price-symbol">¥</span>
            <em class="item-price-num">{{item.price_min}}</em>
            起
            <span class="item-price-area">{{item.address}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="like-more">查看所有产品</div>
  </div>
</template>

<script>
export default {
  name: "HomeLike",
  data() {
    return {
    //   pid: null,
    //   cid: null,
      page: 1,
      result: []
    };
  },
  computed:{
      city(){
        return this.$store.getters.watchCity
      }
  },
  methods: {
    getInfor() {
      let that = this;
      const url1 = this.Home + "/scenery/?key=a5931191e19941fc8fe16af7d899fc91";
      const url2 = "../../../../static/mock/like.json"
      this.$axios
        .get(url2, {
          params: {
            pid: that.city[1],
            // cid: that.city[2],
            page: that.page
          }
        })
        .then(function(response) {
        //   console.log(response);
          that.result = response.data.result;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  mounted() {
      this.getInfor();
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/common.styl';

.title {
  padding: 0.3rem 0;

  .like-title {
    color: #212121;
    font-size: 0.32rem;
    height: 0.44rem;
    line-height: 0.44rem;
    margin-left: 0.12rem;
  }

  .like-img {
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: top;
    margin-left: 0.2rem;
  }
}

.item-img {
  width: 2rem;
  height: 2rem;
  float: left;

  p {
    line-height: 2rem;
  }

  .img {
    width: 100%;
  }
}

.like-more {
  color: #00afc7;
  text-align: center;
  font-size: 0.28rem;
  line-height: 0.4rem;
  padding: 0.2rem 0;
}

.like-item:not(:first-child) {
  border-top: 1px solid #eee;
}

.like-item:last-child {
  border-bottom: 1px solid #eee;
}

.like-item {
  overflow: hidden;
  padding: 0.2rem 0;
  margin-left: 0.2rem;

  .item-info {
    overflow: hidden;
    padding-left: 0.22rem;

    .item-title {
      font-size: 0.32rem;
      height: 0.44rem;
      line-height: 0.44rem;
      margin-top: 0.2rem;
    }

    .item-price {
      position: relative;
      margin-top: 0.22rem;

      .item-price-symbol, .item-price-num {
        color: #ff8300;
      }

      .item-price-num {
        font-size: 0.4rem;
      }

      .item-price-area {
        width: 45%;
        position: absolute;
        right: 0.22rem;
        elliplis();
      }
    }
  }
}
</style>

