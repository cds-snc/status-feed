<script setup lang="ts">
import StatusFeed from "@/components/StatusFeed.vue";
import { useFeedsStore } from "@/stores/feeds";
const feedsStore = useFeedsStore();
const feeds = feedsStore.feeds;
</script>
<script lang="ts"></script>

<template>
  <h1>{{ $t("Current status of 3rd party services") }}</h1>
  <ul class="card-deck" v-for="feed in feeds" :key="feed.name">
    <StatusFeed :feed="feed" />
  </ul>
</template>

<style scoped>
.card-deck {
  padding-left: 0px !important;
}
</style>
