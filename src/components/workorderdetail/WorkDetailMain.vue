<template>

    <div class="work_area working_ar">
      <h2 class="title1">Work order details</h2>
      <ul class="breadcumb">
          <li><a href="#">Dashboard</a></li>
          <li>Work order details #BRS-453</li>
      </ul>
      <p class="breadcumb2">Freinds.io<span>28/05/2020</span></p>
      <h3 class="title3"><a href="#">#BRS-453</a> Cleanup of Friends.io headquarters <span class="sucess_tag">Confirmed</span></h3>
      <div class="inline_boxes1">
        <ul>
            <li><p><span>Needed</span> 30 people</p></li>
            <li><p><span>Added</span> 5 people</p></li>
            <li><p><span>Working</span> 1people</p></li>
        </ul>
      </div>

      <div class="tabbing_box">        
        <b-tabs
          active-nav-item-class="text-uppercase text-danger"
          active-tab-class=""
          content-class="tabbing_content_box"
        >
          <b-tab title="Job Infomation">
            <div class="tabworking_area">
              <JobInformation />
            </div>            
          </b-tab>

          <b-tab title="General Information">
            <div class="tabworking_area">
              <GenralInformation />
            </div>
          </b-tab>

          <b-tab title="Positions" active>
              <div class="table_area">
                <PositionData />
              </div>
          </b-tab>

          <b-tab title="Workers">
            <Workers />
          </b-tab>

          <b-tab title="Work Order History">
            <WorkOrderHistory />
          </b-tab>

          <b-tab title="Timesheet Templates">              
              <TimesheetTemplate />
          </b-tab>

      </b-tabs>

      </div>
        
    </div>

</template>

<script>
import JobInformation from './workorderdata/JobInformation.vue';
import GenralInformation from './workorderdata/GeneralIformation.vue';
import PositionData from './workorderdata/PositionData.vue';
import Workers from './workorderdata/Workers.vue';
import WorkOrderHistory from './workorderdata/WorkOrderHistory.vue';
import TimesheetTemplate from './workorderdata/TimesheetTemplate.vue';
export default {
  name: 'WorkDetailMain',
   components: {
     JobInformation, 
     GenralInformation,
     PositionData,
     Workers,
     WorkOrderHistory,
     TimesheetTemplate
   }
}
</script>