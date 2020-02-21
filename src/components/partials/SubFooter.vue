<template>
  <section class="subfooter">
    <div class="subfooter_inner grid">
      <p class="subfooter_support">Support you to lead a better life.</p>
      <div class="subfooter_container row">
        <div class="subfooter_column">
          <h4 class="subfooter_heading upper">Column</h4>
          <ul class="subfooter_column-list row">
            <li
              class="subfooter_column-item col_2"
              v-for="(columnItem, index) in columnItems"
              :key="index"
            >
              <router-link class="subfooter_column-link" :to="columnItem.url">
                <div
                  class="subfooter_column-image"
                  :style="{ 'background-image': 'url(' + columnItem.src + ')' }"
                ></div>
                <h5 class="subfooter_article-title">
                  {{ columnItem.title }}
                </h5>
              </router-link>
            </li>
          </ul>
          <a class="subfooter_more upper" href="./column.html">See more</a>
        </div>
        <div class="subfooter_news">
          <h4 class="subfooter_heading upper">News</h4>
          <ul class="subfooter_news-list">
            <li
              class="subfooter_news-item"
              v-for="(newsItem, index) in newsItems"
              :key="index"
            >
              <router-link class="subfooter_news-link" :to="newsItem.url">
                <span class="subfooter_news-date">{{ newsItem.date }}</span>
                <h5 class="subfooter_article-title">
                  {{ newsItem.title }}
                </h5>
              </router-link>
            </li>
          </ul>
          <a class="subfooter_more upper" href="./news.html">See more</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubFooter",
  data() {
    return {
      columnItems: [
        {
          src: require("@/assets/images/thumbnail.jpg"),
          title: "タイトルタイトルタイトルタイトルタイトル",
          url: "./article_column.html"
        },
        {
          src: require("@/assets/images/thumbnail.jpg"),
          title: "タイトルタイトルタイトルタイトルタイトル",
          url: "./article_column.html"
        }
      ],
      newsItems: [
        {
          title:
            "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
          date: "May 09, 2018",
          url: "./article_news.html"
        },
        {
          title:
            "タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル",
          date: "Sep 13, 2017",
          url: "./article_news.html"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
// Column & News

.subfooter {
  position: relative;
  background-color: $white;
  @include layout_padding($top: xl, $bottom: xl);
  z-index: 1;
  @include media_query_min(m) {
    @include layout_padding($top: 3xl, $bottom: 3xl);
  }

  &_inner.one_side .subfooter_support {
    text-align: center;
  }

  &_inner.one_side .subfooter_column,
  &_inner.one_side .subfooter_news {
    width: 100% !important;
    @include media_query_max(m) {
      @include layout_margin($top: 0);
    }
  }

  &_inner.one_side .subfooter_heading {
    text-align: center;
  }

  &_inner.one_side .subfooter_news-item {
    text-align: center;
  }

  &_inner.one_side .subfooter_more {
    @include component_margin($right: auto, $left: auto);
  }

  &_support {
    @include typo(7xs);
    @include media_query_max(m) {
      text-align: center;
    }
  }

  &_container {
    justify-content: space-between;
    align-items: stretch;
    @include component_margin($top: 2xl);
  }

  &_heading {
    @include typo(4xs);
    @include weight(bold);
    @include media_query_max(m) {
      text-align: center;
    }
  }

  &_article-title {
    @include typo(6xs);
    @include weight(light);
    @include component_margin($top: m);
  }

  &_more {
    display: table;
    @include typo(7xs);
    @include weight(bold);
    color: $black;
    @include layout_margin($top: s);
    @include media_query_max(m) {
      @include layout_margin($right: auto, $left: auto);
    }

    &::after {
      @include icon(arrow_right);
      @include component_margin($left: xs);
    }
  }

  &_column {
    width: 100%;
    @include media_query_min(m) {
      width: calc((100% - 5rem) / 3 * 2);
    }
  }

  &_column-list {
    @include layout_margin($top: m);
    margin-right: -0.625rem;
    margin-left: -0.625rem;
    @include media_query_min(m) {
      margin-right: -0.75rem;
      margin-left: -0.75rem;
    }
  }

  &_column-item {
    padding: 0.625rem;
    @include media_query_min(m) {
      padding: 0.75rem;
    }
  }

  &_column-link {
    display: block;
    color: $black;
  }

  &_column-link:hover .subfooter_column-image {
    opacity: 0.64;
    @include motion(opacity, 150ms, on);
  }

  &_column-image {
    background-image: url("../../assets/images/thumbnail.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    padding-top: ratio(wide);
    opacity: 1;
    @include motion(opacity, 200ms, on);
  }

  &_news {
    width: 100%;
    @include media_query_min(m) {
      width: calc((100% - 5rem) / 3);
    }
    @include media_query_max(m) {
      @include layout_margin($top: xl);
    }
  }

  &_news-list {
    @include layout_margin($top: m);
  }

  &_news-item:nth-child(n + 2) {
    @include layout_margin($top: 2xs);
  }

  &_news-link {
    display: block;
    color: $black;
    border-bottom: 0.0625rem solid $cool_gray_200;
    @include component_padding($bottom: m);
    @include motion(border, 200ms, on);

    &:hover {
      border-color: $black;
      @include motion(border, 150ms, on);
    }
  }

  &_news-date {
    display: block;
    @include typo(7xs);
    @include media_query_max(m) {
      text-align: center;
    }
  }
}
</style>
