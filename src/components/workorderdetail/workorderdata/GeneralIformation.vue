<template>
    
    <div>
        <h2 class="d-flex justify-content-between">General Information <a class="edtit_btn" href="javascript:;">Edit</a></h2>
        <h3>Company Information</h3>

        <div class="editable_form lable_style1">

            <b-row>

                <b-col md="12">

                    <b-form-group
                        id="companyname"
                        label="Company name"
                        label-for="companyname"
                        >
                        <b-form-input
                        id="companyname"
                        type="text"
                        value="Friends.io"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

                <b-col md="12">

                    <b-form-group
                        id="person_full_name"
                        label="Contact person Full name"
                        label-for="person_full_name"
                        >
                        <b-form-input
                        id="person_full_name"
                        type="text"
                        value="Dianne Russell"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

            </b-row>
                
            <b-row>
                
                <b-col md="4">

                    <b-form-group
                        id="companysite"
                        label="Company Site"
                        label-for="companysite"
                        >
                        <b-form-input
                        id="companysite"
                        type="text"
                        value="Friends.io"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

                <b-col md="4">

                    <b-form-group
                        id="person_email"
                        label="contact email"
                        label-for="person_email"
                        >
                        <b-form-input
                        id="person_email"
                        type="text"
                        value="ross.geller@friends.com"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

                <b-col md="4">

                    <b-form-group
                        id="contactphone"
                        label="contact email"
                        label-for="contactphone"
                        >
                        <b-form-input
                        id="contactphone"
                        type="text"
                        value="+ 1 254 564 6500"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

            </b-row>

            <h3>Billing Information</h3>

            <b-row>

                <b-col md="8">

                    <b-form-group
                        id="bfullname"
                        label="Full Name"
                        label-for="bfullname"
                        >
                        <b-form-input
                        id="bfullname"
                        type="text"
                        value="Dianne Russell"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

                <b-col md="4">

                    <b-form-group
                        id="bPONumber"
                        label="PO Number"
                        label-for="bPONumber"
                        >
                        <b-form-input
                        id="bPONumber"
                        type="text"
                        value="12345"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

            </b-row>

            <b-row>            

                <b-col md="12">

                    <b-form-group
                        id="BAdressStreet"
                        label="Billing Adress Street"
                        label-for="BAdressStreet"
                        >
                        <b-form-input
                        id="BAdressStreet"
                        type="text"
                        value="3891 Ranchview Dr. Richardson, California 62639"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>             

            </b-row> 

            <b-row>

                <b-col md="4">

                    <b-form-group
                        id="bstate"
                        label="State"
                        label-for="bstate"
                        >
                        <b-form-input
                        id="bstate"
                        type="text"
                        value="Arizona"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

                <b-col md="4">

                    <b-form-group
                        id="bcity"
                        label="City"
                        label-for="bcity"
                        >
                        <b-form-input
                        id="bcity"
                        type="text"
                        value="Austin"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

                 <b-col md="4">

                    <b-form-group
                        id="bZipCode"
                        label="Zip Code"
                        label-for="bZipCode"
                        >
                        <b-form-input
                        id="bZipCode"
                        type="text"
                        value="99573"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

            </b-row>

            <b-row>

                <b-col md="6">

                    <b-form-group
                        id="bEmail"
                        label="Email"
                        label-for="bEmail"
                        >
                        <b-form-input
                        id="bEmail"
                        type="text"
                        value="tim.jennings@example.com"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

                <b-col md="6">

                    <b-form-group
                        id="bPhone"
                        label="Phone"
                        label-for="Phone"
                        >
                        <b-form-input
                        id="bPhone"
                        type="text"
                        value="+1 256 345 6500"
                        required
                        ></b-form-input>
                    </b-form-group>

                </b-col>

            </b-row>

            <b-row>
                <b-col md="12">
                    <b-form-group
                        id="bInvoicNotes"
                        label="Invoice Notes"
                        label-for="bInvoicNotes"
                        >
                        <b-form-textarea
                        id="bInvoicNotes"                                           
                        rows="3"
                        max-rows="8"
                        value="Non, quam amet sit tortor, aliquam consequat, elementum, aliquet sit. Pellentesque orci magna imperdiet condimentum urna iaculis. Quisque sed donec a in proin enim. Tortor faucibus lacus gravida facilisi ullamcorper tellus feugiat. Enim parturient et cum proin id tristique."
                        ></b-form-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
            <h3>Attachments</h3>

            <b-row>
                <b-col md="12">
                    <label>Your files</label>
                    <div class="fileattchament1">
                        <span><b-icon icon="paperclip" scale="1"></b-icon> Your files.pdf</span>
                    </div>
                </b-col>
            </b-row>

        </div>
    </div>

</template>
<script>

export default {
    name: 'GenralInformation',
}

</script>
