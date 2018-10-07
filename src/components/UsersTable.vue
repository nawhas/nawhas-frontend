<template>
  <v-data-table
    :headers="headers"
    :items="users"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" scope="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.role }}</td>
      <td>{{ props.item.createdAt }}</td>
      <td v-if="props.item.role === 'admin'">
        <v-btn>Make Contributor</v-btn>
      </td>
      <td v-else>
        <v-btn>Make Admin</v-btn>
      </td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: 'UsersTable',
    props: ['users'],
    data() {
      return {
        headers: [
          { text: '#', align: 'left', sortable: true, value: 'id' },
          { text: 'Name', align: 'left', sortable: true, value: 'name' },
          { text: 'Email', align: 'left', sortable: true, value: 'email' },
          { text: 'Role', align: 'left', sortable: true, value: 'role' },
          { text: 'Created At', align: 'left', sortable: true, value: 'created_at' },
          { text: 'Actions', align: 'left', sortable: false, value: 'actions' },
        ]
      };
    },
  };
</script>
