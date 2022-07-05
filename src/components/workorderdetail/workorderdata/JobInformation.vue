<template>
    
    <div>
        <h2 class="d-flex justify-content-between">Job Infomation <a class="edtit_btn" href="javascript:;">Edit</a></h2>
        <h3>Summary of job</h3>

        <div class="editable_form lable_style1">

            <b-row>

            <b-col md="6">

                <b-form-group
                    id="workordername"
                    label="Name of Work Order"
                    label-for="workordername"
                    >
                    <b-form-input
                    id="workordername"
                    type="text"
                    value="Cleanup of Friends.io headquaters"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

                <b-col md="3">

                <b-form-group
                    id="workorder"
                    label="Work Order #"
                    label-for="workorder"
                    >
                    <b-form-input
                    id="workorder"
                    type="text"
                    value="BRS-453"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

                <b-col md="3">

                <b-form-group
                    id="wordbranch"
                    label="Branch"
                    label-for="workordername"
                    >
                    <b-form-input
                    id="workordername"
                    type="text"
                    value="Main Branch"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            </b-row>

            <b-row>

            <b-col md="8" class="d-flex justify-content-between box3">

                <b-form-group
                    id="perioddate"
                    label="Period date"
                    label-for="workordername"
                    >
                    <b-form-input
                    id="perioddate"
                    type="text"
                    value="28/05/2020"
                    required
                    ></b-form-input>
                </b-form-group>
                __
                <b-form-group
                    id="perioddate2"
                    label=""
                    label-for="perioddate2"
                    >
                    <b-form-input
                    id="perioddate2"
                    type="text"
                    value="03/05/2020"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            <b-col md="4">

                <b-form-group
                    id="job_duration"
                    label="Job Duration"
                    label-for="job_duration"
                    >
                    <b-form-input
                    id="job_duration"
                    type="text"
                    value="Ongoin"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            </b-row>

            <b-row>            

            <b-col md="4">

                <b-form-group
                    id="peeople_need"
                    label="People Needed"
                    label-for="peeople_need"
                    >
                    <b-form-input
                    id="peeople_need"
                    type="text"
                    value="30"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            <b-col md="4">

                <b-form-group
                    id="Peopleadded"
                    label="People Added"
                    label-for="Peopleadded"
                    >
                    <b-form-input
                    id="Peopleadded"
                    type="text"
                    value="5"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            <b-col md="4">

                <b-form-group
                    id="working_people"
                    label="People Working"
                    label-for="working_people"
                    >
                    <b-form-input
                    id="working_people"
                    type="text"
                    value="1"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>                

            </b-row> 

            <b-row>

            <b-col md="6">

                <b-form-group
                    id="job_catagory"
                    label="Job Catagory"
                    label-for="job_catagory"
                    >
                    <b-form-input
                    id="job_catagory"
                    type="text"
                    value="IT & Engineering"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            <b-col md="6">

                <b-form-group
                    id="jobspeciality"
                    label="Job Speciality"
                    label-for="jobspeciality"
                    >
                    <b-form-input
                    id="jobspeciality"
                    type="text"
                    value="Database Administration"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            </b-row>


            <b-row>

            <b-col md="9">

                <b-form-group
                    id="job_location"
                    label="Job Location"
                    label-for="job_location"
                    >
                    <b-form-input
                    id="job_location"
                    type="text"
                    value="2464 Royal Ln. Mesa, New Jersey 45463"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            <b-col md="3">

                <b-form-group
                    id="WorkHours"
                    label="Work Hours"
                    label-for="WorkHours"
                    >
                    <b-form-input
                    id="WorkHours"
                    type="text"
                    value="Not endicated"
                    required
                    ></b-form-input>
                </b-form-group>

            </b-col>

            </b-row>


            <h3>Position Information</h3>

            <div class="accordian_main">

            <b-card no-body class="mb-1">
                <div class="accordian_title">
                <b-button block v-b-toggle="'collapse-1'" variant="info">Position(1)</b-button>                    
                </div>
                <b-collapse :id="'collapse-1'" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="accordian_content">                        
                            <div class="form_inner">
                                <b-row>

                                <b-col md="6">

                                    <b-form-group
                                        id="title_of_position"
                                        label="Title Of Position"
                                        label-for="title_of_position"
                                        >
                                        <b-form-input
                                        id="title_of_position"
                                        type="text"
                                        value="HR Manager"
                                        required
                                        ></b-form-input>
                                    </b-form-group>

                                </b-col>

                                <b-col md="6">

                                    <b-form-group
                                        id="peoplen1"
                                        label="People Needed"
                                        label-for="peoplen1"
                                        >
                                        <b-form-input
                                        id="peoplen1"
                                        type="text"
                                        value="30"
                                        required
                                        ></b-form-input>
                                    </b-form-group>

                                </b-col>

                                </b-row>

                                <b-row>

                                    <b-col md="12 mb-3">
                                    <label>Skills</label>
                                    <ul class="skill_list">
                                        <li>Adaptability <span>X</span></li>
                                        <li>Teamwork <span>X</span></li>
                                        <li>Leadership <span>X</span></li>
                                        <li>Problem Solving <span>X</span></li>
                                        <li>Confidentiality <span>X</span></li>
                                    </ul>
                                    </b-col>

                                </b-row>

                                <b-row>
                                    <b-col md="12">

                                    <b-form-group
                                        id="position_description"
                                        label="People Needed"
                                        label-for="position_description"
                                        >
                                        <b-form-textarea
                                        id="position_description"                                           
                                        rows="3"
                                        max-rows="6"
                                        value="Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. They may also handle employee relations, payroll, benefits, and training. Human resources managers plan, direct and coordinate the administrative functions of an organization. They oversee specialists in their duties; consult with executives on strategic planning, and link a company's management with its employees."
                                        ></b-form-textarea>
                                    </b-form-group>

                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col md="12">
                                    <h3>Full Description about Job</h3>
                                    <label>Job Description</label>
                                    <div class="textarea_box">
                                        <label>HR Specialist Job Description</label>
                                        <p>We are currently seeking a talented and professional human resource (HR) specialist to join our team and manage all human resource procedures. The successful candidate will be passionate about recruiting, supporting, and evolving employees through our company’s guidelines and managing processes.</p>
                                        <p>Your main responsibilities will include developing compensation and benefits packages, maintaining employee records, and recruiting new employees. To excel in this role, you should be an excellent communicator, with in-depth knowledge of the recruiting process and labor regulations.</p>
                                        <label>Responsibilities:</label>
                                        <ul>
                                        <li>Create, implement, and evaluate all human resource department policies, procedures, and structures.</li>
                                        <li>Manage health and life insurance programs.</li>
                                        <li>Design and implement effective training and development plans.</li>
                                        <li>Perform quarterly and annual employee performance reviews.</li>
                                        <li>Ensure all employee records are maintained and updated with new hire information or changes in employment status.</li>
                                        <li>Identify the company’s hiring needs and manage the recruitment process to ensure it runs smoothly.
                                        Track department budgets.</li>
                                        <li>Respond to employees’ queries and resolve issues in a timely and professional manner. Requirements:</li>
                                        <li>Bachelor’s degree in business administration, human resources or a relevant field.</li>
                                        </ul>
                                        <label>Requirements:</label>
                                        <ul>
                                        <li>Bachelor’s degree in business administration, human resources or a relevant field.</li>
                                        <li>A minimum of 3 years’ proven experience in a similar role.</li>
                                        <li>Strong knowledge of labor legislation and payroll processes.</li>
                                        <li>Good understanding of the full recruitment process.</li>
                                        <li>Outstanding verbal and written communication skills.</li>
                                        <li>Solid problem-solving and team management abilities.</li>                                           
                                        </ul>
                                    </div>
                                    </b-col>
                                </b-row>

                            </div>  
                        </div> 
                    </b-card-body>
                </b-collapse>
            </b-card>

            </div> 

        </div>
    </div>

</template>
<script>

export default {
    name: 'JobInformation',
}

</script>
