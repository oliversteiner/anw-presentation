<template>
  <div class="developer-page">
    <h1>Develop</h1>

    <h2>i18n Test</h2>

    <p>{{ $t('message') }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
class DeveloperPage extends Vue {
  @Prop() msg: string | undefined
  message = 'Develop'
  create() {}
}

export default DeveloperPage
</script>

<style lang="scss">
@import 'DeveloperPage';
</style>
