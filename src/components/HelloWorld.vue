<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="pb-12">Styletest</p>
    <ZButton>Schockschwerenot</ZButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ZButton } from "de-zurich-z21b-ui-library";
export default defineComponent({
  components: { ZButton },
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
