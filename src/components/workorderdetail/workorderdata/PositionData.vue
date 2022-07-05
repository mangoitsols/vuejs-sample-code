<template>
    
    <div>
        
        <div class="table_section_main">

            <b-row>
                <b-col md="12" class="text-right mb-3">
                    <b-button class="theme-color1" @click="createposition">Create Position</b-button>
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
                                        <b-tab title="Position" active>

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

                            <div class="group_filter" v-bind:class="{ active: isActive2 }">
                                <p class="group_filter_inner" @click="groupfilterotp"><b-icon icon="layers" scale="1"></b-icon>Group</p>

                                <div class="group_filter_box">

                                    <div class="reset_btn">
                                        <a href="javascript:;">
                                            <b-icon icon="arrow-counterclockwise" scale="1"></b-icon>  
                                            Reset all
                                        </a>
                                    </div>

                                    <p class="apply_note">No groupings applied to this view <b-icon icon="exclamation-circle"></b-icon></p>
                                        {{groupfil}}
                                    <div class="group_selection_filter">
                                        <b-form-select v-model="groupfil" :options="groupopt" size="sm" class="mt-3"></b-form-select>
                                    </div>

                                </div>

                            </div>

                        </b-col>
                        <b-col md="6" class="table_searchform right_box d-flex align-items-center justify-content-end">
                            <b-icon icon="gear" class="edit_btn" scale="1"></b-icon>
                            <div class="arrow_box">
                                <span class="icon_arr"><b-icon icon="chevron-left" scale="1"></b-icon></span>
                                <span class="icon_arr"><b-icon icon="chevron-right" scale="1"></b-icon></span>
                            </div>
                        </b-col>
                    </b-row>

                </div>                

            </div>

            <div class="table_content">

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th><b-form-checkbox value="1"></b-form-checkbox></th>
                            <th>Title<span></span></th>
                            <th>Regular Rate<span></span></th>
                            <th>Overtime Rate<span></span></th>
                            <th>Doubletime Rate<span></span></th>
                            <th>Calculator<span></span></th>
                            <th>People needed<span></span></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                <b-icon icon="three-dots-vertical" class="editcl" scale="1" @click="editrowfunc"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                                <div class="edit_box">
                                    <span @click="removeedit">Edit</span>
                                    <span>Delete</span>
                                </div>
                            </td>
                            <td>Plumber</td>
                            <td>
                                <p>Payroll:<span>22.5</span></p>
                                <p>Billing:<span>30</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>33.75</span></p>
                                <p>Billing:<span>45</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>45</span></p>
                                <p>Billing:<span>60</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>california hourly workers</span></p>
                                <p>Invoice:<span>california hourly workers</span></p>
                            </td>
                            <td>30</td>
                        </tr> 

                         <tr>
                            <td>
                                <b-icon icon="three-dots-vertical" class="editcl" @click="editrowfunc" scale="1"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                                 <div class="edit_box">
                                    <span @click="removeedit">Edit</span>
                                    <span>Delete</span>
                                </div>
                            </td>
                            <td>ADA Specialist</td>
                            <td>
                                <p>Payroll:<span>22.5</span></p>
                                <p>Billing:<span>30</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>33.75</span></p>
                                <p>Billing:<span>45</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>45</span></p>
                                <p>Billing:<span>60</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>california hourly workers</span></p>
                                <p>Invoice:<span>california hourly workers</span></p>
                            </td>
                            <td>30</td>
                        </tr> 

                         <tr>
                            <td>
                                <b-icon @click="editrowfunc" class="editcl" icon="three-dots-vertical" scale="1"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                                 <div class="edit_box">
                                    <span @click="removeedit">Edit</span>
                                    <span>Delete</span>
                                </div>
                            </td>
                            <td>Housemen</td>
                            <td>
                                <p>Payroll:<span>22.5</span></p>
                                <p>Billing:<span>30</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>33.75</span></p>
                                <p>Billing:<span>45</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>45</span></p>
                                <p>Billing:<span>60</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>california hourly workers</span></p>
                                <p>Invoice:<span>california hourly workers</span></p>
                            </td>
                            <td>30</td>
                        </tr> 

                         <tr>
                            <td>
                                <b-icon @click="editrowfunc" class="editcl" icon="three-dots-vertical" scale="1"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                                 <div class="edit_box">
                                    <span @click="removeedit">Edit</span>
                                    <span>Delete</span>
                                </div>
                            </td>
                            <td>Host</td>
                            <td>
                                <p>Payroll:<span>22.5</span></p>
                                <p>Billing:<span>30</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>33.75</span></p>
                                <p>Billing:<span>45</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>45</span></p>
                                <p>Billing:<span>60</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>california hourly workers</span></p>
                                <p>Invoice:<span>california hourly workers</span></p>
                            </td>
                            <td>30</td>
                        </tr> 

                         <tr>
                            <td>
                                <b-icon @click="editrowfunc" class="editcl" icon="three-dots-vertical" scale="1"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                                 <div class="edit_box">
                                    <span @click="removeedit">Edit</span>
                                    <span>Delete</span>
                                </div>
                            </td>
                            <td>Recruitment</td>
                            <td>
                                <p>Payroll:<span>22.5</span></p>
                                <p>Billing:<span>30</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>33.75</span></p>
                                <p>Billing:<span>45</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>45</span></p>
                                <p>Billing:<span>60</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>california hourly workers</span></p>
                                <p>Invoice:<span>california hourly workers</span></p>
                            </td>
                            <td>30</td>
                        </tr> 

                         <tr>
                            <td>
                                <b-icon @click="editrowfunc" class="editcl" icon="three-dots-vertical" scale="1"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                                 <div class="edit_box">
                                    <span @click="removeedit">Edit</span>
                                    <span>Delete</span>
                                </div>
                            </td>
                            <td>HR Manager</td>
                            <td>
                                <p>Payroll:<span>22.5</span></p>
                                <p>Billing:<span>30</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>33.75</span></p>
                                <p>Billing:<span>45</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>45</span></p>
                                <p>Billing:<span>60</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>california hourly workers</span></p>
                                <p>Invoice:<span>california hourly workers</span></p>
                            </td>
                            <td>30</td>
                        </tr> 

                         <tr>
                            <td>
                                <b-icon @click="editrowfunc" class="editcl" icon="three-dots-vertical" scale="1"></b-icon><b-form-checkbox value="2"></b-form-checkbox>
                                 <div class="edit_box">
                                    <span @click="removeedit">Edit</span>
                                    <span>Delete</span>
                                </div>
                            </td>
                            <td>Electrical</td>
                            <td>
                                <p>Payroll:<span>22.5</span></p>
                                <p>Billing:<span>30</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>33.75</span></p>
                                <p>Billing:<span>45</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>45</span></p>
                                <p>Billing:<span>60</span></p>
                            </td>
                            <td>
                                <p>Payroll:<span>california hourly workers</span></p>
                                <p>Invoice:<span>california hourly workers</span></p>
                            </td>
                            <td>30</td>
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

        </div>

        <div class="position_create_form">
            <div class="create_form_inner form_panel">
                <div class="form_inner">
                    <h4>Initial info</h4>
                    <b-form-group
                    id="input-group-1"
                    label="Title of the position *"
                    label-for="input-1"
                    >
                    <b-form-input
                    id="input-1"
                    type="text"
                    placeholder="Enter title of position"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="People needed *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter the necessary skills *"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="Skills *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter the necessary skill"
                    required
                    ></b-form-input>
                    </b-form-group>

                        <b-form-group
                    id="input-group-2"
                    label="Position description *"
                    label-for="input-2"
                    >
                    <b-form-textarea
                        id="textarea"
                        placeholder="Write work description"
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                    </b-form-group>

                    <h4>Pay Rate</h4>
                    
                    <b-form-group
                    id="input-group-2"
                    label="Payroll regular hourly rate *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter charges"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="Payroll overtime hourly rate *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter overtime charges"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="Payroll doubletime hourly rate *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter doubletime charges"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="Payroll hourly calculator"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter hourly calculator"
                    required
                    ></b-form-input>
                    </b-form-group>


                    <h4>Bill Rate</h4>
                    
                    <b-form-group
                    id="input-group-2"
                    label="Billing regular hourly rate *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter charges"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="Billing overtime hourly rate *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter overtime charges"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="Billing doubletime hourly rate *"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter doubletime charges"
                    required
                    ></b-form-input>
                    </b-form-group>

                    <b-form-group
                    id="input-group-2"
                    label="Invoice calculator"
                    label-for="input-2"
                    >
                    <b-form-input
                    id="input-2"
                    type="text"
                    placeholder="Enter hourly calculator"
                    required
                    ></b-form-input>
                    </b-form-group>
                </div>
                <b-row>
                    <b-col md="6">
                        <a @click="cancelposition" href="javascript:;">Cancel</a>
                    </b-col>
                     <b-col md="6" class="text-right">
                        <b-button class="theme-color1">Create</b-button>
                    </b-col>
                </b-row>
            </div>
        </div>
        
    </div>

</template>
<script>

export default {
  name: 'PosisitionData',
  data() {
      return {
        selected: null,
        isActive: false,
        isActive2: false,
        groupfil: null,
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
        }


    }
}
</script>
