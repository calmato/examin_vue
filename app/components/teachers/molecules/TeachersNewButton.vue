<template>
  <the-button
    class="right"
    color="primary"
    @click="handleNew"
  >
    <span>{{ text }}</span>
  </the-button>
</template>

<script>
import TheButton from '~/components/common/atoms/TheButton'

export default {
  components: {
    TheButton
  },

  props: {
    text: {
      type: String,
      default: '作成する'
    }
  },

  methods: {
    handleNew() {
      this.$emit('new')
    }
  }
}
</script>
