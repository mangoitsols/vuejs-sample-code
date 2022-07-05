<template>
  
  <div>
        <div class="form_part1 common_form">
            <h2>Which position(s)<br /> do you need?</h2>

            <div class="form_panel">
                <h4></h4>
                <div class="accordian_main" v-for="(reptform,k) in reptform" :key="k">

                <b-card no-body class="mb-1">
                    <div class="accordian_title">
                    <b-button block v-b-toggle="'collapse-'+k" variant="info">Position({{k+1}})</b-button>                    
                    <b-icon @click="remove(k)" v-show="k || ( !k && reptform.length > 1)" class="delete_position" icon="trash-fill" scale="1"></b-icon>
                    </div>
                <b-collapse :id="'collapse-'+k" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="accordian_content">
                        <h4>General Info</h4>
                        <div class="form_inner">
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
                    </div> 
                    </b-card-body>
                </b-collapse>
                </b-card>                                                             
                </div>    
                <b-button class="theme-color1 add_more_opt" block variant="primary" @click="repeatform"><span>+</span> Add one more position</b-button>
            </div>
        </div>


    </div>

</template>

<script>
export default {
  name: 'PositionInfo',
    data() {
    return {
        fullname: {
            value: '',
            valid: false
        },
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