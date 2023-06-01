<template>
  <v-dialog
  v-model="isCustomizerOpen"
  overlay-opacity="0.1"
  :dark="isDarkMode"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="appCustomizer"
      v-bind="attrs"
      v-on="on">
        <v-btn :dark="isDarkMode" color="var(--background-family1)" width="15"
        style="border: var(--border-color1);border-right:0px;width:10px;"
        >
          <v-icon>mdi-18px  mdi-spin mdi-cog-outline</v-icon>
        </v-btn>
      </div>
    </template>

    <v-card width="30%" height="100%"   style="position: absolute;right:0px;top:0px;"
    >
      <v-card-title id="i35964">
        <!-- Header -->
        <v-toolbar height="48" style="border:0px;background-color:var(--container-background2) !important">
          <v-toolbar-title>Theme Customizer</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon style="right:-15px;" @click="isCustomizerOpen=!isCustomizerOpen">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!-- Header -->
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="mt-5">
          <b>Skin</b>
          <!-- <v-tabs 
          v-model="skinTab"
          height="30"
          tab-line-height="normal"
          background-color="transparent"
          style="background-color:transparent !important"
          active-class="themeActiveTabs"
          tab-font-size="subtitle-2"
          >
            <v-tabs-slider style="display:none"></v-tabs-slider>
            <v-tab style="border: var(--border-color1);color: var(--text-color1);">Default</v-tab>
            <v-tab style="border: var(--border-color1);color: var(--text-color1);">Dark Mode</v-tab>
            <v-tab style="border: var(--border-color1);color: var(--text-color1);">Light Mode</v-tab>
          </v-tabs> -->
          <v-radio-group
            v-model="skinTab"
            row
            dense
            style="display: contents;flex-wrap: nowrap;"
          >
            <v-radio
              label="Default"
              value="default"
              style="display: contents;flex-wrap: nowrap;"

            ></v-radio>
            <v-radio
              label="Dark"
              value="dark"
              style="display: contents;flex-wrap: nowrap;"

            ></v-radio>
            <v-radio
              label="Light"
              value="light"
              style="display: contents;flex-wrap: nowrap;"

            ></v-radio>
          </v-radio-group>
        </div>

        
        <div class="mt-5">
          <b>Navbar Type</b>
          <v-radio-group
            v-model="navbarTypeTab"
            row
            dense
            style="display: contents;flex-wrap: nowrap;"
          >
            <v-radio
              label="Sticky"
              value="sticky"
              style="display: contents;flex-wrap: nowrap;"

            ></v-radio>
            <v-radio
              label="Static"
              value="static"
              style="display: contents;flex-wrap: nowrap;"

            ></v-radio>
            <v-radio
              label="Hidden"
              value="hidden"
              style="display: contents;flex-wrap: nowrap;"

            ></v-radio>
          </v-radio-group>
        </div>

      
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        class="lightModeColor"
          text
          @click="isCustomizerOpen = false"
          :dark="isDarkMode"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script>
import AppCustomizerJson from "./AppCustomizer.json"

export default {
  data() {
    return {
      isCustomizerOpen: false,
      navbarType: 'sticky',
    }
  },
  created() {
  },
  computed: {
		isDarkMode: {
      get () {
        return this.$store.getters.getIsDarkMode
      }
		},
		skinTab: {
			get () {
				return AppCustomizerJson.skin
			},
			set (newVal) {
				this.$store.dispatch('getTheme', newVal)
        
				if (newVal == 'default') {
					this.$store.commit('SET_ISDARKMODE', null)
				}
				else if (newVal == 'dark') {
					this.$store.commit('SET_ISDARKMODE', true)
				}
				else if (newVal == 'light') {
					this.$store.commit('SET_ISDARKMODE', false)
				}
        AppCustomizerJson.skin = JSON.parse(JSON.stringify(newVal))
			}
		},
    navbarTypeTab: {
			get () {
				return AppCustomizerJson.navbarType || 'sticky';
			},
			set (newVal) {
        AppCustomizerJson.navbarType = JSON.parse(JSON.stringify(newVal))
			}
		}
	},
  mounted() {
    
  },
  methods: {
  }

}
  </script>
<style>
.appCustomizer {
  position: fixed;
  bottom: 30px;
  right: 0px;
}
#i35964 .v-toolbar__content{
  padding: 0px 0px;
}
.themeActiveTabs {
	background-color: var(--container-acive-color2);
}
.v-messages {
  display: none;
}
</style>