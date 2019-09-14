<template>
  <v-container>
    <v-row class="card">
      <v-col cols="7">
        <CheckoutHero />
      </v-col>
      <v-col class="checkOutCard" cols="5">
        <CheckoutForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CheckoutForm from "./CheckoutForm";
import CheckoutHero from "./CheckoutHero";
export default {
  components: {
    CheckoutForm,
    CheckoutHero
  }
};
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 20px;
  min-height: 80vh;
  margin-left: 10px;
  box-shadow: 0 19px 30px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.checkoutHero {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  background-color: white;
}

.checkOutCard {
  background-color: #0f1217;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 60px 50px 50px 50px;
}
</style>