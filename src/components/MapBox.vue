<template>
  <div class="map-container">
    <yandex-map
      v-model="map"
      :settings="{
        location: {
            center: coordinates,
          zoom: 12,
        },
      }"
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <yandex-map-default-marker :settings="{ coordinates: coordinates}" />
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { shallowRef } from "vue";
import type { YMap, LngLat } from "@yandex/ymaps3-types";
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
} from "vue-yandex-maps";

const map = shallowRef<null | YMap>(null);

const props = defineProps<{
  coordinates: [number, number];
}>();


const coordinates = computed<LngLat>(() => {
  return getLngLatCoordinates(props.coordinates);
});

function getLngLatCoordinates(coordinates: [number, number]): LngLat {
  return [coordinates[1], coordinates[0]] as LngLat;
}

</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
