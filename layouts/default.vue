<template>
  <el-container>
    <div class="c-breadcrumb-nav hidden-xs-only">
      <el-breadcrumb separator="">
        <el-breadcrumb-item><span class="text-danger">EMERGENCY</span> (0274) 583613</el-breadcrumb-item>
        <el-breadcrumb-item>Telp. 0411 872120</el-breadcrumb-item>
        <el-breadcrumb-item>Fax. 0411  830454</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-header>
      <navbar/>
    </el-header>

    <el-main style="padding: 0">
      <no-ssr>
        <nuxt/>
      </no-ssr>
    </el-main>

    <div class="c-footer">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="24" :md="20" :lg="20">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="8" :md="8">
              <el-card shadow="never">
                <h2 class="title">Informasi</h2>
                <div class="item">
                  <nuxt-link to="">
                    Syarat Pendaftaran Pasien BPJS
                  </nuxt-link>
                </div>
                <div class="item">
                  <nuxt-link to="">
                    Informasi Jadwal Besuk
                  </nuxt-link>
                </div>
                <div class="item">
                  <nuxt-link to="">
                    Pelajari Alur Pendaftaran
                  </nuxt-link>
                </div>
                <div class="item">
                  <nuxt-link to="">
                    Ketersediaan Tempat Tidur
                  </nuxt-link>
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8">
              <el-card shadow="never">
                <h2 class="title">Hubungi Kami</h2>
                <div class="item">
                  Emergency Call (0274) 583613
                </div>
                <div class="item">
                  Telp. 0411  872120
                </div>
                <div class="item">
                  Fax. 0411  830454
                </div>
              </el-card>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8">
              <el-card shadow="never">
                <p>
                  Rumah Sakit Umum Daerah Labuang Baji Makassar <br>
                  <span>Jl. Dr Samratulangi No 81, makassar</span>
                </p>
              </el-card>
            </el-col>
          </el-row>

          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24">
              <el-footer>
                <p>&copy; 2018 RSUD Labuang Baji, Makassar</p>
              </el-footer>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </el-container>
</template>

<script>
  import Navbar from '@/components/navbar';

  export default {
    components: {
      Navbar
    }
  }
</script>
