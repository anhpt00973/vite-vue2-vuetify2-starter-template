<template>
  <v-app>
    <loading :active="isLoading" :can-cancel="true" :is-full-page="true" />
    <!-- <vue-confirm-dialog></vue-confirm-dialog> -->
    <VueConfirmDialog></VueConfirmDialog>

    <router-view></router-view>
  </v-app>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "App",
  components: {
    Loading,
    VueConfirmDialog: () => './views/ConfirmDialog.vue',
  },
  computed: {
    isLoading: function () {
      return this.$store.getters.getLoading;
    },
  },
  data: () => ({}),
};
</script>
<style lang="scss">
* {
  font-size: 13px;
}

.container-content {
  // min-height: calc(100vh - 109px);
}
.v-application {
}
/*
.v-application .primary--text {
  color: var(--container-background1) !important;
  caret-color: var(--container-background1)  !important;
}
*/
.flex-center {
  display: flex;
  align-items: center;
}

#bg-body {
  background: #eff5ff;
}

.justify-content-end {
  justify-content: end;
}

.justify-content-center {
  justify-content: center;
}

.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.row {
  margin: 0px !important;
}

.color-939393 {
  color: #939393;
}

.color-000 {
  color: #000;
}

.text-align-center {
  text-align: center;
}

.bg-fff {
  background: #fff !important;
}

.border-radius-5 {
  border-radius: 5px;
}

.border-2161B1 {
  height: 30px;
  border: 1px solid #2161b1;
  border-radius: 5px;
}

.color-939393 {
  color: #939393;
}

.font-weight-500 {
  font-weight: 500;
}

.row-hover:hover {
  background: #e8f1ff;
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
}

.cursor-pointer {
  cursor: pointer;
}
.h-full {
  height: 100%;
}

.w-full {
  width: 100%;
}

.color-2161B1 {
  color: #2161b1 !important;
}

.color-red {
  color: red !important;
}

.font-size-15 {
  font-size: 15px;
}

.title-page-ds {
  font-weight: 500 !important;
  font-size: 16px !important;
  line-height: 22px !important;
  text-transform: uppercase !important;
  letter-spacing: 1px;
}

.float-right {
  float: right;
}

.v-input:not(.v-input--checkbox, .v-input--switch) .v-input__slot {
  min-height: 30px !important;
  border: 1px solid #cdcdcd;
  box-shadow: none !important;
}

.v-input--selection-controls {
  padding: 0px !important;
  margin: 0px !important;
}

.v-input input {
  max-height: 30px !important;
}

.no-border-input .v-input__slot {
  border: none;
  margin-bottom: 0px;
  justify-content: center;
}

.v-input__control {
  min-height: 30px !important;
}

.v-btn {
  text-transform: none !important;
  font-weight: 400 !important;
  line-height: 16px;
  font-size: 14px !important;
  border-radius: 0px !important;
  min-height: 30px;
}

.align-items-center {
  align-items: center;
}

.v-text-field {
  padding-top: 0px !important;
  margin-top: 0px !important;
}

.v-input {
  border-radius: 0px !important;
}

.v-expansion-panel::before {
  box-shadow: none !important;
}

