<template>
  <section class="c-doctor">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="20">
        <div class="c-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">beranda</el-breadcrumb-item>
            <el-breadcrumb-item>dokter</el-breadcrumb-item>
            <el-breadcrumb-item>jadwal dokter poli reguler</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "jadwalreguler"
  }
</script>
