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

          <v-list-item :to="{ name: 'company' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-domain</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Company Profile</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'logo' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-heart-outline</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Edit Logo</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'stamp' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-stamper</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Edit Stamp</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'run-number' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-counter</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Running Number</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'document-title' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-file-document-outline</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Document Title</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'document-template' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-file-outline</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Document Template</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'document-feature' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-plus-circle</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Document Features</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'default-remark' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-comment-outline</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Default Remark</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'default-email' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-email</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Default Email</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'other-settings' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Other Settings</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'download' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-file-document-box-outline</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Download</v-list-item-title>
          </v-list-item>

          <h3 class="mb-2 ml-4 mt-2">User Information</h3>

          <v-list-item :to="{ name: 'signeture' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-fountain-pen-tip</v-icon>
            </v-col>
            <v-list-item-title class="pl-3"
              >Edit Electronic Signature</v-list-item-title
            >
          </v-list-item>

          <v-list-item :to="{ name: 'user' }" link>
            <v-col class="brown lighten-5 pa-3">
              <v-icon>mdi-account-edit-outline</v-icon>
            </v-col>
            <v-list-item-title class="pl-3">Edit User</v-list-item-title>
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
  name: "SettingPage"
};
</script>