.v-expansion-panel {
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

// .v-expansion-panel-header {
//   border-bottom: 2px solid #2161b1;
//   padding: 0px 12px 8px 12px !important;
//   margin-bottom: 10px;
// }

// .v-expansion-panel--active > .v-expansion-panel-header,
// .v-expansion-panel-header {
//   min-height: auto !important;
// }

.v-expansion-panel-content__wrap {
  padding: 0px !important;
}

.v-text-field__details {
  padding: 0px !important;
  margin-bottom: 0px !important;
}

.v-expansion-panel:not(:first-child)::after {
  border-top: none !important;
}

.xemChiTietRow {
  min-height: 39px;
  border-bottom: 1px dashed #dadada;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.sticky {
  top: 10px;
  position: fixed !important;
}
label {
  color: var(--text-color1)!important;
}

.v-input--is-disabled .v-input__slot {
  background: #eee !important;
}

.v-select.v-select--chips.v-input--dense .v-select__selections {
  min-height: 30px !important;
}

.v-chip.v-size--default {
  height: 25px !important;
}

.theme--light.v-card > .v-card__text,
.theme--light.v-card > .v-card__subtitle {
  color: #000 !important;
}

.color-fff {
  color: #fff;
}

.v-input--is-disabled .v-text-field__details {
  color: #ff5252;
}

// hethonggiamsat
.breadcrums {
  color: #3171b1 !important;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
}

.breadcrums-title {
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
}

.v-dialog .v-sheet.v-toolbar {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
}

.v-dialog .v-card__actions {
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.v-dialog,
.v-sheet.v-card {
  border-radius: 0px !important;
}

.panel-thuoc-tinh-custom .v-expansion-panel {
  border: 1px solid #cdcdcd;
}

.panel-thuoc-tinh-custom .v-expansion-panel-header {
  background: #275fa3;
  color: #fff !important;
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  min-height: 30px !important;
  padding-top: 0px;
  padding-bottom: 0px;
  display: block;
  text-align: center !important;
  width: 101%;
  margin-top: -1px;
  margin-left: -1px;

}
.panel-thuoc-tinh-custom .v-icon {
  color: #fff !important;
}
.panel-thuoc-tinh-custom .v-expansion-panel-header__icon {
  margin-left: 0px !important;
}
.panel-thuoc-tinh-custom .v-expansion-panel-header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-data-bangdieukhien {
  margin: auto;
  font-size: 22px;
  color: #a5a5a5;
}
.icon-popup-bangdieukhien {
  font-size: 30px;
  display: flex;
  height: 30px;
}

.v-expansion-panel:not(:first-child) {
  margin-top: 20px !important;
}

.panel-bang-dieu-khien-custom .v-expansion-panel-header {
  padding: 0;
  min-height: 30px !important;
}

.vue-grid-item {
  border: 1px solid #eee;
  display: inline-grid;
}

.vue-grid-item.resizing {
  opacity: 0.9;
}

.vue-grid-item .text-grid {
  min-height: 30px;
  // background: #3171b1;
  color: #fff;
  padding: 0px;
  justify-content: center;
  border-bottom: 1px solid #f0f1f3;
}
.vue-grid-item .body-grid {
  padding: 0px;
  height: calc(100% - 30px);
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-grid-item a {
  text-decoration: auto;
  color: #000 !important;
  font-weight: 600;
}

.v-expansion-panel a {
  text-decoration: auto;
}

.v-data-table .v-data-table-header tr th:first-child,
.v-data-table tbody tr td:first-child {
  border-left: 0px solid #dedede;
}

.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr > th {
  border-bottom: 1px solid #dedede;
}

.text-transform-uppercase {
  text-transform: uppercase;
}

#pagination-table {
  color: var(--container-background1);
}

#pagination-table ul {
  padding-left: 0px !important;
}

#pagination-table ul li {
  list-style: none;
  cursor: pointer;
  color: var(--container-background1);
}

#pagination .v-text-field__details {
  display: none;
}

#pagination .v-input__slot {
  margin: 0px 10px 0px 10px;
  width: 60px;
  /* border-bottom: 1px solid var(--container-background1); */
}

#pagination .v-select__slot {
  height: 28px;
}

#pagination .v-input {
  margin: 0;
  padding: 0;
}

#pagination .v-input__slot {
  border: none !important;
}

.dashboard-layout {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
}

.dashboard-layout-col {
  margin: 12px;
  max-width: 240px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  overflow: hidden;
}

.banner-dashboard {
  width: 240px;
  height: 140px;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  text-shadow: rgb(204 204 204) 0px 1px 0px, rgb(0 0 0 / 10%) 0px 1px 3px,
    rgb(0 0 0 / 10%) 0px 10px 10px, rgb(0 0 0 / 10%) 0px 20px 20px;
}
.info-dashboard .tags {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-dashboard .header {
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.54);
}

.info-dashboard .text {
  line-height: 25px;
}

.dashboard-active {
  background: linear-gradient(to right, rgb(85, 152, 57), rgb(51, 91, 34));
}

.dashboard-locked {
  background: linear-gradient(to right, #b55c56, #6e2924);
}
.dashboard-draft {
  background: linear-gradient(to right, #837d7d, #342b2b);
}

.info-dashboard .text1 {
  font-size: 11px;
  font-weight: 400;
  line-height: 1.66;
}

.no-data {
  margin: auto;
  font-size: 22px;
  color: #a5a5a5;
  height: 70vh;
  display: flex;
  align-items: center;
}

.panel-bang-dieu-khien-custom .v-expansion-panel-header__icon {
  margin-right: 10px;
}
</style>
