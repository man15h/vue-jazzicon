<template>
  <div>
    <div class="container">
      <h1>vue-jazzicon</h1>
      <div class="container--header">
        <div class="header--icon">
          <Jazzicon 
            :diameter="diameter" 
            :address="input" />
        </div>
        <div class="header--control">
          <input
            v-model="input"
            type="text"
            max="10"
            placeholder="Type something here"
          >
          <input
            v-model.number="diameter"
            type="number"
            placeholder="Type number here"
          >
        </div>
      </div>
      <div class="container--body">
        <div 
          v-for="i in 20" 
          :key="i">
          <Jazzicon 
            :diameter="100"
            :seed="i" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      input: '0x14e8d820996b84347a8a553a643c2953aa73be7b',
      diameter: 100
    };
  }
};
</script>
<style lang="scss">
.container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 2rem;
  &--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 2rem 0;
  }
  &--body {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    div {
      margin: 1rem 0.5rem;
    }
  }
}
.header {
  &--icon {
    flex: 1;
    max-width: 300px;
  }
  &--control {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
