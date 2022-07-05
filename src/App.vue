<template>
  <div id="app">
    <b-container class="p-0" fluid>

      <div class="sidebar_fixed">

        <ul>
          <li><router-link to="/">Work Order Form</router-link></li>
          <li><router-link to="/WorkOrderDetail">Work Order Detail</router-link></li>       
          <li><router-link to="/WorkOrdersMain">Work Order Main</router-link></li>
          <li><router-link to="/WorkDetailMainPage">All Work Order</router-link></li>
          <li><router-link to="/Applicant">Applicant</router-link></li>
          <li><router-link to="/ApplicantDetail">ApplicantDetail</router-link></li>
        </ul>

      </div>
      <router-view></router-view>

    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import 'assets/css/style.css';
</style>
