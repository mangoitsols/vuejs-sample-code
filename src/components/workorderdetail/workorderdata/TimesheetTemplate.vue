<template>
        
    <div>
        <TimesheetTemplateData />
        <div class="tabworking_area">
            <h2 class="d-flex">Title timesheet template <span class="editable-opt">- editing mode</span></h2>

            <div class="fields_box_main">

                <div class="fields_box_inner_box_main" v-for="(reptform,k1) in reptform" :key="k1">
                    <div class="iconbox">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="commontfields left">
                        <b-form-group
                        label="Field Name"
                        label-for="input-2"
                        >
                        <b-form-input
                        type="text"
                        placeholder="Date"
                        required
                        ></b-form-input>
                        </b-form-group>

                        <div class="checkboxes_fields">

                            <b-form-checkbox
                                :id="'checkbox-2'+k+k1"
                                :name="'checkbox-'+k+k1"
                                value="accepted"
                                unchecked-value="not_accepted"
                                v-for="(post,k) in positions"
                                :key="k"
                                >
                                {{post.pos}}
                            </b-form-checkbox>

                        </div>

                    </div>

                    <div class="commontfields right">
                        <b-form-group id="wodr_city" label="Field Type" label-for="input-8">
                            <b-form-select
                            :options="fildtype"
                            v-model="fildtypef"
                            required
                            ></b-form-select>
                        </b-form-group>
                    </div>

                    <div class="dlt_icon_box">
                        <b-icon icon="trash" scale="1" @click="remove(k)"></b-icon>
                    </div>

                </div>            

                <b-button class="theme-color2" block @click="repeatform"><span class="add1">+</span> Add field</b-button>

            </div>

            <b-row>
                <b-col cols="12 text-right">
                <a href="javascript:;" class="cancel_btn">Cancel</a>
                <b-button class="theme-color1">Save</b-button></b-col>
            </b-row>

        </div>
    </div>

</template>
<script>

import TimesheetTemplateData from './TimesheetTemplateData.vue';

export default {
    name: 'TimesheetTemplate',
    components:{
        TimesheetTemplateData
    },
    data() {
        return {
            fildtypef: null,
            fildtype: [
                { value: null, text: 'Select Field Type'},
                { value: 1, text: 'Date'},
                { value: 2, text: 'Time'}
            ],
            positions: [
                {pos: "Required",id: 1},
                {pos: "Searchable",id: 2},
                {pos: "Non Reapeating",id: 3},
            ],
            reptform: [
                {
                    formadd: ''
                }
            ]
        }
    },
     methods: {
      repeatform(){
            this.reptform.push({ formadd: '' });
            console.log(this.reptform)
      },
      toggleaccordian(){
          //alert('demo');
          this.reptform.active = true;
          console.log(this.reptform.active);
      },
    remove(index) {
        this.reptform.splice(index, 1);
    }
  }
}

</script>
