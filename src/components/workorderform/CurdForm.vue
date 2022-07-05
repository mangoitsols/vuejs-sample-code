<template>
    <div class="form_part2 common_form">
        <h2>Submit the form</h2>
        <div class="form_panel">
            <h4></h4>
            <div class="form_inner">
                <b-form-group
                    id="name-input"
                    label="Name"
                    label-for="input-1"
                    >
                    <b-form-input
                    id="name-input"
                    type="text"
                    placeholder="Enter Name"
                    v-model="submitform.workorder_name"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="phone_in"
                    label="Phone"
                    label-for="phone_in"
                    >
                    <b-form-input
                    id="phone_in-1"
                    type="text"
                    v-model="submitform.company"
                    placeholder="Enter Phone Number"
                    required
                    ></b-form-input>
                </b-form-group>                
                
                 <b-button class="theme-color1" @click="savedata" >Submit</b-button>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CurdForm',
    data() {
    return {
        submitform: {
            workorder_name: '',
            company: '',
        },     
    }
  },

methods: {

    async savedata() {
       let result =  await axios.post('http://127.0.0.1:8000/api/userones/',this.submitform);
       console.log(result);
    }

}

}
</script>