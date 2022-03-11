<script setup lang="ts">
import { useFeedsStore } from "@/stores/feeds";
const props = defineProps<{
  feed: {
    name: string;
    url?: string;
    pattern: string;
  };
}>();
const msg = useFeedsStore().getFeedStatus(props.feed.url, props.feed.pattern);
</script>
<template>
  <li class="card">
    <div class="card-body">
      <h2 class="card-title">{{ feed.name }}</h2>
      <div class="card-text" v-html="msg"></div>
    </div>
  </li>
</template>
<style scoped>
.card {
  min-width: 18rem;
  max-width: 25rem;
  margin: 0 7.5px 15px 7.5px !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
</style>
