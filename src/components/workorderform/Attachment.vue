<template>
  
  <div>
    <div class="form_part1 common_form">
        <h2>You can add some <br /> files, if you need</h2>
        <div class="form_panel">
            <div class="form_inner">
               <div class="fileattchament">
                   <p v-if="!form6.file1">Here will be your filles</p>                  
                    <div v-if="form6.file1" class="atch_doc row">
                        <div class="col-md-9 p-0 text-left">
                            <p>Your files</p>
                            <span class="file_name"><b-icon icon="paperclip" scale="1"></b-icon> {{form6.file1 ? form6.file1.name : '' }}</span>
                        </div>
                        <div class="col-md-3 p-0 text-right" style="margin-top: 35px;">
                            <b-icon @click="form6.file1 = null" class="reset_file" icon="trash-fill" scale="1"></b-icon>
                        </div>
                    </div>
                </div>
                <b-button class="theme-color1 fileattchament2" block variant="primary"><b-icon icon="paperclip" scale="1"></b-icon> Add attachment
                 <b-form-file
                   v-if="!form6.file1"
                    v-model="form6.file1"
                    class="fileattachment_inner"
                    :state="Boolean(form6.file1)"
                    drop-placeholder="Drop file here..."
                    ></b-form-file></b-button>      
            </div>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Attachment',
  props: ['form6'],
}
</script>