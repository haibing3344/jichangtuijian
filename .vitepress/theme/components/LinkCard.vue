<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a class="link-card" :href="href" target="_blank" rel="noopener noreferrer">
    <div class="link-card-content">
      <h3 class="link-card-title">{{ title }}</h3>
      <p class="link-card-description">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.link-card {
  display: block;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  transition: all 0.25s;
  text-decoration: none;
  margin: 16px 0;
}

.link-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.link-card-title {
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
  font-size: 1.1em;
}

.link-card-description {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9em;
}
</style>