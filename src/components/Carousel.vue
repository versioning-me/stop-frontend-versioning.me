<template>
  <div class="carousel_wrap">
    <ul
      class="carousel_list row"
      :class="{ 'carousel_list-active': listActive }"
    >
      <slot></slot>
    </ul>
    <div class="carousel_btn">
      <button
        class="carousel_prev"
        :class="{ 'carousel_prev-active': carouselPrev }"
        @click="prev()"
      ></button>
      <span class="carousel_current">{{ carouselItemCurrent + 1 }}</span>
      <span class="carousel_total">2</span>
      <button
        class="carousel_next"
        :class="{ 'carousel_next-active': carouselNext }"
        @click="next()"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["carouselItems"],
  data() {
    return {
      carouselItemCurrent: 0,
      carouselNext: true,
      carouselPrev: false,
      listActive: false
    };
  },
  methods: {
    next() {
      if (this.carouselItemCurrent < 1) {
        this.carouselItemCurrent++;
      } else {
        this.carouselItemCurrent = 0;
      }
      this.listActive = true;
      this.carouselNav();
    },
    prev() {
      if (this.carouselItemCurrent > 0) {
        this.carouselItemCurrent--;
      } else {
        this.carouselItemCurrent = 1;
      }
      this.listActive = false;
      this.carouselNav();
    },
    carouselNav: function() {
      if (this.carouselItemCurrent === 1) {
        this.carouselNext = false;
        this.carouselPrev = true;
      } else if (this.carouselItemCurrent === 0) {
        this.carouselNext = true;
        this.carouselPrev = false;
      }
    }
  }
};
</script>

<style scoped lang="scss"></style>
