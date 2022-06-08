<template>
  <div class="hello">
    <label for="name-input">Name:</label>
    <input id="name-input" type="text" />
    <div>
      <ul></ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AutoComplete",
  computed: {
    ...mapGetters(["nameList"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
