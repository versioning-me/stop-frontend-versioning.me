<template>
  <section class="series" :class="{ top_series: $route.path === '/' }">
    <div class="series_inner grid">
      <!-- Top heading -->
      <h3 class="heading_secondary upper" v-if="$route.path === '/'">
        LINEUP
      </h3>

      <!-- Products heading -->
      <h3
        class="heading_secondary upper"
        v-else-if="
          $route.path === '/products/bath-tablet' ||
            '/products/massage-face-wash' ||
            '/products/face-mask' ||
            '/products/shower-head'
        "
      >
        MORE TO BARTH
      </h3>

      <!-- Page heading -->
      <h3 class="heading_secondary upper" v-else>
        Novelties
      </h3>

      <div class="carousel carousel_series">
        <!-- Top series -->
        <Carousel :carouselItems="topSeries" v-if="$route.path === '/'">
          <li
            class="series_item"
            v-for="(topSeriesItem, index) in topSeries"
            :key="index"
          >
            <router-link class="series_link" :to="topSeriesItem.url">
              <img
                :src="topSeriesItem.src"
                :alt="`${topSeriesItem.title},BARTH（バース）`"
                class="series_image"
              />
              <div class="series_text">
                <h4 class="series_name">{{ topSeriesItem.title }}</h4>
                <span class="series_size">{{ topSeriesItem.size }}</span>
                <span class="series_view">View details</span>
              </div>
            </router-link>
          </li>
        </Carousel>

        <!-- Products series -->
        <Carousel
          :carouselItems="productsSeries"
          v-else-if="
            $route.path === '/products/bath-tablet' ||
              '/products/massage-face-wash' ||
              '/products/face-mask' ||
              '/products/shower-head'
          "
        >
          <li
            class="series_item"
            v-for="(productsSeriesItem, index) in productsSeries"
            :key="index"
            v-show="$route.path !== `/products/${productsSeriesItem.url}`"
          >
            <router-link class="series_link" :to="productsSeriesItem.url">
              <img
                :src="productsSeriesItem.src"
                :alt="`${productsSeriesItem.title},BARTH（バース）`"
                class="series_image"
              />
              <div class="series_text">
                <h4 class="series_name">{{ productsSeriesItem.title }}</h4>
                <span class="series_size">{{ productsSeriesItem.size }}</span>
                <span class="series_view">View details</span>
              </div>
            </router-link>
          </li>
        </Carousel>

        <!-- Page series -->
        <Carousel :carouselItems="series" v-else>
          <li
            class="series_item"
            v-for="(seriesItem, index) in series"
            :key="index"
          >
            <router-link class="series_link" :to="seriesItem.url">
              <img
                :src="seriesItem.src"
                :alt="`${seriesItem.title},BARTH（バース）`"
                class="series_image"
              />
              <div class="series_text">
                <h4 class="series_name">{{ seriesItem.title }}</h4>
                <span class="series_size">{{ seriesItem.size }}</span>
                <span class="series_view">View details</span>
              </div>
            </router-link>
          </li>
        </Carousel>
      </div>
      <a
        class="series_btn btn upper"
        href="./products.html"
        v-if="$route.path === '/'"
        >See the products</a
      >
    </div>
  </section>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Series",
  data() {
    return {
      topSeries: [
        {
          url: "./bath_tablet.html",
          title: "中性重炭酸入浴",
          size: "3 sizes available",
          src: require("@/assets/images/products/bt/product_details_01.png")
        },
        {
          url: "./massage_face_wash.html",
          title: "中性重炭酸洗顔パウダー",
          size: "3 sizes available",
          src: require("@/assets/images/products/mfw/product_details_01.png")
        },
        {
          url: "./face_mask.html",
          title: "中性重炭酸フェイスマスク",
          size: "2 sizes available",
          src: require("@/assets/images/products/fm/product_details_01.png")
        }
      ],
      productsSeries: [
        {
          url: "bath-tablet",
          title: "中性重炭酸入浴",
          size: "3 sizes available",
          src: require("@/assets/images/products/bt/product_details_01.png")
        },
        {
          url: "massage-face-wash",
          title: "中性重炭酸洗顔パウダー",
          size: "3 sizes available",
          src: require("@/assets/images/products/mfw/product_details_01.png")
        },
        {
          url: "face-mask",
          title: "中性重炭酸フェイスマスク",
          size: "2 sizes available",
          src: require("@/assets/images/products/fm/product_details_01.png")
        },
        {
          url: "shower-head",
          title: "重炭酸バブルシャワー",
          size: "",
          src: require("@/assets/images/products/sh/product_details_01.png")
        }
      ],
      series: [
        {
          url: "./massage_face_wash.html",
          title: "中性重炭酸洗顔パウダー",
          size: "3 sizes available",
          src: require("@/assets/images/products/mfw/product_details_01.png")
        },
        {
          url: "./face_mask.html",
          title: "中性重炭酸フェイスマスク",
          size: "2 sizes available",
          src: require("@/assets/images/products/fm/product_details_01.png")
        },
        {
          url: "./bath_tablet.html",
          title: "中性重炭酸入浴",
          size: "3 sizes available",
          src: require("@/assets/images/products/bt/product_details_01.png")
        }
      ]
    };
  },
  components: {
    Carousel
  }
};
</script>

<style scoped lang="scss">
.series {
  position: relative;
  text-align: center;
  @include layout_padding(xl);
  overflow: hidden;
  @include media_query_min(m) {
    @include layout_padding($top: 3xl);
  }

  &_inner {
    @include media_query_min(m) {
      width: 72%;
    }
  }

  &_item {
    flex: 0 0 50%;
    padding: 0.625rem;
    @include media_query_min(m) {
      flex: 0 1 33.3333333%;
      padding: 0.75rem;
    }
  }

  &_link {
    position: relative;
    display: block;
    color: $black;

    &:hover .series_image {
      opacity: 0.64;
      @include motion(opacity, 150ms, on);
    }
  }

  &_image {
    opacity: 1;
    @include motion(opacity, 200ms, on);
  }

  &_name {
    @include weight(regular);
  }

  &_size {
    display: block;
    @include typo(7xs);
    @include component_margin(xs, auto, 0, auto);
  }

  &_view {
    display: block;
    @include typo(7xs);
    @include weight(regular);
    @include component_margin(l, auto, 0, auto);

    &::after {
      @include icon(arrow_right);
      @include component_margin($left: xs);
    }
  }

  .carousel_btn {
    @include media_query_min(m) {
      display: none;
    }
  }

  &_btn {
    @include typo(7xs);
    @include weight(bold);
    color: $black;
    border: 0.0625rem solid $black;
    @include layout_margin(l, auto, 0, auto);
    @include motion(all, 100ms, on);

    &:hover {
      background-color: $black;
      color: $white;
    }
  }
}
</style>
<style lang="scss">
.series {
  .carousel_series .carousel_btn {
    @include media_query_min(m) {
      display: none;
    }
  }
}
</style>
