<template>
  <!-- eslint-disable -->
  <v-container>
    <h1>Email Signature Generator</h1>
    <div class="elevation-2 mb-2 d-block mx-auto" style="width: 900px">
      <table
        class="emailSignature"
        style="
          box-sizing: border-box;
          height: 150px;
          padding: 15px 5px 15px 5px;
          width: 900px;
          background-color: white;
        "
        width="900"
        height="174"
      >
        <tbody style="box-sizing: border-box">
          <tr style="box-sizing: border-box">
            <!-- LOGO -->
            <td
              style="`
                margin: 0px;
                border: 0px;
                padding-left: 18px;
                padding-right: 18px;
                line-height: 0px;
                width: 267px;
                height: 160px;
                vertical-align: top;
              "
            >
              <a
                href="https://en.archoc.ca/"
                style="color: rgb(17, 85, 204)"
                target="_blank"
              >
                <img :src="archdioceses_logo" border="none" :style="logo" />
              </a>
            </td>
            <!-- CONTACT INFO -->
            <td
              style="
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                text-align: left;
                width: 564px;
              "
              valign="middle"
            >
              <table class="table" style="box-sizing: border-box; width: 564px">
                <tbody id="iwnyh" style="box-sizing: border-box">
                  <tr id="name-row" style="box-sizing: border-box">
                    <td
                      class="cell"
                      style="box-sizing: border-box; text-align: left"
                    >
                      <div
                        id="name-wrapper"
                        ref="nameWrapper"
                        style="display: inline-block"
                      >
                        <span
                          v-if="name && name.length > 0"
                          style="
                            font-family: Helvetica, sans-serif;
                            font-size: 18px;
                            line-height: 21px;
                            font-weight: 600;
                          "
                          >{{ name }}</span
                        >
                        <span
                          v-if="credentials.length > 0"
                          style="
                            font-family: Helvetica, sans-serif;
                            line-height: 11px;
                            font-size: 10px;
                          "
                          >,&nbsp;{{ credentials }}</span
                        >
                        <div class="divider" :style="dividerStyle"></div>
                      </div>
                    </td>
                  </tr>
                  <!-- <tr
                    style="
                      box-sizing: border-box;
                      line-height: 10px;
                      height: 4px;
                    "
                    valign="middle"
                  >
                    <td
                      class="cell"
                      style="box-sizing: border-box; height: 4px"
                      valign="middle"
                    >
                      <img
                        src="/images/divider.png"
                        alt=""
                        style="margin-bottom: 4px"
                      />
                    </td>
                  </tr> -->
                  <tr id="title-row" style="box-sizing: border-box">
                    <td class="cell" style="box-sizing: border-box">
                      <div style="box-sizing: border-box; text-align: left">
                        <span v-if="titleFR.length > 0">{{ titleFR }}</span
                        ><br v-if="titleFR.length > 0" />
                        <span v-if="titleEN.length > 0">{{ titleEN }}</span>
                      </div>
                    </td>
                  </tr>
                  <tr id="contact-row" style="box-sizing: border-box">
                    <td class="cell" id="it93y" style="box-sizing: border-box">
                      <table
                        width="100%"
                        style="
                          box-sizing: border-box;
                          padding: 0 0 0 0;
                          width: 525px;
                        "
                      >
                        <tbody style="box-sizing: border-box">
                          <tr style="box-sizing: border-box">
                            <td
                              class="cell"
                              style="
                                vertical-align: top;
                                box-sizing: border-box;
                                text-align: left;
                                font-size: 14px;
                                width: 40%;
                              "
                            >
                              <div
                                style="
                                  box-sizing: border-box;
                                  text-align: left;
                                  vertical-align: top;
                                "
                              >
                                {{ email }}<br />
                                {{ phone.office }}<br />
                                {{ formatedPhone }}
                                <span
                                  v-if="phone.mobile && phone.mobile.length > 1"
                                  >(mobile)</span
                                >
                              </div>
                            </td>
                            <td class="cell" style="width: 20px"></td>
                            <td
                              class="cell"
                              style="
                                box-sizing: border-box;
                                text-align: left;
                                font-size: 14px;
                                vertical-align: top;
                                width: 60%;
                              "
                            >
                              <div
                                style="
                                  box-sizing: border-box;
                                  text-align: left;
                                  width: 100%;
                                "
                              >
                                <span v-if="deptFR.length > 0">
                                  {{ deptFR }} </span
                                ><br v-if="deptFR.length > 0" />
                                <span v-if="deptEN.length > 0">
                                  {{ deptEN }} </span
                                ><br v-if="deptEN.length > 0" />
                                {{ address.street }}<br />

                                {{ address.city }}, {{ address.province }},
                                {{ address.postalCode }}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <!-- SOCIAL MEDIA ICONS ROW -->
                  <tr id="social-icons-row">
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td
                              v-for="item in Object.keys(social)"
                              :key="item"
                              style="padding-right: 5px"
                            >
                              <a
                                style="text-decoration: none"
                                :href="social[item].url"
                                target="_blank"
                                ><img :src="social[item].icon"
                              /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-alert class="alert" :class="{ active: alert }" dense type="success"
      >Signature Successfully Copied to Clipboard</v-alert
    >

    <v-container class="pt-5" style="max-width: 1200px">
      <v-form ref="form" v-model="valid" lazy-validation v-if="render">
        <v-row>
          <v-text-field
            dense
            v-model="name"
            label="Nom / Name"
            required
            class="col-8"
          ></v-text-field>

          <v-text-field
            dense
            v-model="credentials"
            label="Diplômes / Credentials"
            required
            class="col-4"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-col class="pa-0">
            <v-text-field
              dense
              class="col-12"
              v-model="deptFR"
              label="Département - français / Department - French"
              required
            ></v-text-field>
            <v-text-field
              dense
              class="col-12"
              v-model="deptEN"
              label="Département - anglais / Department - English"
              required
            ></v-text-field>
          </v-col>
          <v-col class="pa-0">
            <v-text-field
              dense
              class="col-12"
              v-model="titleFR"
              label="Titre - français / Title - French"
              required
            ></v-text-field>
            <v-text-field
              dense
              class="col-12"
              v-model="titleEN"
              label="Titre - anglais / Title - English"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-text-field
            dense
            v-model="email"
            :rules="emailRules"
            label="Courriel / Email"
            class="col-4"
            required
          ></v-text-field>

          <v-text-field
            dense
            v-model="phone.office"
            class="col-4"
            label="Numéro de téléphone du bureau / Office Phone"
            required
          >
          </v-text-field>

          <v-text-field
            dense
            v-model="phone.mobile"
            label="Numéro de téléphone cellulaire / Mobile"
            class="col-4"
            required
          ></v-text-field>
        </v-row>
        <!-- <v-btn
          small
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn> -->

        <v-btn small color="error" class="mr-4" @click="reset">
          Reset Form
        </v-btn>

        <v-btn
          class="btn-copy elevation-1"
          small
          color="primary"
          data-clipboard-target=".emailSignature"
          >COPY
        </v-btn>
      </v-form>
    </v-container>
  </v-container>
