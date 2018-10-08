<template>
  <section class="c-info">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Informasi Tempat Tidur</h2>
            <h6 class="subtitle">RSUD Labuang Baji Makassar</h6>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="20">
        <div class="c-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">beranda</el-breadcrumb-item>
            <el-breadcrumb-item>info pengunjung</el-breadcrumb-item>
            <el-breadcrumb-item>informasi tempat tidur</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-info--body">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <el-card shadow="never"></el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <el-card shadow="never"></el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8">
              <el-card shadow="never"></el-card>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "tempat-tidur"
  }
</script>
