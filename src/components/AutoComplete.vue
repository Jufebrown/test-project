<template>
  <div class="autocomplete-container">
    <label for="name-input">Name:</label>
    <b-form-input
      id="name-input"
      type="text"
      :value="nameInput"
      list="auto-complete-list"
    />
    <datalist id="auto-complete-list">
      <option v-for="name in nameList" :value="name" :key="name"></option>
    </datalist>
    <div>
      <ul></ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AutoComplete",
  data() {
    return {
      nameInput: "",
    };
  },
  computed: {
    ...mapGetters(["nameList"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.autocomplete-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

label {
  margin-right: 1em;
}
</style>
