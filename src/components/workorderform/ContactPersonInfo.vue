<template>
    <div class="form_part2 common_form">
        <h2>Who can you <br /> contact?</h2>
        <div class="form_panel">
            <h4></h4>
            <div class="form_inner">
                <b-form-group
                    id="first_name"
                    label="Contact Person First Name *"
                    label-for="first_name"
                    >
                    <b-form-input
                    id="first_name"
                    type="text"
                    placeholder="Type first name"
                    v-model="form4.firstname"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="last_name"
                    label="Contact Person Last Name *"
                    label-for="last_name"
                    >
                    <b-form-input
                    id="last_name"
                    type="text"
                    placeholder="Type last name"
                    v-model="form4.lastname"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="site_company"
                    label="Site company"
                    label-for="site_company"
                    >
                    <b-form-input
                    id="site_company"
                    type="text"
                    placeholder="Enter site company"
                    v-model="form4.sitecompany"
                    required
                    ></b-form-input>
                </b-form-group>
               
                <b-form-group
                    id="person_email"
                    label="Contact Person Email*"
                    label-for="person_email"
                    >

                    <b-form-input
                    id="person_email"
                    type="text"
                    placeholder="Enter email of contact person"
                    v-model="form4.email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="person_phone"
                    label="Contact Person phone *"
                    label-for="person_phone"
                    >
                   <b-form-input
                    id="person_phone"
                    type="text"
                    placeholder="+1 ___ ___ ___"
                    v-model="form4.personphone"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="wodr_city" label="City *" label-for="input-8">
                    <b-form-select
                    id="wodr_city"
                    :options="City"
                    class="form-control1"
                    v-model="form4.city"
                    required
                    ></b-form-select>
                </b-form-group>

                <b-form-group
                    id="job_sescription"
                    label="Invoice Notes"
                    label-for="job_sescription"
                    >
                    <b-form-textarea
                    id="job_sescription"
                    placeholder="Write invoice notes"
                    rows="3"
                    max-rows="6"
                    v-model="form4.incnote"                    
                    ></b-form-textarea>
                </b-form-group>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ContactPersonInfo',
   props: ['form4'],
    data() {
    return {   
        City: [
          { value: null, text: 'Select City'},
          { value: 1, text: 'Delhi'},
          { value: 2, text: 'Goa'},
          { value: 3, text: 'Mumbai'},
          { value: 4, text: 'Colkata'}
        ],    
    }
  }
}
</script>