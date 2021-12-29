<template>
  <div>
    <div class="account-header">
      <span class="cate">Hello</span>
      <h3 class="account-title">Wellcome back</h3>
    </div>
    <div class="account-form">
      <b-form @submit.stop.prevent="onSubmit">
        <b-form-group label="Email">
          <b-form-input
            v-model="$v.accountUser.email.$model"
            class="account-input"
            :state="validateState('email')"
          ></b-form-input>

          <b-form-invalid-feedback
            >Vui lòng nhập đúng định dạng email</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group label="Passwork">
          <b-form-input
            v-model="$v.accountUser.password.$model"
            class="account-input"
            :state="validateState('password')"
          ></b-form-input>

          <b-form-invalid-feedback
            >Vui lòng nhập password</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group class="text-center">
          <b-button class="account-btn" type="submit">Login</b-button>
        </b-form-group>
      </b-form>
    </div>
    <div class="option">
      Don't have an account?
      <nuxt-link to="/sign-up">Sign up now</nuxt-link>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  layout: "authentication",
  mixins: [validationMixin],
  data() {
    return {
      accountUser: {
        id: 0,
        name: "",
        image: "",
        email: "",
        password: "",
        twoFactorCode: "",
      },
    };
  },
  validations: {
    accountUser: {
      name: {
        required,
        minLength: minLength(3),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  computed: {},
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.accountUser[name];
      return $dirty ? !$error : null;
    },
    onSubmit() {
      this.$v.accountUser.$touch();
      if (this.$v.accountUser.$anyError) {
        return;
      }
    },
  },
};
</script>

<style>
  .account-input{
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ddd;
    position: relative;
  }

  .account-input::after{
    background: #f1481f;
    content: '';
    width: 100px;
    height: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .account-input:focus{
    background-color: transparent;
    box-shadow: none;
  }

  .account-input:focus .account-input::after{
    width: 100%;
  }

  .col-form-label{
    text-transform: uppercase;
  }
</style>