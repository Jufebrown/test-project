<template>
  <div class="home">
    <AutoComplete msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AutoComplete from "@/components/AutoComplete.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    AutoComplete,
  },
  computed: {
    ...mapGetters(["hintData"]),
  },
  methods: {
    ...mapActions(["fetchHintData"]),
    async getHintData() {
      await this.fetchHintData();
      await console.log("hintData:", this.hintData);
    },
  },
  created() {
    this.getHintData();
  },
};
</script>
