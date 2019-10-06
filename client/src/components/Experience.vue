<template>
  <div class="col-md-8 m-auto">
    <form class="login-container" @submit.prevent="onSubmitHandler">
      <div class="w-100">
        <div class="login-header-primary">
          <h4>Add Experience</h4>
          <div>Add any job or position that you have had in the past or current</div>
        </div>
        <div class="login-header-primary mb-3 error">{{msg}}</div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="experience.company"
          class="form-control"
          autocomplete="off"
          aria-autocomplete="off"
          placeholder="* Company"
          :class="{ 'is-invalid': submitted && $v.experience.company.$error }"
        />
        <div v-if="submitted && $v.experience.company.$error" class="invalid-feedback">
          <span v-if="!$v.experience.company.required">Company is required</span>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="experience.jobTitle"
          class="form-control"
          autocomplete="off"
          aria-autocomplete="off"
          placeholder="* Job Title"
          :class="{ 'is-invalid': submitted && $v.experience.jobTitle.$error }"
        />
        <div v-if="submitted && $v.experience.jobTitle.$error" class="invalid-feedback">
          <span v-if="!$v.experience.jobTitle.required">Experience is required</span>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="experience.location"
          class="form-control"
          autocomplete="off"
          aria-autocomplete="off"
          placeholder="* Location"
          :class="{ 'is-invalid': submitted && $v.experience.location.$error }"
        />
        <div v-if="submitted && $v.experience.location.$error" class="invalid-feedback">
          <span v-if="!$v.experience.location.required">Location is required</span>
        </div>
      </div>
      <div class="form-group">
        <label>From Date</label>
        <!-- <code>&lt;datepicker placeholder="Select Date" v-model="vmodelexample"&gt;&lt;/datepicker&gt;</code> -->
        <Datepicker placeholder="* From" class="form-control" v-model="experience.from"></Datepicker>
      </div>
      <div class="form-group">
        <label>To Date</label>
        <Datepicker placeholder="* To" class="form-control" v-model="experience.to"></Datepicker>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="current"
          v-model="experience.checked"
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">Current Job</label>
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          v-model="experience.description"
          placeholder="Program Description"
        ></textarea>
        <span>Tell us about the program that you were in</span>
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
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";

export default {
  name: "Experience",
  data() {
    return {
      experience: {
        company: "",
        from: "",
        to: "",
        description: "",
        jobTitle: "",
        location: "",
        checked: ""
      },
      status: "",
      submitted: false,
      submitText: "login"
    };
  },
  components: {
    Datepicker
  },
  computed: {
    ...mapState("userModule", ["msg", "disabled", "loading"])
  },
  validations: {
    experience: {
      company: {
        required
      },
      jobTitle: {
        required
      },
      from: {
        required
      },
      to: {
        required
      },
      location: {
        required
      },
      description: {
        required
      }
    }
  },
  methods: {
    onSubmitHandler: async function() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        // this.$store.commit(`userModule/${types.SET_LOADING}`);
        let instance = this;
        setTimeout(() => {
          //   instance.$store.dispatch(
          // `userModule/${types.USER_LOGIN}`,
          // this.profile
          //   );
        }, 2000);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.btn-color {
  background-color: rgb(51, 111, 148) !important;
  color: #fff !important;
}
</style>