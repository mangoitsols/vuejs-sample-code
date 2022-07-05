<template>

    <div class="work_area working_ar">

    <h2 class="title1">Work orders</h2>

    <div class="d-flex justify-content-between align-items-center mt-4">
        <ul class="breadcumb mt-0">
            <li><a href="javascript">Dashboard</a></li>
            <li>Work orders</li>
        </ul>
        <b-button class="theme-color1" @click="createposition">Create work order</b-button>
    </div>

    <div class="table_section_main">

        <b-row>
            <b-col md="12" class="text-right mb-3">
                
            </b-col>
        </b-row>

        <div class="table_box_main">                

            <div class="table_head">

                <b-row>
                    <b-col md="6" class="table_searchform d-flex align-items-start">

                        <div class="filter_box_main" v-bind:class="{ active: isActive }">
                            <div class="filter_box" @click="applyfilter">
                                <span class="filter_btn">Filter By</span>
                            </div>

                            <div class="filter_tabing_box">                                        
                                    <b-tabs
                                    active-nav-item-class="font-weight-bold text-uppercase text-danger"
                                    active-tab-class="font-weight-bold"
                                    content-class="tabbing_content_box"
                                    vertical lazy
                                    >
                                    <b-tab title="Posit ion" active>

                                        <div class="search">
                                            <b-icon icon="search" scale="1"></b-icon>
                                            <b-form-group >
                                                <b-form-input
                                                id="companysite"
                                                placeholder="Search"
                                                type="text"
                                                value=""
                                                required
                                                ></b-form-input>
                                            </b-form-group>
                                        </div>

                                        <div class="position_selector_box">

                                            <b-form-checkbox
                                                :id="'checkbox-1'+k"
                                                :name="'checkbox-'+k"
                                                value="accepted"
                                                unchecked-value="not_accepted"
                                                v-for="(post,k) in positions"
                                                :key="k"
                                                >
                                                {{post.pos}}
                                            </b-form-checkbox>

                                        </div>
                                            
                                    </b-tab>

                                    <b-tab title="Location">

                                        <div class="search">
                                            <b-icon icon="search" scale="1"></b-icon>
                                            <b-form-group >
                                                <b-form-input
                                                id="companysite"
                                                placeholder="Search"
                                                type="text"
                                                value=""
                                                required
                                                ></b-form-input>
                                            </b-form-group>
                                        </div>

                                            <div class="position_selector_box">
                                            <b-form-checkbox
                                                :id="'checkbox-1'+k"
                                                :name="'checkbox-'+k"
                                                value="accepted"
                                                unchecked-value="not_accepted"
                                                v-for="(post,k) in citysl"
                                                :key="k"
                                                >
                                                {{post.city}}
                                            </b-form-checkbox>
                                        </div>                       
                                    </b-tab>

                                    <b-tab title="Status & Sub Status">

                                        <div class="status_box">
                                            <label class="form_lbs_style">Status</label>
                                            <ul>
                                                <li><b-form-radio name="some-radios" value="A">Awaiting Review</b-form-radio></li>
                                                <li><b-form-radio name="some-radios" value="b">Recruiting</b-form-radio></li>
                                                <li><b-form-radio name="some-radios" value="c">Working</b-form-radio></li>
                                            </ul>
                                        </div>

                                        <div class="status_box">
                                            <label class="form_lbs_style">Sub Status</label>
                                            <ul>
                                                <li><b-form-radio name="some-radios2" value="A">Blank</b-form-radio></li>
                                                <li><b-form-radio name="some-radios2" value="b">Left a message</b-form-radio></li>
                                                <li><b-form-radio name="some-radios2" value="c">No answer</b-form-radio></li>
                                                <li><b-form-radio name="some-radios2" value="d">Had conversation</b-form-radio></li>
                                                <li><b-form-radio name="some-radios2" value="e">Call back</b-form-radio></li>
                                            </ul>
                                        </div>

                                    </b-tab>

                                    <b-tab title="Start Date">
                                        <p class="form_lbs_style">Workers</p>
                                        <div class="filter_date_pkr">
                                            <b-form-datepicker id="example-datepicker" class="mb-2"></b-form-datepicker>
                                        </div>                                            
                                    </b-tab>

                                </b-tabs>
                            </div>

                        </div>

                        <div class="search">
                            <b-icon icon="search" scale="1"></b-icon>
                            <b-form-group >
                                <b-form-input
                                id="companysite"
                                placeholder="Search"
                                type="text"
                                value=""
                                required
                                ></b-form-input>
                            </b-form-group>
                        </div>

                    </b-col>
                    <b-col md="6" class="table_searchform right_box d-flex align-items-center justify-content-end">
                        <div class="setting">
                            <b-icon icon="gear" class="edit_btn" scale="1"></b-icon>
                        </div>
                    </b-col>
                </b-row>

            </div>                

        </div>

        <div class="table_content">

            <table class="table">
                <thead>
                    <tr>
                        <th><b-form-checkbox value="1"></b-form-checkbox></th>
                        <th>Name<span></span></th>
                        <th>Work Order #<span></span></th>
                        <th>Company<span></span></th>
                        <th>Workers<span></span></th>
                        <th>Start Date<span></span></th>
                        <th>End Date<span></span></th>
                        <th>Status<span></span></th>
                    </tr>
                </thead>
                <tbody>

                        <tr v-for="(odrdata,k) in tabledata" :key="k">
                        <td>
                            <b-icon icon="three-dots-vertical" class="editcl" scale="1" @click="editrowfunc"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                            <div class="edit_box">
                                <span @click="removeedit">Edit</span>
                                <span>Delete</span>
                            </div>
                        </td>
                        
                        <td>
                            {{odrdata.name}}
                        </td>
                        <td><a class="line color1" href="javascript:;">{{odrdata.wordid}}</a></td>
                        <td>
                            {{odrdata.companyname}}
                        </td>
                        <td class="lightcolr">
                            <p>{{odrdata.workers}}</p>
                        </td>
                            <td>
                            <p>{{odrdata.startdate}}</p>
                        </td>
                        <td>
                            <p>{{odrdata.enddate}}</p>
                        </td>
                        <td><p :class=odrdata.status.id>{{odrdata.status.st}}</p></td>
                    </tr>

                </tbody>
            </table>
            
            <b-row class="d-flex align-items-center whitebg m-0 pt-3 pb-3">
                <b-col md="3" class="padding1">
                    <p class="body-size mb-0">Page 1 of 25</p>
                </b-col>
                <b-col md="6" class="pagination_box">
                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center m-0">
                            <li class="page-item arrow_box_icon">
                            <a class="page-link" href="#" aria-label="Previous"><b-icon icon="chevron-left" scale="1"></b-icon></a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="dashed">...<li>
                            <li class="page-item"><a class="page-link" href="#">58</a></li>
                            <li class="page-item"><a class="page-link" href="#">59</a></li>
                            <li class="page-item arrow_box_icon">
                            <a class="page-link" href="#" aria-label="Next">
                                <b-icon icon="chevron-right" scale="1"></b-icon>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </b-col>
                <b-col md="3" class="text-right padding2 body-size show_page">
                    show <b-form-select v-model="selected1" :options="options1"></b-form-select> On page
                </b-col>
            </b-row>

        </div>

        <div class="position_create_form multiform_pop">
            <div class="create_form_inner form_panel">

                <div class="workorder-form">
                    <h2 class="title1 d-flex justify-content-between align-items-center">Edit Work Orders <span class="normal_font">* Required</span></h2>         
                    <TimelineTab v-bind:timelinedt="A" />
                    <div class="form_part">
                        <GeneralInfo v-bind:form1="formdata1" v-if="A === 1" />
                        <JobInfo v-bind:form2="formdata2" v-if="A === 2" />
                        <PositionInfo v-if="A === 3" />
                        <ContactPersonInfo v-bind:form4="formdata4" v-if="A === 4" />
                        <BillingInfo v-bind:form5="formdata5" v-if="A === 5" />
                        <Attachment v-bind:form6="formdata6" v-if="A === 6" />
                    </div>

                    <b-row class="botm_form">
                        <b-col cols="4 right_box"><a href="javascript:;" @click="cancelposition">Cancel</a></b-col>
                        <b-col cols="8 text-right">
                        <b-button class="theme-button1" variant="outline-primary" v-if="A !== 1" @click="stepprevious">Previous</b-button>
                        <b-button class="theme-color1" @click="stepnext" v-if="A !== 6">Next</b-button>
                        </b-col>
                    </b-row>
                    
                </div>            

            </div>
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
import Attachment from './workorderform/Attachment.vue'
export default {
    name: 'WorkOrdersMain',
    components: {
        GeneralInfo,
        TimelineTab,
        JobInfo,
        PositionInfo,
        ContactPersonInfo,
        BillingInfo,
        Attachment
    },
    data() {
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
        },

        selected: null,
        isActive: false,
        isActive2: false,
        groupfil: null,
        tabledata: [
            {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Confirmed',id:'staus2'}},
             {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Planning',id:'staus3'}},
            {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Confirmed',id:'staus2'}},
            {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Cancelled',id:'staus4'}},
            {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Confirmed',id:'staus2'}},
            {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Ongoing',id:'staus1'}},
             {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Confirmed',id:'staus2'}},
            {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Planning',id:'staus3'}},
            {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Ongoing',id:'staus1'}},
             {name:'Cleanup of IBM headquarters',wordid:'BRS-453',companyname: 'Company Name',workers: 'R - 10, C - 10, W - 10',startdate:'Dec 29, 2020',enddate:'Jun 29, 2021',status:{st: 'Confirmed',id:'staus2'}},
        ],
        options: [
          { value: null, text: 'Filter By' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        groupopt: [
          { value: null, text: 'Pick a field to group by', disabled: false, id: 1 },
          { value: 1, text: 'Position', disabled: false, id: 2 },
          { value: 2, text: 'Status & Sub Status',  disabled: false, id: 3 },
          { value: 3, text: 'Start Date', disabled: false, id: 4 }
        ],
        dftgroupopt: [
          { value: null, text: 'Pick a field to group by', disabled: false, id: 1 },
          { value: 1, text: 'Position', disabled: false, id: 2 },
          { value: 2, text: 'Status & Sub Status',  disabled: false, id: 3 },
          { value: 3, text: 'Start Date', disabled: false, id: 4 }
        ],
        selected1: null,
        options1: [
          { value: null, text: '10' },
          { value: 'a', text: '20' },
          { value: 'b', text: '50' },
        ],
        positions: [
            {pos: "Plumber",id: 1},
            {pos: "ADA Specialist",id: 2},
            {pos: "Host",id: 3},
            {pos: "Recruitment",id: 4},
            {pos: "HR Manager",id: 5},
            {pos: "HR Manager",id: 6},
            {pos: "HR Manager",id: 7},
            {pos: "HR Manager",id: 8},
            {pos: "HR Manager",id: 9},
            {pos: "HR HR Manager",id: 10}
        ],
        citysl: [
            {city: "city1",id: 1},
            {city: "city2",id: 2},
            {city: "city3",id: 3},
            {city: "city4",id: 4},
            {city: "city5",id: 5},
            {city: "city6",id: 6},
            {city: "city7",id: 7},
            {city: "city8",id: 8},
            {city: "city9",id: 9},
            {city: "city10",id: 10}
        ],
        filtetdt: []
      }
    },
    methods: {
        createposition() {
           document.body.classList.add('created');           
        },
        cancelposition() {
           document.body.classList.remove('created');
        },
        editrowfunc(event) {
           event.target.parentNode.classList.add('edited');
        },
        removeedit(event){
           event.target.parentNode.parentNode.classList.remove('edited');
        },
        applyfilter(){
            this.isActive = !this.isActive;
        },
        groupfilterotp() {            
            this.isActive2 = !this.isActive2;
        },

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
