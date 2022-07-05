<template>
    <div class="form_part2 common_form">
        <h2>Please tell more about job</h2>
        <div class="form_panel">
            <h4>Job Info</h4>
            <div class="form_inner">
                <b-form-group
                    id="job_catagory"
                    label="Job Category *"
                    label-for="job_catagory"
                    >
                    <b-form-input
                    id="job_catagory"
                    type="text"
                    placeholder="Enter title of position"
                    v-model="form2.jobcat"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="job_speciality"
                    label="Job speciality *"
                    label-for="job_speciality"
                    >
                    <b-form-input
                    id="job_speciality"
                    type="text"
                    placeholder="Enter title of position"
                    v-model="form2.jobspecility"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="job_sescription"
                    label="Job Description *"
                    label-for="job_sescription"
                    >
                    <b-form-textarea
                    id="job_sescription"
                    placeholder="Write job description"
                    rows="3"
                    max-rows="6"
                    v-model="form2.jobdescription"                    
                    ></b-form-textarea>
                </b-form-group>

                <h4>Shedule Work Order Period</h4>
               
                <b-form-group
                    id="datepicker-full-width1"
                    label="Start Date"
                    label-for="datepicker-full-width"
                    >
                   <b-form-datepicker
                        id="datepicker-full-width"
                        menu-class="w-100"
                        startDate="29/12/2021"
                        endDate="31/12/2021"
                        calendar-width="100%"
                        v-model="form2.strdate"
                        class="mb-2"
                    ></b-form-datepicker>
                </b-form-group>

                 <b-form-group
                    id="strdate"
                    label="End Date"
                    label-for="strdate"
                    >
                   <b-form-datepicker
                        id="strdate1"
                        menu-class="w-100"
                        startDate="29/12/2021"
                        endDate="31/12/2021"
                        calendar-width="100%"
                        v-model="form2.enddate"
                        class="mb-2"
                    ></b-form-datepicker>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label="Start time"
                    label-for="input-1"
                    >
                  <b-form-timepicker v-model="form2.starttime" id="timepicker-placeholder" placeholder="Choose a time" locale="en"></b-form-timepicker>
                </b-form-group>

                 <b-form-group
                    id="enddate"
                    label="End time"
                    label-for="enddate"
                    >
                  <b-form-timepicker v-model="form2.endtime" id="timepicker-placeholder2" placeholder="Choose a time" locale="en"></b-form-timepicker>
                </b-form-group>


            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'JobInfo',
  props: ['form2'],
    data() {
    return {   
    }
  }
}
</script>