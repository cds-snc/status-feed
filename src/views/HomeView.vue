<script setup lang="ts">
import StatusFeed from "@/components/StatusFeed.vue";
import { useFeedsStore } from "@/stores/feeds";
const feedsStore = useFeedsStore();
const title = feedsStore.currentStatus;
</script>

<template>
  <h1>Current status of 3rd party services</h1>
  <ul class="card-deck">
    <StatusFeed :title="title" :msg="feedsStore.getXML" />
  </ul>
</template>

<style scoped>
.card-deck {
  padding-left: 0px !important;
}
</style>
