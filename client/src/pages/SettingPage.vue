<template>
  <div id="SettingPage">
    <v-card>
      <v-app-bar
        absolute
        color="#fcb69f"
        dark
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <v-toolbar-title>
          <h3>
            <v-icon size="40px" class="mr-1">mdi-settings</v-icon>Settings
          </h3>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          :to="{ path: '/home' }"
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
        <v-card
          outlined
          color="white"
          v-if="n == 1"
          class="ml-5 d-flex flex-column"
          width="300px"
        >
          <h3 class="mb-2 ml-4">Company Information</h3>
          <v-list-item
            v-for="(item, index) in dataCompony"
            :key="`${index}-${item}`"
            :to="item[2]"
            link
          >
            <v-col class="brown lighten-5 pa-3">
              <v-icon>{{ item[0] }}</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">{{ item[1] }}</v-list-item-title>
          </v-list-item>
          <h3 class="mb-2 ml-4 mt-2">User Information</h3>

          <v-list-item
            v-for="(item, index) in dataUser"
            :key="`${index}-${item}`"
            :to="item[2]"
            link
          >
            <v-col class="brown lighten-5 pa-3">
              <v-icon>{{ item[0] }}</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">{{ item[1] }}</v-list-item-title>
          </v-list-item>
        </v-card>

        <v-card
          class="text-center"
          outlined
          color="white"
          v-if="n == 2"
          height="auto"
          width="800px"
        >
          <router-view></router-view>
        </v-card>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "SettingPage",
  components: {},
  data: () => ({
    dataCompony: [
      [
        "mdi-domain",
        "Edit Company Profile",
        "/homePage/settingPage/companyPage"
      ],
      ["mdi-heart-outline", "Edit Logo", "/homePage/settingPage/logoPage"],
      ["mdi-stamper", "Edit Stamp", "/homePage/settingPage/stampPage"],
      [
        "mdi-counter",
        "Edit Running Number",
        "/homePage/settingPage/runNumberPage"
      ],
      [
        "mdi-file-document-outline",
        "Edit Document Title",
        "/homePage/settingPage/documentTitlePage"
      ],
      [
        "mdi-file-outline",
        "Edit Document Template",
        "/homePage/settingPage/documentTemplatePage"
      ],
      [
        "mdi-plus-circle",
        "Edit Document Features",
        "/homePage/settingPage/documentFeaturePage"
      ],
      [
        "mdi-comment-outline",
        "Edit Default Remark",
        "/homePage/settingPage/defaultRemarkPage"
      ],
      [
        "mdi-email",
        "Edit Default Email",
        "/homePage/settingPage/defaultEmailPage"
      ],
      [
        "mdi-dots-horizontal",
        "Other Settings",
        "/homePage/settingPage/otherSettingsPage"
      ],
      [
        "mdi-file-document-box-outline",
        "Download",
        "/homePage/settingPage/downloadPage"
      ]
    ],
    dataUser: [
      [
        "mdi-fountain-pen-tip",
        "Edit Electronic Signature",
        "/homePage/settingPage/signeturePage"
      ],
      [
        "mdi-account-edit-outline",
        "Edit User",
        "/homePage/settingPage/userPage"
      ]
    ]
  })
};
</script>
