<template>
    <div class="form_part2 common_form">
        <h2>Please provide billing<br /> information</h2>
        <div class="form_panel">
            <h4></h4>
            <div class="form_inner">
                <b-form-group
                    id="full_name"
                    label="Full Name*"
                    label-for="full_name"
                    >
                    <b-form-input
                    id="full_name"
                    type="text"
                    placeholder="Enter fll billing name"
                    v-model="form5.fullname"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="po_number"
                    label="PO Number"
                    label-for="po_number"
                    >
                    <b-form-input
                    id="po_number"
                    type="text"
                    placeholder="Type PO number"
                    v-model="form5.ponumber"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="billing_address"
                    label="Billing Address Street*"
                    label-for="billing_address"
                    >
                    <b-form-input
                    id="billing_address"
                    type="text"
                    placeholder="Type address"
                    v-model="form5.billingaddress"
                    required
                    ></b-form-input>
                </b-form-group>
               
                <b-form-group
                    id="email"
                    label="Email*"
                    label-for="email"
                    >

                    <b-form-input
                    id="email"
                    type="text"
                    placeholder="Enter email of contact person"
                    v-model="form5.email"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="state"
                    label="State* "
                    label-for="state"
                    >
                   <b-form-input
                    id="state"
                    type="text"
                    placeholder="Enter State"
                    v-model="form5.state"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="zip_code"
                    label="Zip Code *"
                    label-for="zip_code"
                    >
                   <b-form-input
                    id="zip_code"
                    type="text"
                    placeholder="Enter zipcode"
                    v-model="form5.zipcode"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="phone"
                    label="Phone *"
                    label-for="phone"
                    >
                   <b-form-input
                    id="phone"
                    type="text"
                    placeholder="+1__ _ __"
                    v-model="form5.phone"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="city"
                    label="City *"
                    label-for="city"
                    >
                   <b-form-input
                    id="city"
                    type="text"
                    placeholder="Enter City"
                    v-model="form5.city"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="invoice_note"
                    label="Invoice Notes *"
                    label-for="invoice_note"
                    >

                    <b-form-textarea
                    id="invoice_note"
                    placeholder="Write invoice notice"
                    rows="3"
                    max-rows="6"
                    v-model="form5.invoicenote"
                    ></b-form-textarea>
                </b-form-group>


            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BillingInfo',
  props: ['form5'],
    data() {
    return {       
    }
  }
}
</script>