<template>
  <section class="c-article">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="20">
        <div class="c-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">beranda</el-breadcrumb-item>
            <el-breadcrumb-item>artikel</el-breadcrumb-item>
            <el-breadcrumb-item>berita</el-breadcrumb-item>
            <el-breadcrumb-item>Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-main c-details">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="16">
              <el-card shadow="never">
                <h2 class="title">
                  Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                </h2>
                <el-row :gutter="0">
                  <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <p class="subtitle">
                      Author : Humas RSUD Labuang Baji
                    </p>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="12">
                    <p class="subtitle text-right">
                      06/10/2018
                    </p>
                  </el-col>
                </el-row>
                <img src="~/static/gallery/kebidanan/DSCF9301.jpg" />
                <div class="item item-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam atque beatae commodi
                    consectetur consequatur, eligendi explicabo ipsam iste itaque molestiae numquam odio officia placeat
                    provident qui, saepe velit veniam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam atque beatae commodi
                    consectetur consequatur, eligendi explicabo ipsam iste itaque molestiae numquam odio officia placeat
                    provident qui, saepe velit veniam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam atque beatae commodi
                    consectetur consequatur, eligendi explicabo ipsam iste itaque molestiae numquam odio officia placeat
                    provident qui, saepe velit veniam.
                  </p>
                </div>
              </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="8" class="hidden-sm-and-down">
              <div class="sticky-top">
                <el-card class="c-side" shadow="never">
                  <h2 class="title-side">Berita Lainnya</h2>
                  <div class="item item-link">
                    <nuxt-link to="">
                      Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                    </nuxt-link>
                  </div>
                  <div class="item item-link">
                    <nuxt-link to="">
                      Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                    </nuxt-link>
                  </div>
                  <div class="item item-link">
                    <nuxt-link to="">
                      Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                    </nuxt-link>
                  </div>
                </el-card>

                <el-card class="c-side" shadow="never">
                  <h2 class="title-side">Artikel Lainnya</h2>
                  <div class="item item-link">
                    <nuxt-link to="">
                      Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                    </nuxt-link>
                  </div>
                  <div class="item item-link">
                    <nuxt-link to="">
                      Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                    </nuxt-link>
                  </div>
                  <div class="item item-link">
                    <nuxt-link to="">
                      Direktur Utama RSUD Labuang Baji Dilantik Menjadi Ketua PERSI DIY Periode 2018-2021
                    </nuxt-link>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "index"
  }
</script>
