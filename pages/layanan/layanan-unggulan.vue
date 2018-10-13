<template>
  <section class="c-layanan">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">layanan unggulan</h2>
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
            <el-breadcrumb-item>layanan</el-breadcrumb-item>
            <el-breadcrumb-item>layanan unggulan</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-layanan--body">
          <el-collapse v-model="unggulan" accordion>
            <el-collapse-item title="Pusat Rujukan TB-MDR" name="1">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>
            <el-collapse-item title="Bedah Saraf" name="2">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>
            <el-collapse-item title="VCT" name="3">
              <div>
                Tidak ada deskripsi
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "layanan-unggulan",
    data() {
      return {
        unggulan: '1'
      }
    }
  }
</script>
