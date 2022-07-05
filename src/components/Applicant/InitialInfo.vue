<template>
  
  <div>
    <div class="form_part1 common_form">
        <div class="form_panel">
            <h4>Initial Info</h4>
            <div class="form_inner">
              <b-form-group
                  id="wodername"
                  label="First Name *"
                  label-for="wodername"
                  >
                    <b-form-input
                    id="wodername"
                    type="text"
                    placeholder="Enter applicants’ first name"
                    v-model="form1.workorder_name"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                id="wodername"
                label="Last Name *"
                label-for="wodername"
                >
                  <b-form-input
                  id="wodername"
                  type="text"
                  placeholder="Enter applicants’ last name"
                  required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                id="wodername"
                label="Email *"
                label-for="wodername"
                >
                  <b-form-input
                  id="wodername"
                  type="text"
                  placeholder="Enter applicants’ email"
                  required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                id="person_phone"
                label="Phone *"
                label-for="person_phone"
                >
                  <b-form-input
                  id="person_phone"
                  type="text"
                  placeholder="+1 ___ ___ ___"
                  required
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                id="person_phone"
                label="Alternative Phone *"
                label-for="person_phone"
                >
                  <b-form-input
                  id="person_phone"
                  type="text"
                  placeholder="+1 ___ ___ ___"
                  required
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="wodr_compny" label="Applicant Stage" label-for="wodr_compny">
                    <b-form-select
                    id="wodr_compny"
                    :options="company"
                    class="form-control1"
                    v-model="form1.company"
                    required
                    ></b-form-select>
                </b-form-group>

              <h4>Experience Info</h4>

              <b-form-group label="Type of Employment  *" label-for="wodr_compny">
                  <b-form-select
                  :options="company"
                  class="form-control1"
                  v-model="form1.company"
                  required
                  ></b-form-select>
              </b-form-group>

              <b-form-group
              id="person_phone"
              label="Company name *"
              label-for="person_phone"
              >
                <b-form-input
                id="person_phone"
                type="text"
                placeholder="Enter name of company"
                required
                ></b-form-input>
              </b-form-group>

              <b-form-group
              id="person_phone"
              label="Job Location *"
              label-for="person_phone"
              >
                <b-form-input
                id="person_phone"
                type="text"
                placeholder="Enter location"
                required
                ></b-form-input>
              </b-form-group>

              <b-form-group
              id="job_sescription"
              label="Job Description"
              label-for="job_sescription"
              >
                <b-form-textarea
                id="job_sescription"
                placeholder="Enter description of your job"
                rows="3"
                max-rows="6"                
                ></b-form-textarea>
              </b-form-group>

            <b-button class="theme-color1 add_more_opt" block variant="primary" @click="repeatform"><span>+</span> Add one more experience</b-button>
            

            <h4>Adress Info</h4>

            <b-form-group
                id="input-group-10"
                label="Address *"
                label-for="input-10"
                >
                <b-form-input
                id="input-10"
                type="text"
                placeholder="Enter adress "
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="wodr_city" label="City *" label-for="input-8">
                <b-form-select
                id="wodr_city"
                :options="City"
                class="form-control1"
                v-model="form1.city"
                required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="wodr_state" label="State *" label-for="input-9">
                <b-form-select
                id="wodr_state"
                :options="State"
                class="form-control1"
                v-model="form1.state"
                required
                ></b-form-select>
            </b-form-group>

            <b-form-group
                id="input-group-10"
                label="Zip Code *"
                label-for="input-10"
                >
                <b-form-input
                id="input-10"
                type="text"
                v-model="form1.zipcode"
                placeholder="Enter Zipcode"
                required
                ></b-form-input>
            </b-form-group>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'GeneralInfo',
   props: ['form1'],
    data() {
    return {
        State: [
          { value: null, text: 'Select State'},
          { value: 1, text: 'Delhi'},
          { value: 2, text: 'Goa'},
          { value: 3, text: 'Mumbai'},
          { value: 4, text: 'Colkata'}
        ],
        City: [
          { value: null, text: 'Select City'},
          { value: 1, text: 'Delhi'},
          { value: 2, text: 'Goa'},
          { value: 3, text: 'Mumbai'},
          { value: 4, text: 'Colkata'}
        ],
        jobStatus: [
          { value: null, text: 'Select Status'},
          { value: 1, text: 'Working'},
          { value: 2, text: 'Not Working'}
        ],
        branch: [
          { value: null, text: 'Select Branch'},
          { value: 1, text: 'Delhi'},
          { value: 2, text: 'Goa'},
          { value: 3, text: 'Mumbai'},
          { value: 4, text: 'Colkata'}
        ],
        company: [
          { value: null, text: 'Select Company'},
          { value: 1, text: 'Company1'},
          { value: 2, text: 'Company2'},
          { value: 3, text: 'Company3'}
        ],
    }
  },
  methods: {
      async savedata() {
       let result =  await axios.post('http://127.0.0.1:8000/api/userones/',this.formdata);
       console.log(result);
       localStorage.setItem("firststepdata", JSON.stringify(this.formdata));
    }
  }
}
</script>