<template>
  <div class="page">
    <div class="page-title">{{pageTitle}} <i class="tip-fixed">to FIXED (2020/5/30)</i></div>
    <demo-show label="基本用法">
      <div class="demo">
        <x-carousel style="width:460px; margin: 0 auto;" :duration="4000" :autoplay="false" @change="changeCarouselIndex">
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
        </x-carousel>
      </div>
      <demo-block slot="code">
        &lt;x-carousel style="width:460px; margin: 0 auto;" :duration="4000" :autoplay="false" @change="changeCarouselIndex"&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
        &lt;/x-carousel&gt;
      </demo-block>
    </demo-show>
    <demo-show label="垂直方向">
      <div class="demo">
        <x-carousel style="width:460px; margin: 0 auto;" direction="vertical"  :autoplay="false"  >
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
          <x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"></x-carousel-item>
        </x-carousel>
      </div>
      <demo-block slot="code">
        &lt;x-carousel style="width:460px; margin: 0 auto;" direction="vertical"  :autoplay="false"&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
          &lt;x-carousel-item src="https://aecpm.alicdn.com/simba/img/TB1W4nPJFXXXXbSXpXXSutbFXXX.jpg"&gt;&lt;/x-carousel-item&gt;
        &lt;/x-carousel&gt;
      </demo-block>
    </demo-show>
  </div>
</template>
<script>
export default {
  methods: {
    changeCarouselIndex(data) {
      console.log(data)
    }
  }
}
</script>