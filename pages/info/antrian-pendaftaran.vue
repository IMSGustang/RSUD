<template>
  <section class="c-info">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Informasi Antrian Pendaftaran</h2>
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
            <el-breadcrumb-item>informasi antrian pendaftaran</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-info--body">
          <h2 class="title">Daftar Informasi Antrian Pasien Rawat Jalan RSUD Labuang Baji Makassar</h2>
          <el-table
            :data="doctors"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="Nama Pasien"
              width="250">
            </el-table-column>

            <el-table-column
              prop="nopasien"
              label="Nomor Antrian">
            </el-table-column>
            <el-table-column
              prop="date"
              label="Tanggal Pendaftaran">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
    name: "antrian-pendaftaran",
    data() {
      return {

      }
    }
  }
</script>
