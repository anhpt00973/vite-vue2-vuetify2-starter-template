<template>
    <div>
      <v-app-bar 
      :dark="isDarkMode"
      app
      color="while"
      dense
      elevation="4"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      style="border-bottom: var(--border-color1);"
      >
          <!-- <v-btn
          icon
          color="var(--text-color1)"
          @click.stop="miniVariant = !miniVariant;"
          >
              <v-icon class="lightModeColor">mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
          </v-btn> -->
          <v-toolbar-title class="d-flex px-3 align-center w-full">
              <a class="" style="font-size: large;color: var(--text-color1);font-size: 18px;">
                  <span style="color:var(--text-color1)">{{ pageTitle }}</span>
                  <!-- <router-link
                  class="breadcrums">
                  {{ pageTitle }}
                  </router-link> -->
              </a>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
          </v-btn>
      </v-app-bar>
    </div>
  </template>
  <script>
  export default {
  
      data() {
          return {
              pageTitle: '',
              items: [
                  {
                      icon: 'mdi-view-dashboard-outline',
                      title: 'Dashboard',
                      to: '/dashboard1'
                  },
                  {
                      icon: "mdi-book-open-page-variant-outline",
                      title: "Components",
                      children: [
                          {
                              title: "Json Editor",
                              to: "/json-editor",
                          },
                          {
                              title: "Vuetiful Board",
                              to: "/vuetiful-board",
                          },
                          {
                              title: "Realtime Chart Demo",
                              to: "/realtime-chart-demo",
                          },
                          {
                              title: "High Charts",
                              to: "/high-charts",
                          },
                      ],
                  },
              ]
          }
      },
      created() {
          const currentRoute = this.$router.history.current.path;
          const matchingItem = this.findMatchingItem(currentRoute, this.items);
          if (matchingItem) {
              this.pageTitle = matchingItem.title;
          }
      },
      computed: {
          isDarkMode: {
              get () {
                  return this.$store.getters.getIsDarkMode
              }
          },
          miniVariant: {
          get () {
              return this.$store.state.miniVariant
          },
          set (value) {
              this.$store.commit('SET_MINIVARIANT', value)
          }
          },
      },
      watch: {
          '$route': function (newRoute, oldRoute) {
              const currentRoute = this.$router.history.current.path;
              const matchingItem = this.findMatchingItem(currentRoute, this.items);
              if (matchingItem) {
                  this.pageTitle = matchingItem.title;
              }
          }
      },
      methods: {
          findMatchingItem(to, items) {
              for (let item of items) {
                  if (item.children) {
                      for (let item1 of item.children) {
                          if (item1.to.includes(to)) {
                              return item1
                          }
                      }
                  } else if (item.to) {
                      if (item.to.includes(to)) {
                          return item
                      }
                  }
              } 
              return null;
          },
      }
  }
  </script>