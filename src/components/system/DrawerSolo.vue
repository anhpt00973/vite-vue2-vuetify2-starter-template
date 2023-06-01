<template>
  <v-navigation-drawer
  :mini-variant="miniVariant"
  :clipped="clipped"
  app
  fixed
  permanent
>
  <div 
    v-if="!miniVariant"
    class="text-center" 
    :style="{ margin: '13px', 
    color: (1>0) ? 'var(--highlight-text-color2)' : '',
    cursor: 'pointer',
    }"
    @click.stop="miniVariant = !miniVariant"
    title="Click để thu gọn"
    >
    <b style="font-size:25px;">Vue</b>
    <span style="font-size:25px;font-weight:200;"> Customizer</span>
  </div>
  <div v-if="miniVariant" class="text-center">
    <v-btn
      style="margin-top: 13.5px; margin-bottom: 13.5px"
      icon
      color="var(--text-color2)"
      @click.stop="
        {
          miniVariant = !miniVariant;
          groupOpened = false;
        }
      "
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </div>
  <v-divider color="#b3b3b3"></v-divider>
  
  <v-list>
    <!-- phong cách bỏ drop down của những item không có group -->
    <v-list>
      <template v-for="(item, index) in items">
        <v-list-item 
        v-if="!item.children" 
        :key="index" 
        @click="clickMenuLeft(item.to, index)"
        :class="[ 
          $route.path.includes(item.to) ? 'active-menu' : ''
        ]" 
        >
          <v-list-item-action>
            <v-icon 
            size="20px"
            :class="[ 
              $route.path.includes(item.to) ? 'active-menu-icon' : ''
            ]" 
            >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title 
            :class="[ 
              $route.path.includes(item.to) ? 'active-menu-text' : ''
            ]" 
            >{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group 
        v-if="item.children" 
        :key="index" 
        :value="!miniVariant" 
        @click="clickGroupMenuLeft(item.children, index)"
        :class="[ 
          $route.path.includes(item.children) ? 'active-menu' : ''
        ]" 
        >
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon size="20px" 
              :class="[ 
                item.children.some(child => $route.path.includes(child.to)) ? 'active-menu-text' : 'theme--light.v-icon'
              ]" 
              >{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title 
              :class="[ 
                item.children.some(child => $route.path.includes(child.to)) ? 'active-menu-text' : ''
              ]" 
              >{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          
          <v-list-item 
          v-for="(item1, index1) in item.children" :key="index1" 
          router 
          :to="item1.to" 
          link
          class="ml-3"
          @click="clickChildMenuLeft(item1.to, index1)"
          >
            <v-list-item-action>
              <v-icon class="ml-2"
              :class="[ 
                $route.path.includes(item.children[index1].to) ? 'active-menu-text' : ''
              ]" 
              > mdi-chevron-right </v-icon>
            </v-list-item-action>
            <v-list-item-title 
            :class="[ 
                $route.path.includes(item.children[index1].to) ? 'active-menu-text' : ''
              ]" 
            > {{ item1.title }}</v-list-item-title>
            
          </v-list-item>
        </v-list-group>

      </template>
    </v-list>
  
  </v-list>

  <template v-slot:append style="background-color: var(--text-color2)">
    <div class="pa-2" @click.stop="logout()" style="cursor:pointer;border-right:0px;">
        <template>
          <v-btn text  class="px-2 ml-0">
            <v-icon size="20px" style="color:var(--navbar-text-color1);">mdi-logout-variant</v-icon> 
            <span class="dang-xuat" style="color:var(--navbar-text-color1);margin-left:13px;">&nbsp; &nbsp;Đăng Xuất</span>
          </v-btn>
        </template>
    </div>
  </template>
  
</v-navigation-drawer>
</template>

