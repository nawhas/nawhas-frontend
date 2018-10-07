<template>
  <div>
    <h3>Admin Users</h3>
    <userstable :users="adminUsers"></userstable>
    <br>
    <hr>
    <br>
    <h3>Non-Admin Users</h3>
    <userstable :users="noAdminUsers"></userstable>
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
