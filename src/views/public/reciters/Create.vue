<template>
    <div>
        <section>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <h3>Create new Reciter</h3>
                </v-flex>
            </v-layout>
            <v-form enctype="multipart/form-data">
                <v-layout row>
                    <v-flex>
                        <v-text-field
                                label="Reciter Name"
                                v-model="reciter.name"
                                required
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <v-text-field
                                label="Reciter description"
                                v-model="reciter.description"
                                multi-line
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <file-upload></file-upload>
                <v-layout row>
                    <v-flex xs12 sm1 offset-sm11>
                        <v-btn primary @click="uploadForm">Submit</v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
        </section>
    </div>
</template>

<script>
  import client from '@/services/client';
  import FileUpload from '@/components/FileUpload';

  export default {
    name: 'Reciter-Create',
    components: {
      FileUpload,
    },
    methods: {
      uploadForm() {
        client.post('/v1/reciters', this.reciter).then((response) => {
          console.log(response);
        });
      },
    },
    data() {
      return {
        reciter: {'name': null, 'avatar': null, 'description': null},
      };
    },
  };
</script>