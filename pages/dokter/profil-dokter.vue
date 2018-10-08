<template>
  <section class="c-doctor">
    <div class="c-head c-head-docktor">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Dokter</h2>
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
            <el-breadcrumb-item>dokter</el-breadcrumb-item>
            <el-breadcrumb-item>profil dokter</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-doctor--body">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="data in 8" :key="data">
              <nuxt-link to="/artikel/view">
                <el-card shadow="never">
                  <div class="c-box">
                    <img class="c-img" src="~/static/doctors/d2.png"/>
                  </div>

                  <div class="item-body">
                    <h2 class="title">Drs. Jhon Doe</h2>
                    <h4 class="subtitle">Dokter Spesialis</h4>
                  </div>
                </el-card>
              </nuxt-link>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "profil-dokter"
  }
</script>
