<template>
      <div class="work_area">

        <div class="workorder-form">                  
            <TimelineTab v-bind:timelinedt="A" />
          <div class="form_part">
            <GeneralInfo v-bind:form1="formdata1" v-if="A === 1" />
            <JobInfo v-bind:form2="formdata2" v-if="A === 2" />
            <PositionInfo v-if="A === 3" />
            <ContactPersonInfo v-bind:form4="formdata4" v-if="A === 4" />
            <BillingInfo v-bind:form5="formdata5" v-if="A === 5" />
            <Attachment v-bind:form6="formdata6" v-if="A === 6" />
          </div>

          <div class="form_part_bottom_panel">
            <div class="form_part_bottom_inner_panel">
              <b-row>
                 <b-col cols="6 right_box"><a href="javascript:;">Cancel</a></b-col>
                 <b-col cols="6 text-right">
                   <b-button class="theme-button1" variant="outline-primary" v-if="A !== 1" @click="stepprevious">Previous</b-button>
                   <b-button class="theme-color1" @click="stepnext" v-if="A !== 6">Next</b-button>
                   <b-button class="theme-color1" v-if="A == 6" @click="createworkorder">Create</b-button></b-col>
              </b-row>
            </div>
          </div>
        </div>

         <div class="createworkorder" v-if="createodr">
            <div class="work_orderpop_inner">
              <span class="close_wodr" @click="createworkordercancel">X</span>
              <h2>Create new work order ?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <b-button class="theme-color1">Confirm</b-button>
            </div>
          </div>

      </div>    
     
</template>

<script>
import GeneralInfo from './workorderform/GenralInfo.vue'
import TimelineTab from './workordertimeline/TimelineTabs.vue'
import JobInfo from './workorderform/JobInfo.vue'
import PositionInfo from './workorderform/PositionInfo.vue'
import ContactPersonInfo from './workorderform/ContactPersonInfo.vue'
import BillingInfo from './workorderform/BillingInfo.vue'
//import CurdForm from './workorderform/CurdForm.vue'
import Attachment from './workorderform/Attachment.vue'
    export default {
        name: 'WorkOrders',
        components: {
        GeneralInfo,
        TimelineTab,
        JobInfo,
        PositionInfo,
        ContactPersonInfo,
        BillingInfo,
        Attachment
        },
       data () {
           return {
              A: 1,
              createodr: false,
              inputs: [
                {
                  name: ''
                }
              ],
              formdata1: {
                workorder_name: '',
                company: null,
                branch: null,
                jobstatus: null,
                no_worker: '',
                address: '',
                city: null,
                state: null,
                zipcode: ''
            },
            formdata2: {
              jobcat: "",
              jobspecility: "",
              jobdescription: "",
              strdate: "",
              enddate: "",
              starttime: "",
              endtime: ""
            },
            formdata4: {
              firstname: "",
              lastname: "",
              sitecompany: "",
              email: "",
              personphone: "",
              city: null,
              incnote: ''
            },
            formdata5: {
              fullname: "",
              ponumber: "",
              billingaddress: "",
              email: "",
              state: "",
              zipcode: "",
              phone: "",
              city: "",
              invoicenote: "",
            },
            formdata6: {
              file1: null,
            }
          }
       },
       methods: {
          stepnext() {
            this.A++;
            console.log(this.formdata6.file1);
          },
          stepprevious() {
            this.A--;
            this.createodr = false;
            console.log(this.A);
          },
          add() {
            this.inputs.push({ name: '' });
            console.log(this.inputs)
          },
          remove(index) {
            this.inputs.splice(index, 1);
          },
          createworkorder(){
            this.createodr = true;
            console.log(this.formdata6.file1);
          },
          createworkordercancel(){
            this.createodr = false;
          }
       }      
    }
</script>
