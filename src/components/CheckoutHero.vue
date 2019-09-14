<template>
  <div>
    <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
      <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">
        <img :src="slide" />
      </div>
    </agile>

    <v-row>
      <v-col class="priceTag" cols="2">
        <p>
          <span>$ {{this.product.price}}</span>
          {{this.product.name}}
        </p>
      </v-col>
      <v-col cols="10">
        <agile
          :dots="false"
          class="thumbnails"
          ref="thumbnails"
          :options="options2"
          :as-nav-for="asNavFor2"
        >
          <div
            class="slide thumbnails"
            v-for="(slide, index) in slides"
            :key="index"
            :class="`slide--${index}`"
            @click="$refs.thumbnails.goTo(index)"
          >
            <img class="test" :src="slide" />
          </div>
        </agile>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  name: "CheckoutHero",
  data: function() {
    return {
      currentImg: "/images/Product/1.jpg",
      product: {
        name: "Shiba Backpack",
        price: 28.95,
        images: [
          "/images/Product/1.jpg",
          "/images/Product/2.jpg",
          "/images/Product/3.jpg",
          "/images/Product/4.jpg"
        ]
      },
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },

      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: true
            }
          }
        ]
      },

      slides: [
        "/images/Product/1.jpg",
        "/images/Product/2.jpg",
        "/images/Product/3.jpg",
        "/images/Product/4.jpg"
      ]
    };
  },
  methods: {
    setCurrentImg(value) {
      this.currentImg = value;
    }
  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  }
};
</script>


<style scoped>
.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 300px;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
  padding: 100px;
}

.slide {
  margin-top: 150px;
}

.slide.agile__slide.thumbnails {
  margin-top: 0px;
}

.slide.agile__slide.thumbnails img {
  padding: 5px;
  height: 150px;
  width: 150px;
  margin-left: 10px;
}

.container {
  width: 400px;
  margin-right: 50px;
}

.priceTag {
  margin-top: 70px;
  padding: 10px;
}

p {
  font-weight: 300;
  margin-top: 40px;
  padding: 3px;
}

span {
  font-weight: 900;
}
</style>
