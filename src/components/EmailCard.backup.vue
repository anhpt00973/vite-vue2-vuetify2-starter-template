<template>
  <!-- eslint-disable -->
  <v-container>
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
        height="150"
      >
        <tbody style="box-sizing: border-box">
          <tr style="box-sizing: border-box">
            <td
              style="
                margin: 0px;
                border: 0px;
                padding-left: 18px;
                padding-right: 18px;
                line-height: 0px;
                width: 200px;
              "
            >
              <a
                href="http://atomicmotion.com/"
                style="color: rgb(17, 85, 204)"
                target="_blank"
              >
                <img
                  src="/images/archdioceses_logo.png"
                  border="none"
                  height="200"
                  width="200"
                  style="max-width: 100%; height: auto"
                />
              </a>
            </td>
            <td
              style="
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                text-align: left;
              "
              valign="middle"
            >
              <table class="table" style="box-sizing: border-box">
                <tbody id="iwnyh" style="box-sizing: border-box">
                  <tr style="box-sizing: border-box">
                    <td
                      class="cell"
                      style="box-sizing: border-box; text-align: left"
                    >
                      <span
                        style="
                          font-family: Helvetica, sans-serif;
                          font-size: 18px;
                          line-height: 21px;
                          font-weight: 600;
                        "
                        >{{ name }},</span
                      >
                      <span
                        style="
                          font-family: Helvetica, sans-serif;
                          line-height: 11px;
                          font-size: 10px;
                        "
                        >&nbsp;{{ credentials }}</span
                      >
                    </td>
                  </tr>
                  <tr
                    style="box-sizing: border-box; line-height: 10px"
                    valign="middle"
                  >
                    <td
                      class="cell"
                      style="box-sizing: border-box"
                      valign="middle"
                    >
                      <img
                        src="/images/divider.png"
                        alt=""
                        style="margin-bottom: 4px"
                      />
                      <!-- <div
                        style="border-bottom: 3px solid #27a770; width: 60px"
                      ></div> -->
                    </td>
                  </tr>
                  <tr style="box-sizing: border-box">
                    <td class="cell" style="box-sizing: border-box">
                      <div style="box-sizing: border-box; text-align: left">
                        {{ titleFR }}<br />
                        {{ titleEN }}
                      </div>
                    </td>
                  </tr>
                  <tr id="i2tpm" style="box-sizing: border-box">
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
                                box-sizing: border-box;
                                text-align: left;
                                font-size: 14px;
                                width: 50%;
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
                                <span v-if="phone.mobile.length > 1"
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
                                width: 50%;
                              "
                            >
                              <div
                                style="
                                  box-sizing: border-box;
                                  text-align: left;
                                  width: 100%;
                                "
                              >
                                {{ address.street }} {{ address.suite }}<br />

                                {{ address.city }}, {{ address.province }},
                                {{ address.postalCode }}
                              </div>
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

    <v-container class="pt-5">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-text-field
            dense
            v-model="name"
            label="Name"
            required
            class="col-8"
          ></v-text-field>
          <v-text-field
            dense
            v-model="credentials"
            label="Credentials"
            required
            class="col-4"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            dense
            class="col-6"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            dense
            class="col-6"
            v-model="address.suite"
            label="Office"
            required
          ></v-text-field>
          <v-text-field
            dense
            class="col-12"
            v-model="titleFR"
            label="Title French"
            required
          ></v-text-field>
          <v-text-field
            dense
            class="col-12"
            v-model="titleEN"
            label="Title English"
            required
          ></v-text-field>
        </v-row>
        <v-row>
          <v-text-field
            dense
            class="col-6"
            v-model="phone.office"
            label="Phone Office"
            required
          ></v-text-field>
          <v-text-field
            dense
            class="col-6"
            v-model="phone.mobile"
            label="Mobile"
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

        <!-- <v-btn small color="warning" class="mr-4" @click="resetValidation">
          Reset Validation
        </v-btn> -->

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
//console.log("ClipBoard", ClipboardJS);

export default {
  name: "EmailCard",
  data() {
    return {
      valid: true,
      alert: false,
      name: "Geneviève Bonin-Labelle",
      credentials: "MBA, PhD",
      titleFR: "Directrice des communications et de la promotion de la Mission",
      titleEN: "Director of Communications and Mission Promotion",
      email: "g.bonin-labell@archottawa.com",
      phone: {
        office: "613-738-5025 poste/ex 332",
        mobile: "613-795-2833",
      },
      address: {
        street: "1209, Rue Michael N Street",
        suite: "Suite 200",
        city: "Ottawa",
        province: "On",
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

.alert {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.alert.active {
  opacity: 1;
}
</style>