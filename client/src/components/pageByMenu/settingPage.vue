<template>
  <div id="settingPage">
    <v-card>
      <v-app-bar absolute color="#fcb69f" dark src="https://picsum.photos/1920/1080?random">
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
        </template>
        <v-toolbar-title>
          <h3>
            <v-icon size="40px" class="mr-1">mdi-settings</v-icon>Settings
          </h3>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          @click="goBack"
          height="60px"
          width="auto"
          color="rgba(200,84,100,.5), rgba(128,208,199,.8)"
        >
          <h1 class="display-3">X</h1>
        </v-btn>
      </v-app-bar>
    </v-card>
    <v-card class="d-flex justify-start my-12">
      <v-card outlined color="white" class="mt-10" v-for="n in 2" :key="n">
        <v-card outlined color="white" v-if="n==1" class="ml-5 d-flex flex-column" width="300px">
          <h3 class="mb-2 ml-4">Company Information</h3>
          <v-list-item
            v-for="(item,index) in dataCompony"
            :key="`${index}-${item}`"
            @click="checkChildCompany(index)"
            link
          >
            <v-col class="brown lighten-5 pa-3">
              <v-icon>{{item[0]}}</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">{{item[1]}}</v-list-item-title>
          </v-list-item>
          <h3 class="mb-2 ml-4 mt-2">User Information</h3>

          <v-list-item
            v-for="(item,index) in dataUser"
            :key="`${index}-${item}`"
            @click="checkChildUser(index)"
            link
          >
            <v-col class="brown lighten-5 pa-3">
              <v-icon>{{item[0]}}</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">{{item[1]}}</v-list-item-title>
          </v-list-item>
        </v-card>

        <v-card class="text-center" outlined color="white" v-if="n==2" height="auto" width="800px">
          <router-view></router-view>
        </v-card>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "settingPage",
  components: {},
  data: () => ({
    dataCompony: [
      ["mdi-domain", "Edit Company Profile"],
      ["mdi-heart-outline", "Edit Logo"],
      ["mdi-stamper", "Edit Stamp"],
      ["mdi-counter", "Edit Running Number"],
      ["mdi-file-document-outline", "Edit Document Title"],
      ["mdi-file-outline", "Edit Document Template"],
      ["mdi-plus-circle", "Edit Document Features"],
      ["mdi-comment-outline", "Edit Default Remark"],
      ["mdi-email", "Edit Default Email"],
      ["mdi-dots-horizontal", "Other Settings"],
      ["mdi-file-document-box-outline", "Download"]
    ],
    dataUser: [
      ["mdi-fountain-pen-tip", "Edit Electronic Signature"],
      ["mdi-account-edit-outline", "Edit User"]
    ]
  }),
  methods: {
    goBack() {
      window.location.href = "http://localhost:8080/#/homePage/mainPage";
    },
    checkChildCompany(index) {
      if (index == 0) {
        window.location.href =
          "http://localhost:8080/#/settingPage/companyPage";
      }
      if (index == 1) {
        window.location.href = "http://localhost:8080/#/settingPage/logoPage";
      }
      if (index == 2) {
        window.location.href = "http://localhost:8080/#/settingPage/stampPage";
      }
      if (index == 3) {
        window.location.href =
          "http://localhost:8080/#/settingPage/runNumberPage";
      }
      if (index == 4) {
        window.location.href =
          "http://localhost:8080/#/settingPage/documentTitlePage";
      }
      if (index == 5) {
        window.location.href =
          "http://localhost:8080/#/settingPage/documentTemplatePage";
      }
      if (index == 6) {
        window.location.href =
          "http://localhost:8080/#/settingPage/documentFeaturePage";
      }
      if (index == 7) {
        window.location.href =
          "http://localhost:8080/#/settingPage/defaultRemarkPage";
      }
      if (index == 8) {
        window.location.href =
          "http://localhost:8080/#/settingPage/defaultEmailPage";
      }
      if (index == 9) {
        window.location.href =
          "http://localhost:8080/#/settingPage/otherSettingsPage";
      }
      if (index == 10) {
        window.location.href =
          "http://localhost:8080/#/settingPage/downloadPage";
      }
    },
    checkChildUser(index) {
      if (index == 0) {
        window.location.href =
          "http://localhost:8080/#/settingPage/signeturePage";
      }
      if (index == 1) {
        window.location.href = "http://localhost:8080/#/settingPage/userPage";
      }
    }
  }
};
</script>