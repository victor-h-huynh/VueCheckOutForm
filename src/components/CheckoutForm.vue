<template>
  <div class="form">
    <v-form action ref="form">
      <v-row>
        <v-col cols="12">
          <h2>Payment Informations</h2>
        </v-col>

        <v-col cols="12">
          <v-select
            style="width: 45%;"
            v-model="card_type"
            :items="this.creditCardTypes"
            :rules="[v => !!v || 'Payment Method is required']"
            label="Payment Method"
            placeholder="American Express"
            dark
            required
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field
            style="width: 80%;"
            v-model="cardholders_name"
            :rules="cardholders_nameRules"
            label="CardHolders Name"
            placeholder="John Wick"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            style="width: 80%;"
            v-model="card_number"
            :rules="card_numberRules"
            label="Card Number"
            placeholder="2547-4560-1354-1248"
            dark
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-select
            style="width: 80%;"
            v-model="month"
            :items="this.months"
            :rules="monthRules"
            label="Month"
            placeholder="6"
            dark
            required
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            style="width: 80%;"
            v-model="year"
            :items="this.years"
            :rules="yearRules"
            label="Year"
            placeholder="2022"
            dark
            required
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-text-field
            style="width: 80%"
            v-model="cvc"
            :rules="cvcRules"
            label="CVC"
            dark
            placeholder="785"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <div>
        <v-btn class="btn" x-large color="success" dark @click="onSubmit">Purchase</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      valid: false,

      cardholders_name: "",
      card_type: "",
      card_number: "",
      month: "",
      year: "",
      cvc: "",

      months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      years: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      creditCardTypes: ["Visa", "MasterCard", "American Express", "Discover"],

      cardholders_nameRules: [
        v => !!v || "The CardHolder's name id required ",
        v => v.length > 2 || "Your name must be greater than 2"
      ],
      card_typeRules: [v => !!v || "Payment option is required"],
      card_numberRules: [
        v => !!v || "Your credit card number is required",
        v => /^([0-9]{16})$/.test(v) || "number must be 16 length"
      ],
      monthRules: [
        v => !!v || "The Month is required",
        v => /^(0?[1-9]|1[012])$/.test(v) || "Please Enter a valid month"
      ],
      yearRules: [v => !!v || "Year is required"],
      cvcRules: [
        v => !!v || "CVC is required",
        v => /^([0-9]{3,4})$/.test(v) || "CVC must be 3 or 4 digits"
      ]
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        alert(
          "Thank you for your purchase!" +
            " \n" +
            "Card type :" +
            this.card_type +
            " \n" +
            "Card number :" +
            this.card_number +
            " \n" +
            "Month :" +
            this.month +
            " \n" +
            "Year :" +
            this.year +
            " \n" +
            "Cvc :" +
            this.cvc +
            " \n"
        );
      } else {
        alert("Correct your errors");
      }
    }
  }
};
</script>

<style scoped>
h2 {
  color: white;
  text-align: left;
}

h5 {
  margin: 0;
  color: white;
  text-align: left;
  font-size: 5vh;
}

.btn {
  margin-top: 100px;
  border-radius: 30px;
  width: 15vw;
  font-weight: 900;
}
</style>