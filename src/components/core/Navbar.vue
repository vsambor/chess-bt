<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="$emit('update:drawer', !drawer)" />
    <v-toolbar-title>{{ $t('app_name') }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    drawer: { type: Boolean }
  }
}
</script>
