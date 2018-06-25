<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
          <br>
          <h2>Counter</h2>
          <hr>
          <result></result>
          <counter></counter>
          <br>
          <input-model></input-model>
          <hr>
          <newresult></newresult>
          <newcounter></newcounter>
          <br>
          <newinput-model></newinput-model>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import counter from './components/Counter.vue';
import result from './components/Results.vue';
import inputModel from './components/InputModel.vue';
import newcounter from './components/NewCounter.vue';
import newresult from './components/NewResults.vue';
import newinputModel from './components/NewInputModel.vue';

export default {
  components: {
    counter,
    result,
    inputModel,
    newcounter,
    newresult,
    newinputModel,
  }
};
</script>

<style lang="scss">
</style>
