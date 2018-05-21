<template>
  <v-card height="100%" width="100%">
    <v-container fluid style="min-height: 0;" grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 @click="goTo('/plannings')">
          <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div class="headline">Plannings</div>
            </v-card-title>
          </v-card>
          <!-- <v-btn fab large dark>Plannings</v-btn> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'Home',
  methods: {
    goTo: function goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style></style>
