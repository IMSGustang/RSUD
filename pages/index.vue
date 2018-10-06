<template>
  <section class="container">
    <div class="c-carousel">
      <el-carousel indicator-position="none">
        <el-carousel-item>
          <img src="~/static/slide/s_1.jpg"/>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="c-category">
      <no-ssr>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <swiper :options="swiperCategory">
              <swiper-slide>
                <nuxt-link to="/info/pendaftaran-online">
                  <el-card class="color-1">
                    <div class="c-box-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-calendar">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>

                    Pendaftaran Online
                  </el-card>
                </nuxt-link>
              </swiper-slide>

              <swiper-slide>
                <nuxt-link to="/dokter/jadwalreguler">
                  <el-card class="color-2">
                    <div class="c-box-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-git-pull-request">
                        <circle cx="18" cy="18" r="3"></circle>
                        <circle cx="6" cy="6" r="3"></circle>
                        <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                        <line x1="6" y1="9" x2="6" y2="21"></line>
                      </svg>
                    </div>

                    Jadwal Dokter
                  </el-card>
                </nuxt-link>
              </swiper-slide>

              <swiper-slide>
                <nuxt-link to="/info/tempat-tidur">
                  <el-card class="color-3">
                    <div class="c-box-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-list">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3" y2="6"></line>
                        <line x1="3" y1="12" x2="3" y2="12"></line>
                        <line x1="3" y1="18" x2="3" y2="18"></line>
                      </svg>
                    </div>

                    Info Kamar
                  </el-card>
                </nuxt-link>
              </swiper-slide>

              <swiper-slide>
                <nuxt-link to="/info/antrian-pendaftaran">
                  <el-card class="color-4">
                    <div class="c-box-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-users">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>

                    Antrian Pasien
                  </el-card>
                </nuxt-link>
              </swiper-slide>

              <!--<swiper-slide>-->
              <!--<nuxt-link to="">-->
              <!--<el-card class="color-5">-->
              <!--<div class="c-box-icon">-->
              <!--<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"-->
              <!--stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
              <!--class="feather feather-heart">-->
              <!--<path-->
              <!--d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>-->
              <!--</svg>-->
              <!--</div>-->

              <!--Kepuasan Pelanggan-->
              <!--</el-card>-->
              <!--</nuxt-link>-->
              <!--</swiper-slide>-->
              <!--<swiper-slide>-->
              <!--<nuxt-link to="">-->
              <!--<el-card class="color-6">-->
              <!--<div class="c-box-icon">-->
              <!--<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"-->
              <!--stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
              <!--class="feather feather-mail">-->
              <!--<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>-->
              <!--<polyline points="22,6 12,13 2,6"></polyline>-->
              <!--</svg>-->
              <!--</div>-->

              <!--Hubungi Kami-->
              <!--</el-card>-->
              <!--</nuxt-link>-->
              <!--</swiper-slide>-->

              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
          </el-col>
        </el-row>
      </no-ssr>
    </div>

    <div class="c-services">
      <no-ssr>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h1 class="title">Layanan Unggulan</h1>
            <h5 class="subtitle">RSUD Labuang Baji memiliki layanan unggulan diantaranya :</h5>

            <div style="position: relative">
              <swiper :options="swiperServices">
                <swiper-slide>
                  <nuxt-link to="">
                    <el-card shadow="never">
                      <div class="c-box-icon c-box-icon__border-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-package">
                          <path
                            d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                          <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                          <line x1="12" y1="22.76" x2="12" y2="11"></line>
                          <line x1="7" y1="3.5" x2="17" y2="8.5"></line>
                        </svg>
                      </div>

                      Jantung Terpadu
                    </el-card>
                  </nuxt-link>
                </swiper-slide>
                <swiper-slide>
                  <nuxt-link to="">
                    <el-card shadow="never">
                      <div class="c-box-icon c-box-icon__border-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-package">
                          <path
                            d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                          <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                          <line x1="12" y1="22.76" x2="12" y2="11"></line>
                          <line x1="7" y1="3.5" x2="17" y2="8.5"></line>
                        </svg>
                      </div>

                      Kanker Terpadu
                    </el-card>
                  </nuxt-link>
                </swiper-slide>
                <swiper-slide>
                  <nuxt-link to="">
                    <el-card shadow="never">
                      <div class="c-box-icon c-box-icon__border-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-package">
                          <path
                            d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                          <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                          <line x1="12" y1="22.76" x2="12" y2="11"></line>
                          <line x1="7" y1="3.5" x2="17" y2="8.5"></line>
                        </svg>
                      </div>

                      Homecare
                    </el-card>
                  </nuxt-link>
                </swiper-slide>

                <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
              </swiper>
            </div>
          </el-col>
        </el-row>
      </no-ssr>
    </div>

    <div class="c-information">
      <no-ssr>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h1 class="title">Informasi Pasien</h1>
            <h5 class="subtitle">RSUD Labuang Baji memiliki layanan informasi untuk pasien diantaranya :</h5>
            <div style="position: relative">
              <swiper :options="swiperInformation">
                <swiper-slide>
                  <el-card shadow="never">
                    Syarat Pendaftaran Pasien BPJS

                    <p>
                      <nuxt-link to="/info/syarat-pendaftaran-pasien-bpjs">
                        <el-button type="primary" size="small" round plain>
                          Lihat disini <i class="el-icon-arrow-right el-icon-right"></i>
                        </el-button>
                      </nuxt-link>
                    </p>
                  </el-card>

                  <el-card shadow="never">
                    Ketersediaan Tempat Tidur

                    <p>
                      <nuxt-link to="/info/tempat-tidur">
                        <el-button type="primary" size="small" round plain>
                          Lihat disini <i class="el-icon-arrow-right el-icon-right"></i>
                        </el-button>
                      </nuxt-link>
                    </p>
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    Pelajari Alur Pendaftaran

                    <p>
                      <nuxt-link to="/info/pendaftaran-online">
                        <el-button type="primary" size="small" round plain>
                          Lihat disini <i class="el-icon-arrow-right el-icon-right"></i>
                        </el-button>
                      </nuxt-link>
                    </p>
                  </el-card>

                  <el-card shadow="never">
                    Informasi Jadwal Besuk

                    <p>
                      <nuxt-link to="/info/jadwal-besuk">
                        <el-button type="primary" size="small" round plain>
                          Lihat disini <i class="el-icon-arrow-right el-icon-right"></i>
                        </el-button>
                      </nuxt-link>
                    </p>
                  </el-card>
                </swiper-slide>

                <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
              </swiper>
            </div>
          </el-col>
        </el-row>
      </no-ssr>
    </div>

    <div class="c-news">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="24" :md="20">
          <h1 class="title">Berita Terbaru</h1>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="6" :lg="8" v-for="data in 3" :key="data">
              <nuxt-link to="/artikel/view">
                <el-card shadow="never">
                  <el-tag size="medium">Berita</el-tag>
                  <img class="c-img" src="~/static/news.png"/>

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

          <p class="c-btn">
            <nuxt-link to="/artikel/berita">
              <el-button type="primary" size="medium" round plain>Lihat semua berita <i class="el-icon-more"></i>
              </el-button>
            </nuxt-link>
          </p>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        swiperCategory: {
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1200: {
              slidesPerView: 4
            },
            992: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 2
            },
            520: {
              slidesPerView: 2
            },
            330: {
              slidesPerView: 1
            }
          }
        },

        swiperServices: {
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1200: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 2
            },
            520: {
              slidesPerView: 2
            },
            330: {
              slidesPerView: 1
            }
          }
        },

        swiperInformation: {
          slidesPerView: 2,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1200: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 2
            },
            520: {
              slidesPerView: 1
            },
            330: {
              slidesPerView: 1
            }
          }
        }
      }
    }
  }
</script>
