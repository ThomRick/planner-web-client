<template>
  <v-app>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title class="blue white--text">
            <span class="headline">Menu</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <v-btn slot="activator" icon dark>
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-for="(item, i) in items" :key="i" @click="goTo(item.route)">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      { title: 'Accueil', route: '/' },
      { title: 'Mes plannings', route: '/plannings' },
    ],
  }),
  methods: {
    goTo: function goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
