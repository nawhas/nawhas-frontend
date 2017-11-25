<template>
  <div>
    <section>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h3>Add Track {{ album.name }} | {{ album.year }} | {{ reciter.name }}</h3>
        </v-flex>
      </v-layout>
      <v-form enctype="multipart/form-data">
        <v-layout row>
          <v-flex>
            <v-text-field
              label="Track Name"
              v-model="track.name"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-text-field
              label="Track Number"
              v-model="track.number"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            Audio File
            <input
              type="file"
              @change="onFileChange"
              name="audio"
            >
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            Video File
            <input
              type="file"
              @change="onFileChange"
              name="video"
            >
          </v-flex>
        </v-layout>
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

  export default {
    name: 'Reciter-Create',
    methods: {
      uploadForm() {
        const form = new FormData();
        form.append('name', this.album.name);
        form.append('artwork', this.album.artwork);
        if (this.album.updatedArtwork) {
          form.append('updatedArtwork', this.album.updatedArtwork);
        }
        form.append('year', this.album.year);
        client.post(`/v1/reciters/${this.reciter.slug}/albums/${this.album.year}`, form).then(() => {
          this.$router.push(`/reciters/${this.reciter.slug}`);
        });
      },
      onFileChange(e) {
        if (e.target.name === 'audio') {
          this.track.audio = e.target.files[0];
        } else if (e.target.name === 'video') {
          this.track.video = e.target.files[0];
        }
      },

      setData(data) {
        this.album.id = data.id;
        this.album.name = data.name;
        this.album.artwork = data.artwork;
        this.album.year = data.year;
        this.reciter = data.reciter;
      },
    },
    data() {
      return {
        reciter: {},
        album: {'id': null, 'name': null, 'artwork': null, 'year': null, 'updatedArtwork': null},
        track: {'name': null, 'video': null, 'audio': null, 'trackNumber': null, 'language': 'en'},
      };
    },
    created() {
      client.get(`/v1/reciters/${this.$route.params.reciter}/albums/${this.$route.params.album}`).then(response => {
        this.setData(response.data);
      });
    }
  };
</script>
