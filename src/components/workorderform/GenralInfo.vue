<template>
  
  <div>
    <div class="form_part1 common_form">
        <h2>Please Enter Your Initial information</h2>
        <div class="form_panel">
            <h4 class="magrn1">General Info</h4>
            <div class="form_inner">
                <b-form-group
                id="wodername"
                label="Name of the work order *"
                label-for="wodername"
                >
                <b-form-input
                id="wodername"
                type="text"
                placeholder="Enter Name"
                v-model="form1.workorder_name"
                required
                ></b-form-input>
            </b-form-group>

                <b-form-group id="wodr_compny" label="Company *" label-for="wodr_compny">
                <b-form-select
                id="wodr_compny"
                :options="company"
                class="form-control1"
                v-model="form1.company"
                required
                ></b-form-select>
            </b-form-group>

                <b-form-group id="wodr_branch" label="Branch *" label-for="wodr_branch">
                <b-form-select
                id="wodr_branch"
                :options="branch"
                v-model="form1.branch"
                class="form-control1"
                required
                ></b-form-select>
            </b-form-group>

                <b-form-group id="wodr_jobstatus" label="Job status *" label-for="wodr_jobstatus">
                <b-form-select
                id="wodr_jobstatus"
                v-model="form1.jobstatus"
                :options="jobStatus"
                class="form-control1"
                required
                ></b-form-select>
            </b-form-group>

            <b-form-group
                id="wodr_number"
                label="Number of Workers"
                label-for="wodr_number"
                >
                <b-form-input
                id="wodr_number"
                type="text"
                 v-model="form1.no_worker"
                placeholder="Enter Number"
                required
                ></b-form-input>
            </b-form-group>

            <h4>Address Info</h4>

                <b-form-group
                id="wodraddress"
                label="Address *"
                label-for="wodraddress"
                >
                <b-form-input
                id="wodraddress"
                type="text"
                v-model="form1.address"
                placeholder="Type Address "
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