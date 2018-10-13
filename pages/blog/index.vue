<template>
  <section class="c-article">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Blog</h2>
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
            <el-breadcrumb-item>blog</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-article--body">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6" :lg="8" v-for="data in 9" :key="data" v-scroll-reveal.reset.nomobile="{delay:300}">
              <nuxt-link to="/view">
                <el-card shadow="never">
                  <el-tag size="medium">Berita</el-tag>
                  <img class="c-img" src="~/static/gallery/kebidanan/DSCF9301.jpg"/>

                  <div class="item-body">
                    <p class="author"> Author : Humas RSUD Labuang Baji </p>

                    <h2 class="c-title c-title-line">
                      Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                    </h2>

                    <p class="c-subtitle c-subtitle-line">
                      Direktur Utama RSUP Dr. Sardjito, Dr. dr. Darwito, SH., Sp.B(K)Onk. dilantik menjadi ketua
                      Perhimpunan Rumah Sakit Seluruh Indonesia (PERSI) Daerah Istimewa Yogyakarta (DIY) periode tahun
                      2018-2021. Prosesi pelantikan pengurus PERSI dan MAKERSI (Majelis Kehormatan Etik Rumah Sakit
                      Indonesia) DIY periode tahun 2018-2021 berlangsung di Ruang Utama Gedung Diklat RSUP Dr. Sardjito
                      pada Jumat, 28 September 2018. Sebanyak 100 pengurus dari 67 rumah sakit yang menjadi anggota
                      PERSI
                      dilantik oleh ketua umum PERSI, yaitu dr. Kuntjoro Adi Purjanto, M.Kes. Dalam sambutannya, beliau
                      menyampaikan setelah terbentuknya PERSI sekitar 40 tahun silam, PERSI harus memiliki core value
                      yang
                      terintegrasi sebagai pengerat visi dan misi yang telah dibentuk, seperti akses, pattient safety,
                      pattient center care, cost effective, cost efficient, adil dan memperhitungkan waktu.
                    </p>
                  </div>
                </el-card>
              </nuxt-link>
            </el-col>
          </el-row>

          <!--<div class="c-pagination">-->
            <!--<el-pagination-->
              <!--background-->
              <!--layout="prev, pager, next"-->
              <!--:total="1000">-->
            <!--</el-pagination>-->
          <!--</div>-->
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "blog"
  }
</script>
