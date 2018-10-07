<template>
  <div>
    <v-flex md10 offset-md1>
      <v-layout row>
        <h3>Manage Users</h3>
      </v-layout>
      <v-layout row>
        <h4>Admin Users</h4>
      </v-layout>
      <v-layout row>
        <userstable :users="adminUsers"></userstable>
      </v-layout>
      <v-layout row>
        <h4>Non-Admin Users</h4>
      </v-layout>
      <v-layout row>
        <userstable :users="noAdminUsers"></userstable>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
  import {getNoAdminUsers, getAdminUsers} from '../../services/users';
  import Userstable from '../../components/UsersTable';

  export default {
    name: 'Users',
    components: {
      Userstable,
    },
    mounted() {
      getNoAdminUsers()
        .then(response => {
          this.noAdminUsers = response.data.data;
        });
      getAdminUsers()
        .then(response => {
          this.adminUsers = response.data.data;
        });
    },
    data() {
      return {
        noAdminUsers: null,
        adminUsers: null
      };
    }
  };
</script>
