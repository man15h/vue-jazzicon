<template>
  <div ref="jazzicon" />
</template>
<script>
import jazzicon from 'jazzicon';
import addressToNumber from './addressToNumber';
export default {
  name: 'Jazzicon',
  props: {
    seed: {
      type: Number,
      default: Math.round(Math.random() * 10000000)
    },
    diameter: {
      type: Number,
      default: 100
    },
    address: {
      type: String,
      default: null
    }
  },
  watch: {
    seed: {
      handler() {
        this.icon();
      }
    },
    diameter: {
      handler() {
        this.icon();
      }
    }
  },
  mounted() {
    this.icon();
  },
  methods: {
    async icon() {
      const seed = this.address ? addressToNumber(this.address) : this.seed;
      this.$refs.jazzicon.innerHTML = '';
      const el = await jazzicon(this.diameter, seed);
      await this.$refs.jazzicon.append(el);
    }
  }
};
</script>
