<template>
  
  <div>
      <div class="form_timeline">
        <ul>          
            <li class="active" :class="`${timelinedt == 1 ? 'text-show' : ''}`"><p><span>Initial info</span></p></li>
            <li :class="`${timelinedt !== 1 ? 'active' : ''} ${timelinedt == 2 ? 'text-show' : ''}`"><p><span>Job Info</span></p></li>
            <li :class="`${timelinedt !== 2 & timelinedt !== 1 ? 'active' : ''} ${timelinedt == 3 ? 'text-show' : ''}`"><p><span>Position(s) Info</span></p></li>
            <li :class="`${timelinedt !== 2 & timelinedt !== 1 & timelinedt !== 3 ? 'active' : ''} ${timelinedt == 4 ? 'text-show' : ''}`"><p><span>Contact Person Info</span></p></li>
            <li :class="`${timelinedt !== 2 & timelinedt !== 1 & timelinedt !== 3 & timelinedt !== 4 ? 'active' : ''} ${timelinedt == 5 ? 'text-show' : ''}`"><p><span>Billing Info</span></p></li>
            <li :class="`${timelinedt !== 2 & timelinedt !== 1 & timelinedt !== 3 & timelinedt !== 4 & timelinedt !== 5 ? 'active' : ''} ${timelinedt == 6 ? 'text-show' : ''}`"><p><span>Attachements</span></p></li>
        </ul>
        </div>
  </div>

</template>

<script>
export default {
  name: 'TimelineTab',
  props: ['timelinedt'],
}
</script>