<script>
export default {
  name: 'DrawerSolo',
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      mini: true,
      clipped: false,
      fixed: false,
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
            {
              title: "Quote",
              to: "/quote",
            },
          ],
        },
      ].map((item) => {
        // item.title = item.title.toUpperCase();
        if (item.children) {
          item.children.map((child) => {
            // child.title = child.title.toUpperCase();
            return child;
          });
        }
        return item;
      }),
    }
  },
  created () {
    let vm = this
    vm.$store.commit('SET_DRAWER', !vm.isMobile)
  },
  mounted () {
    let vm = this
    vm.mini = vm.isMobile ? false : true
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
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    }
  },
  watch: {
    isMobile (val) {
      this.mini = val ? false : true
      this.$store.commit('SET_DRAWER', !val)
    }
  },
  methods: {
    clickMenuLeft(to) {
      if (to) {
        this.$router.push(to)
        return;
      }
    },
    clickGroupMenuLeft(to, index) {
      this.miniVariant = false;
      this.activeIndex = index;
    },
    clickChildMenuLeft(to, index){
      this.miniVariant = false;
      // $route.path.includes(item.children[index1].to) 
      if (this.$route.path.includes(to)) {
        console.log('')
      }
    },
    logout() {
      var vm = this;
      localStorage.removeItem("user");
      vm.$cookies.set("Token", "");
      vm.$cookies.set("RefreshToken", "");
      vm.$router.push("/login");
    },
  },
}
</script>
<style lang="scss">
.logo-banner {
width: 40px;
height: 40px;
}
.v-main {
padding: 0px;
background-color: var(--background-family1);
}

.body-page {

}

.theme--light.v-app-bar.v-toolbar.v-sheet {
background-color: var(--background-family1) !important;
}
.v-navigation-drawer {
font-family: "Roboto", sans-serif;
}

.v-navigation-drawer__content {
background-color: var(--container-background1);
border-right: 0px;
box-shadow: rgb(0, 94, 255) 0px 8px 24px;
}
//herre var(--main-color)
.v-navigation-drawer__content .v-list-item__title {
/* color: var(--navbar-text-color); */
font-size: 14px;
line-height: inherit;
}

.v-navigation-drawer__content a.v-list-item--active {
background: #868686b5;
}

.v-toolbar__title span {
font-family: "Roboto", sans-serif;
font-style: normal;
font-size: 18px;
text-align: left;
float: left;
color: var(--container-background1);
}

.v-sheet.v-toolbar {
border-bottom: 2px solid #cdcdcd;
box-shadow: none !important;
}

.title-banner {
display: flex;
font-family: "Roboto Slab";
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 24px;
color: var(--main-color);
letter-spacing: 0.05em;
align-content: center;
flex-wrap: wrap;
}
.menuLeft .v-list-group__header .v-icon {
color:var(--text-color2);
}

.menuLeft .v-list-item__icon:first-child {
margin-right: 15px !important;
}

.menuLeft .v-list-item__icon:last-child {
min-width: auto !important;
}
.v-navigation-drawer__append {
background: var(--container-background1);
}
.dang-xuat {
font-family: "Roboto", sans-serif;
font-style: normal;
/* color: var(--navbar-text-color); */
font-size: 14px;
line-height: inherit;
}

.themeActiveTabs {
background-color: var(--container-acive-color1); // dark mode choice
}
.v-tab {
text-transform: none;
}
#tabs155 .v-tabs-bar__content {
display: flex;
max-height: 20px;
max-width: 40px;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
margin-right: 25px;
margin-left: 0px;
}
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {
}
.v-btn:hover {
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
color: var(--navbar-text-color1); //màu mặc định của chữ nav
}
.theme--light.v-icon {
color: var(--navbar-text-color1); // màu mặc định icon nav
}
.v-list-item__title, .v-list-item__subtitle {
color: var(--navbar-text-color1);  // màu mặc định của  menu con
}
.active-menu {
background-color: #b3b2b2b5;  // màu nên menu đc active
}
.v-navigation-drawer__content a.v-list-item--active {
background-color: #b3b2b2b5; //màu nền child menu đc active
}
.active-menu-text {
color: var(--highlight-text-color1) !important; // màu chữ trong menu đc active
}
.active-menu-icon {
color: var(--highlight-text-color1) !important; // màu icon trong menu đc active
}
.v-list .v-list-item--active .v-icon {
color: var(--navbar-text-color1);  // các icon của menu child đc acive
}
.v-list-item__title .active-menu-text {
color: var(--highlight-text-color1) !important;  
}
.v-list .v-list-item--content .v-list-item-title{
color: var(--highlight-text-color1) !important;  
}
</style>