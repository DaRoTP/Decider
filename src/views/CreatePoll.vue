<template>
  <form @submit.prevent="createNewPoll" class="create-poll">
    <h1 class="create-poll__title">Create poll</h1>
    <button type="submit" class="create-poll__create-btn">create</button>
    <div><input type="date" /> <input type="time" /></div>
    <div class="create-poll__main">
      <div class="create-poll__options">
        <button v-for="option in options" :key="option.name">
          {{ option.name }}
        </button>
      </div>
      <div class="create-poll__option-form">
        <input v-model="title" type="text" />
        <textarea v-model="description" cols="30" rows="10"></textarea>
        <button class="add-option">add option</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreatePoll",
  data() {
    return {
      options: [{ name: "one" }, { name: "two" }, { name: "three" }, { name: "four" }],
      title: "",
      description: "",
    };
  },
  methods: {
    createNewPoll() {
      console.log("CREATETING NEW POLL");
      this.$router.push({ name: "Binary Poll", params: { pollId: "2fsggd" } });
    },
  },
});
</script>

<style lang="scss">
.create-poll {
  display: flex;
  flex-direction: column;
  &__create-btn {
    align-self: flex-end;
  }
  &__main {
    display: flex;
    gap: 2rem;
  }
  &__options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }
  &__option-form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem auto;
  }
}
</style>
