<template>
  <div class="x-carousel" ref="carouselWrap"
    :class="{'x-carousel_vertical': direction === 'vertical'}"
    :style="{'height': wrapHeight + 'px'}">
    <div class="handler" v-if="direction === 'horizontal'">
      <span class="prev" @click="prev">
        <i class="ri-arrow-left-s-line"></i>
      </span>
      <span class="next" @click="next">
        <i class="ri-arrow-right-s-line"></i>
      </span>
    </div>
    <div class="pagination">
      <span class="item" 
        v-for="item in length" 
        :key="item" 
        :class="{'active': carouselIndex == item - 1}"
        @click="carouselIndex = item - 1"></span>
    </div>
    <div class="carousel-list" :style="translateStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xCarousel',
  props: {
    // 间隔时间， 毫秒单位
    duration: {
      type: Number,
      default: 3000
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: true
    },
    // 方向
    direction : {
      type: String,
      default: 'horizontal',
      validator: function (value) {
        return value ? ['horizontal', 'vertical'].includes(value) : true;
      }
    }, 

  },
  data() {
    return {
      carouselIndex: 0,   // 当前轮播图索引
      length: 0,          // 轮播图数量
      wrapWidth: 0,       // 容器宽度
      wrapHeight: 0,      // 容器高度
      timer: null,        // 自动播放定时器
    }
  },
  computed: { 
    translateStyle() {
      if(this.direction === 'horizontal') {
        return {
          transform: `translateX(${-this.carouselIndex * this.wrapWidth}px)`
        }
      } else {
        return {
          transform: `translateY(${-this.carouselIndex * this.wrapHeight}px)`
        }
      }
    }
  },
  mounted() {  
    this.init();
    this.startAutoPlay();
  },
  watch: {
    carouselIndex(to) {
      this.$emit('change', {
        index: to
      })
    }
  },
  methods: {
    init() {
      this.length = this.$children.length;
      this.wrapWidth = parseFloat(this.$refs.carouselWrap.style.width); 
      this.wrapHeight = this.$children[0].$el.offsetHeight
    },
    // 下一张
    next() {
      let index = this.carouselIndex + 1; 
      if(index < this.length) {
        this.carouselIndex = index;
      } else {
        this.carouselIndex = 0;
      } 
    },
    // 上一张
    prev() {
      let index = this.carouselIndex - 1; 
      if(index < 0) {
        this.carouselIndex = this.length - 1
      } else {
        this.carouselIndex = index;
      } 
    },
    //  开始自动播放 
    startAutoPlay() {
      if(!this.autoplay) return;
      this.timer = setInterval(() => {
        this.next();
      }, this.duration)
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
}
</script> 