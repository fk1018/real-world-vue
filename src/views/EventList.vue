<template lang="pug">
  div
    h1 Event Listing
    router-link(:to="{ name: 'event-show', params: { id: '1' }}") Show
</template>
