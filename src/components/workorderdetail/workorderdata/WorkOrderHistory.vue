<template>
    
    <div>
        
        <div class="table_section_main">

             <multipane class="custom-resizer" layout="vertical">

                <b-row>
                    <b-col md="6" class="scroll_box">

                        <div class="table_box_main">
                            <div class="table_head">

                                <b-row>
                                    <b-col md="12" class="table_searchform d-flex align-items-start p-0 workhistr">
                                        <div class="date_range">
                                            <b-input-group class="">
                                                <b-form-input
                                                    id="example-input"
                                                    type="text"
                                                    placeholder="YYYY-MM-DD"
                                                    autocomplete="off"
                                                ></b-form-input>
                                                <b-input-group-append>
                                                    <b-form-datepicker
                                                    button-only
                                                    right
                                                    locale="en-US"
                                                    aria-controls="example-input"
                                                    ></b-form-datepicker>
                                                </b-input-group-append>
                                            </b-input-group>
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
                                </b-row>

                            </div>                

                        </div>

                        <div class="table_content">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Date<span></span></th>
                                        <th>Position<span></span></th>
                                        <th>Workers<span></span></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(odrdata,k) in workorderdata" :key="k">
                                        <td>
                                            <a class="colordt font-weight-500" href="javascript:;">{{odrdata.date}}</a>
                                        </td>
                                        <td class="font-weight-400">{{odrdata.position}}</td>
                                        <td>{{odrdata.workers}}</td>                                       
                                    </tr>                     

                                </tbody>
                            </table>
                        </div>


                    </b-col>
                    <multipane-resizer></multipane-resizer>
                    <b-col md="6" class="box-border">
                       <div class="table_content brdtop">

                            <div class="table_box_main whitebg">
                                <div class="table_head">

                                    <b-row>
                                        <b-col md="12" class="d-flex justify-content-between">
                                            <h2 class="title3">Dec 13 - Dec 19, 2020</h2>
                                                <div class="arrow_box">
                                                <span class="icon_arr"><b-icon icon="chevron-left" scale="1"></b-icon></span>
                                                <span class="icon_arr"><b-icon icon="chevron-right" scale="1"></b-icon></span>
                                            </div>
                                        </b-col>
                                    </b-row>                                   

                                </div>

                            </div>

                            <b-row class="m-0">
                                <b-col md="12" class="scrolling_table scroll_bar">
                                    
                                    <table class="table horizontal_table">

                                        <thead>
                                            <tr>
                                                <th>Plumber</th>
                                                <th>Sun, 13</th>
                                                <th>Mon, 14</th>
                                                <th>Tue, 15</th>
                                                <th>Wen, 15</th>
                                                <th>Thur, 16</th>
                                                <th>Fri, 16</th>
                                                <th>Sat, 16</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr>
                                                <td>
                                                    <div class="imgwidttext">
                                                        <img src="../../../assets/images/user.jpg" />
                                                        <p>Wade Warren</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>                                       
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div class="imgwidttext">
                                                        <img src="../../../assets/images/user.jpg" />
                                                        <p>Wade Warren</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>                                       
                                            </tr> 

                                            <tr>
                                                <th>Carpanter</th>
                                                <th>Sun, 13</th>
                                                <th>Mon, 14</th>
                                                <th>Tue, 15</th>
                                                <th>Wen, 15</th>
                                                <th>Thur, 16</th>
                                                <th>Fri, 16</th>
                                                <th>Sat, 16</th>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div class="imgwidttext">
                                                        <img src="../../../assets/images/user.jpg" />
                                                        <p>Wade Warren</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>                                       
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div class="imgwidttext">
                                                        <img src="../../../assets/images/user.jpg" />
                                                        <p>Wade Warren</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>                                       
                                            </tr>

                                             <tr>
                                                <th>Hostes</th>
                                                <th>Sun, 13</th>
                                                <th>Mon, 14</th>
                                                <th>Tue, 15</th>
                                                <th>Wen, 15</th>
                                                <th>Thur, 16</th>
                                                <th>Fri, 16</th>
                                                <th>Sat, 16</th>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div class="imgwidttext">
                                                        <img src="../../../assets/images/user.jpg" />
                                                        <p>Wade Warren</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>                                       
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div class="imgwidttext">
                                                        <img src="../../../assets/images/user.jpg" />
                                                        <p>Wade Warren</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>
                                                <td>
                                                    <p>06:00 - 18:30</p>
                                                    <p>11.5 hour | 0.5</p>
                                                    <a class="seetm" href="javascript:;">See Timesheet</a>
                                                </td>                                       
                                            </tr>          

                                        </tbody>

                                    </table>

                                </b-col>
                            </b-row>

                        </div>
                    </b-col>
                </b-row>

            </multipane>
            
            

        </div>
        
    </div>

</template>
<script>

import { Multipane, MultipaneResizer } from 'vue-multipane';
export default {
  name: 'WorkOrderHistory',
  components: {
    Multipane,
    MultipaneResizer,
  },
  data() {
      return {
        selected: null,
        workorderdata: [
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 06 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Nov 29 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Nov 22 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Nov 15 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Nov 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Nov 14 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Nov 10 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Nov 12 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'},
            {date: "Dec 13 - Dec 19, 2020 ",position: '4',workers: '8'}
        ]
      }
    },
    methods: {

    }
}
</script>

<style>
.custom-resizer {
  width: 100%;
}
.custom-resizer > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #eee;
  border: 1px solid #ccc; 
}
.custom-resizer > .pane ~ .pane {
    opacity: 1;
}
.custom-resizer > .multipane-resizer {
  margin: 0; left: 0;
  position: relative;
}

.custom-resizer > .multipane-resizer::before {
display: block;
    content: "";
    width: 3px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -1.5px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
</style>