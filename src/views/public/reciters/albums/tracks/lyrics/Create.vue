<template>
  <div>
    <section>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h4>Add Lyrics for Track {{ track.name }}</h4>
        </v-flex>
      </v-layout>
      <v-form>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              label="Lyric Text"
              v-model="lyric.text"
              multiLine
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-btn primary @click="uploadForm">Submit</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </section>
  </div>
</template>

<script>
  import {getTrack} from '@/services/tracks';
  import client from '@/services/client';

  export default {
    name: 'LyricsCreate',
    data() {
      return {
        track: null,
        lyric: [
          {'text': null}
        ],
      };
    },
    methods: {
      setTrack(track) {
        this.track = track;
      },
      uploadForm() {
        const form = new FormData();
        form.append('text', this.lyric.text);
        form.append('language', 'en');
        form.append('track_id', this.track.id);
        client.post(`/v1/reciters/${this.track.album.reciter.slug}/albums/${this.track.album.year}/tracks/${this.track.slug}/lyrics`, form).then(response => {
          this.$router.push(`/reciters/${this.track.album.reciter.slug}/albums/${this.track.album.year}/tracks/${this.track.slug}`);
        });
      },
    },
    beforeRouteEnter(to, from, next) {
      getTrack(to.params.reciter, to.params.album, to.params.track).then((response) => {
        next((vm) => vm.setTrack(response.data));
      });
    },
    beforeRouteUpdate(to, from, next) {
      this.setTrack(null);
      getTrack(to.params.reciter, to.params.album, to.params.track).then((response) => {
        this.setTrack(response.data);
        next();
      });
    },
  };
</script>
