<template>
  <el-container>
    <div class="c-breadcrumb-nav hidden-xs-only">
      <el-breadcrumb separator="">
        <el-breadcrumb-item> <i class="el-icon-message"></i> rsudlabuangbaji.sulsel@gmail.com</el-breadcrumb-item>
        <el-breadcrumb-item> <i class="el-icon-phone-outline"></i> 0411 872120</el-breadcrumb-item>
        <el-breadcrumb-item> <i class="el-icon-printer"></i> 0411  830454</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-header>
      <navbar/>
    </el-header>

    <el-main style="padding: 0">
      <nuxt/>
    </el-main>

    <div class="c-footer">
      <div style="margin: 0 -15px">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.6331647555594!2d119.41606761444271!3d-5.162575696253686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee29fcc0bfa65%3A0x66424456bfc383b5!2sRSUD+Labuang+Baji!5e0!3m2!1sid!2sid!4v1538991650144" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen></iframe>
      </div>
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
                  Email rsudlabuangbaji.sulsel@gmail.com
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

                <p class="download">Download Sekarang</p>
                <img src="~/static/playstore.png" />
              </el-card>
            </el-col>
          </el-row>

          <el-row :gutter="0">
            <el-col :xs="24" :sm="24" :md="24">
              <el-footer>
                <div class="item">
                  <div class="icon-sosmed">
                    <a href="" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>

                    <a href="" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-twitter">
                        <path
                          d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>

                    <a href="" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                  <p>&copy; 2018 RSUD Labuang Baji, Makassar</p>
                </div>
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
