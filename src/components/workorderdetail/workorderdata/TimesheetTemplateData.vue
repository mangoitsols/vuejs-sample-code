<template>
    
    <div>
        
        <div class="table_section_main">

            <b-row>
                <b-col md="12" class="text-right mb-3">
                    <b-button class="theme-color1" @click="createposition">Close Preview</b-button>
                </b-col>
            </b-row>

            <div class="table_content single_table">

                <table class="table">
                    <thead>
                        <tr>
                            <th><b-form-checkbox value="1"></b-form-checkbox></th>
                            <th>Date<span></span></th>
                            <th>Time In<span></span></th>
                            <th>Time Out<span></span></th>
                            <th>Breake<span></span></th>
                            <th>Job Location<span></span></th>
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
                            
                            <td>
                                <p>Dec, 29, 2020</p>
                            </td>

                            <td>12:00 AM</td>

                            <td>
                              8:00 PM
                            </td>

                            <td>
                                 2h
                            </td>

                            <td>
                                <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                            </td>
                        </tr>                       

                    </tbody>
                </table>

            </div>

        </div>
        
    </div>

</template>
<script>
export default {
  name: 'TimesheetTemplateData',
  data() {
      return {        
      }
    },
    methods: {

    }
}
</script>