<template>
  <section class="c-doctor">
    <div class="c-head c-head-docktor">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Jadwal Dokter Poli Reguler</h2>
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
            <el-breadcrumb-item>jadwal dokter poli reguler</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-doctor--body">
          <h2 class="title-date">Senin, 9 Oktober 2018</h2>
          <el-table
            :data="doctors"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="Nama Dokter"
              width="250">
            </el-table-column>
            <el-table-column
              prop="poliklinik"
              label="Poliklinik">
            </el-table-column>
            <el-table-column
              prop="jam"
              label="Jam">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.jam }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "jadwalreguler",
    data() {
      return {
        doctors: [{
          name: 'Drs. Jhon Doe',
          poliklinik: 'Nama poliklinik',
          jam: '08:00 - 00:00'
        }, {
          name: 'Drs. Tom',
          poliklinik: 'Nama poliklinik',
          jam: '08:00 - 00:00'
        }],
      }
    }
  }
</script>