</template>
  
  <script>
import ClipboardJS from "clipboard";
import TabsComponent from "./TabsComponent.vue";

// IMAGES
import facebookIcon from "@/assets/images/icons8-facebook-24.png";
import instagramIcon from "@/assets/images/icons8-instagram-24.png";
import linkedinIcon from "@/assets/images/icons8-linkedin-24.png";
import twitterIcon from "@/assets/images/icons8-twitter-24.png";
import youtubeIcon from "@/assets/images/icons8-youtube-24.png";
import archdioceses_logo from "@/assets/images/archdioceses_logo.png";

//console.log("ClipBoard", ClipboardJS);

export default {
  components: { TabsComponent },
  name: "EmailCard",
  data() {
    return {
      render: true,
      logo: {
        height: "160px",
        width: "267px",
      },
      // facebookIcon,
      // instagramIcon,
      // linkedinIcon,
      // twitterIcon,
      // youtubeIcon,
      archdioceses_logo,
      social: {
        facebook: {
          icon: facebookIcon,
          url: "https://www.facebook.com/ottawacornwall",
        },
        instagram: {
          icon: instagramIcon,
          url: "https://www.instagram.com/ottawacornwall/",
        },
        linkedin: {
          icon: linkedinIcon,
          url: "https://www.linkedin.com/company/ottawacornwall/",
        },
        twitter: {
          icon: twitterIcon,
          url: "https://mobile.twitter.com/ottawacornwall",
        },
        youtube: {
          icon: youtubeIcon,
          url: "https://www.youtube.com/@archdiocese-archidioceseot854",
        },
      },
      valid: true,
      alert: false,
      name: "Geneviève Bonin-Labelle",
      credentials: "MBA, PhD",
      titleEN: "Director of Communications and Mission Promotion",
      titleFR: "Directrice des communications et de la promotion de la Mission",
      deptEN: "Communications et promotion de la Mission",
      deptFR: "Communications and Mission Promotion",
      email: "g.bonin-labell@archottawa.com",
      phone: {
        office: "613-738-5025 poste/ext 332",
        mobile: "613-795-2833",
      },
      address: {
        street: "200-1209, rue Michael St. N.",
        suite: "Suite 200",
        city: "Ottawa",
        province: "ON",
        postalCode: "K1J 7T2",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      dividerStyle: {
        height: "4px",
        width: "100%",
        backgroundImage: "linear-gradient(50deg, #2ca689, #3cacbc)",
      },
    };
  },
  computed: {
    formatedPhone() {
      let str = this.phone.mobile;
      //Filter only numbers from the input
      let cleaned = ("" + str).replace(/\D/g, "");

      //Check if the input is of correct length
      let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

      if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
      } else {
        return "";
      }
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    toggleAlert() {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 1500);
    },
  },
  mounted() {
    // console.log("target", target);
    this.$nextTick(() => {
      const _this = this;
      console.log("container", document.querySelector(".emailSignature"));

      const clipboard = new ClipboardJS(".btn-copy", {
        container: document.querySelector(".emailSignature"),

        //target: _target,
      });

      clipboard.on("success", function (e) {
        console.info("Action:", e.action);
        console.info("Text:", e.text);
        console.info("Trigger:", e.trigger);
        _this.toggleAlert();
        e.clearSelection();
      });
    });
  },
};
</script>
  
  <style scoped>
.card-wrapper {
  -webkit-box-shadow: 3px 1px 25px -6px #000000;
  box-shadow: 3px 1px 25px -6px #000000;
}
/* .divider {
  height: 4px;
  width: 100%;
  background-image: linear-gradient(50deg, #2ca689, #3cacbc);
} */

.alert {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.alert.active {
  opacity: 1;
}
</style>