<template>
  <div ref="jazzicon" />
</template>
<script>
import MersenneTwister from 'mersenne-twister';
import Color from 'color';
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
    },
    shapeCount: {
      type: Number,
      default: 4
    },
    colors: {
      type: Array,
      default: () => [
        '#01888C', // teal
        '#FC7500', // bright orange
        '#034F5D', // dark teal
        '#F73F01', // orangered
        '#FC1960', // magenta
        '#C7144C', // raspberry
        '#F3C100', // goldenrod
        '#1598F2', // lightning blue
        '#2465E1', // sail blue
        '#F19E02' // gold
      ]
    },
    svgns: {
      type: String,
      default: 'http://www.w3.org/2000/svg'
    }
  },
  data() {
    return {
      generator: null
    };
  },
  watch: {
    seed: {
      handler() {
        this.icon();
      }
    },
    address: {
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
      const el = await this.generateIdenticon(this.diameter, seed);
      await this.$refs.jazzicon.append(el);
    },
    newPaper(diameter, color) {
      var container = document.createElement('div');
      container.style.borderRadius = `${diameter / 2}px`;
      container.style.overflow = 'hidden';
      container.style.padding = '0px';
      container.style.margin = '0px';
      container.style.width = '' + diameter + 'px';
      container.style.height = '' + diameter + 'px';
      container.style.display = 'inline-block';
      container.style.background = color;
      return {
        container: container
      };
    },
    generateIdenticon(diameter, seed) {
      this.generator = new MersenneTwister(seed);
      var remainingColors = this.hueShift(this.colors.slice(), this.generator);
      var elements = this.newPaper(diameter, this.genColor(remainingColors));
      var container = elements.container;
      var svg = document.createElementNS(this.svgns, 'svg');
      svg.setAttributeNS(null, 'x', '0');
      svg.setAttributeNS(null, 'y', '0');
      svg.setAttributeNS(null, 'width', diameter);
      svg.setAttributeNS(null, 'height', diameter);
      container.appendChild(svg);
      for (var i = 0; i < this.shapeCount - 1; i++) {
        this.genShape(remainingColors, diameter, i, this.shapeCount - 1, svg);
      }
      return container;
    },
    genShape(remainingColors, diameter, i, total, svg) {
      var center = diameter / 2;
      var shape = document.createElementNS(this.svgns, 'rect');
      shape.setAttributeNS(null, 'x', '0');
      shape.setAttributeNS(null, 'y', '0');
      shape.setAttributeNS(null, 'width', diameter);
      shape.setAttributeNS(null, 'height', diameter);
      var firstRot = this.generator.random();
      var angle = Math.PI * 2 * firstRot;
      var velocity =
        (diameter / total) * this.generator.random() + (i * diameter) / total;
      var tx = Math.cos(angle) * velocity;
      var ty = Math.sin(angle) * velocity;
      var translate = 'translate(' + tx + ' ' + ty + ')';
      // Third random is a shape rotation on top of all of that.
      var secondRot = this.generator.random();
      var rot = firstRot * 360 + secondRot * 180;
      var rotate =
        'rotate(' + rot.toFixed(1) + ' ' + center + ' ' + center + ')';
      var transform = translate + ' ' + rotate;
      shape.setAttributeNS(null, 'transform', transform);
      var fill = this.genColor(remainingColors);
      shape.setAttributeNS(null, 'fill', fill);
      svg.appendChild(shape);
    },
    genColor(colors) {
      var rand = this.generator.random();
      var idx = Math.floor(colors.length * this.generator.random());
      var color = colors.splice(idx, 1)[0];
      return color;
    },
    hueShift(colors, generator) {
      const wobble = 30;
      var amount = generator.random() * 30 - wobble / 2;
      return colors.map(function(hex) {
        var color = Color(hex);
        color.rotate(amount);
        return color.hex();
      });
    }
  }
};
</script>
