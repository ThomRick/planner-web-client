<template>
  <v-card height="100%" width="100%">
    <v-container fluid style="min-height: 0;" grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="planning in plannings" :key="planning.id">
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">{{ planning.title }}</div>
              <div>{{ planning.description }}</div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn fab dark color="indigo" @click="addPlanning()">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'Plannings',
  data: () => ({
    plannings: [],
  }),
  methods: {
    addPlanning() {
      this.plannings.push({
        id: this.plannings.length + 1,
        title: 'A New Planning',
        description: 'Description of the awesome new planning',
      });
    },
  },
};
</script>
<style scoped>
.icon {
  display: flex;
}
</style>
