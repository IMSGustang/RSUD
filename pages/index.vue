<template>
  <section class="container">
    <div class="c-carousel">
      <el-carousel :interval="4200" indicator-position="none">
        <el-carousel-item>
          <img src="~/static/slide/Head1.jpg"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="~/static/slide/Head2.jpg"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="~/static/slide/Head3.jpg"/>
        </el-carousel-item>
        <el-carousel-item>
          <img src="~/static/slide/Head4.jpg"/>
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
                <nuxt-link to="/dokter/jadwal">
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
                <nuxt-link to="/dokter/profil-dokter">
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

                    Profil Dokter
                  </el-card>
                </nuxt-link>
              </swiper-slide>
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
                  <nuxt-link to="layanan/layanan-unggulan">
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

                      Pusat Rujukan TB - MDR
                    </el-card>
                  </nuxt-link>
                </swiper-slide>

                <swiper-slide>
                  <nuxt-link to="layanan/layanan-unggulan">
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

                      Bedah Saraf
                    </el-card>
                  </nuxt-link>
                </swiper-slide>

                <swiper-slide>
                  <nuxt-link to="layanan/layanan-unggulan">
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

                      VCT
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

    <div class="c-amenities">
      <no-ssr>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h1 class="title">Fasilitas</h1>
            <h5 class="subtitle">RSUD Labuang Baji memiliki fasilitas terbaik</h5>
            <div style="position: relative">
              <swiper :options="swiperAmenities">
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_1.png" />
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_2.png" />
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_3.png" />
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_4.png" />
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_5.png" />
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_6.png" />
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_7.png" />
                  </el-card>
                </swiper-slide>
                <swiper-slide>
                  <el-card shadow="never">
                    <img src="~/static/fasilitas/F_8.png" />
                  </el-card>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </el-col>
        </el-row>
      </no-ssr>
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
              slidesPerView: 1
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
              slidesPerView: 1
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
        },

        swiperAmenities: {
          slidesPerView: 3,
          spaceBetween: 15,
          autoplay: {
            delay: 3600
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          breakpoints: {
            1200: {
              slidesPerView: 3
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
