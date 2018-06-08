<template>
  <v-flex xs12 sm6 offset-sm3>
    <v-layout row>
      <v-flex>
        <h3>Update {{ track.name }} | {{ album.name }} | {{ reciter.name }}</h3>
      </v-flex>
    </v-layout>
    <v-form method="patch" enctype="multipart/form-data">
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
            v-model="track.trackNumber"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          Current Track
          <a-player v-if="track.audio" :mutex="true" :music="{
                    title: track.name,
                    author: reciter.name,
                    url: track.audio,
                    pic: album.artwork,
                  }"></a-player>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          Change Audio
          <input
            type="file"
            @change="onFileChange($event)"
            name="audio"
          >
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-text-field
            label="YouTube Link To VIdeo"
            v-model="track.video"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-btn primary @click="uploadForm()">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-flex>
</template>

<script>
  import VueAplayer from 'vue-aplayer';
  import {getTrack, updateTrack} from '@/services/tracks';

  export default {
    name: 'Track-Update',
    created() {
      console.log();
      getTrack(this.$route.params.reciter, this.$route.params.album, this.$route.params.track)
        .then((response) => {
          this.setData(response.data);
        });
    },
    data() {
      return {
        reciter: {},
        album: {},
        track: {
          name: null,
          slug: null,
          audio: null,
          video: null,
          trackNumber: null,
          updatedAudio: null
        }
      };
    },
    components: {
      'a-player': VueAplayer
    },
    methods: {
      onFileChange(e) {
        this.track.updatedAudio = e.target.files[0];
      },
      uploadForm() {
        const form = new FormData();
        form.append('name', this.track.name);
        form.append('updated_audio', this.track.updatedAudio);
        form.append('video', this.track.video);
        form.append('number', this.track.trackNumber);
        updateTrack(this.reciter.slug, this.album.year, this.track.slug, form)
          .then(() => {
            this.$router.push({ name: 'Track-Page', params: { reciter: this.reciter.slug, album: this.album.year, track: this.track.slug } });
          });
      },
      setData(data) {
        this.reciter = data.reciter;
        this.album = data.album;
        this.track.name = data.name;
        this.track.audio = data.audio;
        this.track.trackNumber = data.number;
        this.track.slug = data.slug;
      }
    },
  };
</script>

<style scoped>

</style>