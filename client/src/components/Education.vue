<template>
  <div class="col-md-8 m-auto">
    <form class="login-container" @submit.prevent="onSubmitHandler">
      <div class="w-100">
        <div class="login-header-primary">
          <h4>Add Education</h4>
          <div>Add any school, bootcamp, etc that you have attended</div>
        </div>
        <!-- <div class="login-header-primary mb-3 error">{{msg}}</div> -->
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="education.school"
          class="form-control"
          autocomplete="off"
          placeholder="* School"
          :class="{ 'is-invalid': submitted && $v.education.school.$error }"
        />
        <div v-if="submitted && $v.education.school.$error" class="invalid-feedback">
          <span v-if="!$v.education.school.required">School is required</span>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="education.degree"
          class="form-control"
          autocomplete="off"
          aria-autocomplete="off"
          placeholder="* Degree of Certification"
          :class="{ 'is-invalid': submitted && $v.education.degree.$error }"
        />
        <div v-if="submitted && $v.education.degree.$error" class="invalid-feedback">
          <span v-if="!$v.education.degree.required">Degree is required</span>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="education.study"
          class="form-control"
          autocomplete="off"
          aria-autocomplete="off"
          placeholder="* Feild of Study"
          :class="{ 'is-invalid': submitted && $v.education.study.$error }"
        />
        <div v-if="submitted && $v.education.study.$error" class="invalid-feedback">
          <span v-if="!$v.education.study.required">Study is required</span>
        </div>
      </div>
      <div class="form-group">
        <label>From Date</label>
        <!-- <code>&lt;datepicker placeholder="Select Date" v-model="vmodelexample"&gt;&lt;/datepicker&gt;</code> -->
        <Datepicker placeholder="* From" class="form-control" v-model="education.from"></Datepicker>
      </div>
      <div class="form-group">
        <label>To Date</label>
        <Datepicker placeholder="* To" class="form-control" v-model="education.to"></Datepicker>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          v-model="education.checked"
          type="checkbox"
          value="current"
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">Current Job</label>
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          v-model="education.description"
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
  name: "Education",
  data() {
    return {
      education: {
        school: "",
        from: "",
        to: "",
        description: "",
        degree: "",
        study: "",
        checked: ""
      },
      status: "",
      submitted: false,
      submitText: "Add Education"
    };
  },
  components: {
    Datepicker
  },
  computed: {
    ...mapState("profileModule", ["disabled", "loading"])
  },
  validations: {
    education: {
      school: {
        required
      },
      degree: {
        required
      },
      from: {
        required
      },
      to: {
        required
      },
      description: {
        required
      },
      study: {
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
        this.$store.commit(`profileModule/${types.SET_LOADING}`);
        let instance = this;
        setTimeout(() => {
          alert("reolerekerk");
          // instance.$store.dispatch(
          // `userModule/${types.USER_LOGIN}`,
          // this.profile
          // );
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