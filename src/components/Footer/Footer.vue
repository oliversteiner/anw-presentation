<template>
  <div class="footer">
    {{ msg }}
    Footer
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({ components: {} })
class Footer extends Vue {
  @Prop() msg: string | undefined

  mount() {
    console.log('footer')
  }
}

export default Footer
</script>

<style lang="scss">
@import 'Footer';
</style>
