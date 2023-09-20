<script setup>
import { ref, watch } from 'vue';

const availablePodcasts = ref({
  'Podcast1': { 'name': 'Podcast 1', 'description': 'Description 1' },
  'Podcast2': { 'name': 'Podcast 2', 'description': 'Description 2' }
  // Add more mock data here
});

const selectedPodcast = ref(Object.keys(availablePodcasts.value)[0]);
const podcastInfo = ref(availablePodcasts.value[selectedPodcast.value]);

const updatePodcastInfo = () => {
  // Your logic to update the podcast information
};

const deletePodcastInfo = () => {
  // Your logic to delete the selected podcast information
};

// Watch for changes in selectedPodcast and update podcastInfo accordingly
// Similar to Streamlit's behavior when a dropdown selection changes
watch(selectedPodcast, () => {
  podcastInfo.value = availablePodcasts.value[selectedPodcast.value];
});
</script>

<template>
  <div>
    <h1>Newsletter Dashboard</h1>
    <div id="sidebar">
      <h2>Podcast RSS Feeds</h2>
      <select v-model="selectedPodcast">
        <option v-for="(key, index) in Object.keys(availablePodcasts)" :key="index">
          {{ key }}
        </option>
      </select>
      <div v-if="podcastInfo">
        <h3>{{ podcastInfo.name }}</h3>
        <p>{{ podcastInfo.description }}</p>
        <!-- More fields can be added here -->
      </div>
      <button @click="updatePodcastInfo">Update</button>
      <button @click="deletePodcastInfo">Delete</button>
    </div>
  </div>
</template>

<style>
#sidebar {
  width: 300px;
  float: left;
}
</style>