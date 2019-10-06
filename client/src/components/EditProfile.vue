<template>
  <div class="col-md-8 m-auto">
    <form class="login-container" @submit.prevent="onSubmitHandler">
      <div class="w-100">
        <div class="login-header-primary">
          <h4>Edit Profile</h4>
        </div>
        <!-- <div class="login-header-primary mb-3 error">{{msg}}</div> -->
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="profile.handle"
          class="form-control"
          autocomplete="off"
          aria-autocomplete="off"
          placeholder="* Profile Handle"
          :class="{ 'is-invalid': submitted && $v.profile.handle.$error }"
        />
        <div v-if="submitted && $v.profile.handle.$error" class="invalid-feedback">
          <span v-if="!$v.profile.handle.required">Handle is required</span>
        </div>
        <span>A unique handle for your profile URL. Your full name, company name, nickname</span>
      </div>
      <div class="form-group">
        <select class="form-control" v-model="profile.status">
          <option value>* Select Professional Skills</option>
          <option>Developer</option>
          <option>Junior Developer</option>
          <option>Senior Developer</option>
          <option>Manager</option>
          <option>Student</option>
          <option>Intern</option>
          <option>Others</option>
        </select>
        <span>Give us an idea of where you are at in your career</span>
      </div>
      <div class="form-group">
        <input type="text" v-model="profile.company" class="form-control" placeholder="* Company" />
        <span>Could be your own company or one you work for</span>
      </div>
      <div class="form-group">
        <input type="text" v-model="profile.website" class="form-control" placeholder="* Website" />
        <span>Could be your own website or a company one</span>
      </div>
      <div class="form-group">
        <input type="text" v-model="profile.location" class="form-control" placeholder="* Location" />
        <span>City or city & state suggested (eg. Boston, MA)</span>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="profile.skills"
          class="form-control"
          placeholder="* Skills"
          :class="{ 'is-invalid': submitted && $v.profile.skills.$error }"
        />
        <div v-if="submitted && $v.profile.skills.$error" class="invalid-feedback">
          <span v-if="!$v.profile.skills.required">skills is required</span>
        </div>
        <span>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</span>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="profile.github"
          class="form-control"
          placeholder="* Github Username"
        />
        <span>If you want your latest repos and a Github link, include your username</span>
      </div>
      <div class="form-group">
        <textarea class="form-control" v-model="profile.bio" placeholder="Short Bio"></textarea>
        <span>Tell us a little about yourself</span>
      </div>
      <div class="form-group">
        <button type="button" @click="toggle" class="btn btn-light">Add Social Netword Links</button>
        <span class="ml-3">Optional</span>
      </div>
      <div :class="show ? 'social-link-show' : 'social-link'">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
          </div>
          <input type="text" class="form-control" v-model="profile.twitter" placeholder="Twitter" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
          </div>
          <input type="text" class="form-control" v-model="profile.facebook" placeholder="Facebook" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
          </div>
          <input
            type="text"
            class="form-control"
            v-model="profile.instagram"
            placeholder="Instagram"
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
          </div>
          <input type="text" class="form-control" v-model="profile.youtube" placeholder="Youtube" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
          </div>
          <input type="text" class="form-control" v-model="profile.linkedin" placeholder="Linkedin" />
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-color w-100 bg-primary" :disabled="disabled">
          <span v-if="loading">
            <div class="m-loader"></div>
          </span>
          <span v-else>{{submitText}}</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapAction, mapState } from "vuex";
import * as types from "../Store/modules/types";

export default {
  name: "EditProfile",
  data() {
    return {
      profile: {
        handle: "",
        status: "",
        company: "",
        website: "",
        skills: "",
        location: "",
        github: "",
        bio: "",
        twitter: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        youtube: ""
      },
      show: false,
      submitted: false,
      submitText: "Create Profile"
    };
  },
  computed: {
    ...mapState("profileModule", ["loading", "disabled"])
  },
  validations: {
    profile: {
      handle: {
        required
      },
      status: {
        required
      },
      skills: {
        required
      }
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    onSubmitHandler: async function() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        // this.$store.commit(`userModule/${types.SET_LOADING}`);
        this.loading = true;
        this.disabled = true;
        let instance = this;
        setTimeout(() => {
          instance.$store.dispatch(
            `profileModule/${types.CREATE_PROFILE}`,
            this.profile
          );
        }, 2000);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.social-link {
  display: none;
  transition: all 0.3s ease-in;
}
.social-link-show {
  display: block;
  transition: all 0.3s ease-out;
}
.btn-color {
  background-color: rgb(51, 111, 148) !important;
  color: #fff !important;
}
.m-loader {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  margin: auto;
  width: 1.4em;
  height: 1.4em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>