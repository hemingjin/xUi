<template>
  <div class="x-carousel-item"> 
    <img :src="src" alt="">
  </div>
</template>
<script>
export default {
  name: 'xCarouselItem',
  props: { 
    src: {
      type: String
    },
    label: {
      Type: String,
    },
    title: {
      type: String
    }
  }
}
</script> 