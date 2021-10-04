<template>
  <h1 class="text-primary font-bold text-xl">Register</h1>
  <hr class="my-4" />
  <div class="flex">
    <div class="flex-1">
      <form
        v-if="registrationStep === 1"
        class="register flex flex-col"
        @submit.prevent="nextRegistrationStepHandler"
      >
        <Input v-model="username" label="username" type="text" />
        <Input v-model="password" label="password" type="password" />
        <Input
          v-model="matchingPassword"
          label="matching password"
          type="password"
        />
        <button
          class="btn-primary p-2 rounded-full self-end px-6"
          type="submit"
        >
          Next
        </button>
      </form>
      <form v-if="registrationStep === 2">
        <p>
          The below information is going to be used to generate statistics for
          polls that you have participated in. Before each poll you will be
          asked if you want to stay anonymous or would you like to share this
          information.
        </p>
        <Input v-model="username" label="username" type="text" />
        <Radio
          :options="['Male', 'Female', 'Not Specified']"
          name="gender"
          v-model="gender"
        />
        <div class="flex justify-between">
          <button
            class="text-gray-400 underline"
            @click="previouseRegistrationStepHandler"
          >
            Back
          </button>
          <button
            class="btn-primary p-2 rounded-full self-end px-6"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
      <a class="self-end text-sm text-gray-400 mt-2 underline" href="#"
        >Already ahve an account? Sign in</a
      >
    </div>
    <img
      class="flex-1"
      src="../assets/images/registration-image.svg"
      alt="registration image"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "@/components/Input.vue";
import Radio from "@/components/Radio.vue";

export default defineComponent({
  name: "Register",
  components: {
    Input,
    Radio,
  },
  setup() {
    const registrationStep = ref(1);
    const username = ref("");
    const password = ref("");
    const matchingPassword = ref("");
    const gender = ref("");

    const nextRegistrationStepHandler = () => {
      registrationStep.value += 1;
    };

    const previouseRegistrationStepHandler = () => {
      registrationStep.value -= 1;
    };

    const registerHandler = () => {
      console.log("register ...", username, password);
    };

    return {
      username,
      password,
      matchingPassword,
      registrationStep,
      gender,
      registerHandler,
      nextRegistrationStepHandler,
      previouseRegistrationStepHandler,
    };
  },
});
</script>

<style></style>
