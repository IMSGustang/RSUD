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
          <h2 class="title-date">Profil Dokter Berdasarkan Klinik</h2>

          <div class="line-klinik">
            <span>Klinik Anak</span>
            <hr>
          </div>
          <el-row :gutter="15">
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-button type="text" @click="dialogVisible1 = true">
                <el-card shadow="never">
                  <div class="c-box">
                    <img class="c-img" src="~/static/doctors/d1.png"/>
                  </div>

                  <div class="item-body">
                    <h2>dr. Hj. Maryam</h2>
                  </div>
                </el-card>
              </el-button>
              <el-dialog :visible.sync="dialogVisible1" width="60%">
                <h1 style="margin-bottom: 5px;color: #333333;">dr. Hj. Maryam</h1>
                <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Anak</h4>
                <p style="margin-bottom: 10px">
                  <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                </p>

                <el-table :data="d1" style="width: 100%">
                  <el-table-column label="Jadwal Praktek">
                    <el-table-column prop="senin" label="Senin"></el-table-column>
                    <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                    <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                    <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                    <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                    <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                  </el-table-column>
                </el-table>
              </el-dialog>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-button type="text" @click="dialogVisible2 = true">
                <el-card shadow="never">
                  <div class="c-box">
                    <img class="c-img" src="~/static/doctors/d1.png"/>
                  </div>

                  <div class="item-body">
                    <h2>dr. Hj. Farida Albugis</h2>
                  </div>
                </el-card>
              </el-button>
              <el-dialog :visible.sync="dialogVisible2" width="60%">
                <h1 style="margin-bottom: 5px;color: #333333;">dr. Hj. Farida Albugis</h1>
                <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Anak</h4>
                <p style="margin-bottom: 10px">
                  <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                </p>

                <el-table :data="d2" style="width: 100%">
                  <el-table-column label="Jadwal Praktek">
                    <el-table-column prop="senin" label="Senin"></el-table-column>
                    <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                    <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                    <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                    <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                    <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                  </el-table-column>
                </el-table>
              </el-dialog>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-button type="text" @click="dialogVisible3 = true">
                <el-card shadow="never">
                  <div class="c-box">
                    <img class="c-img" src="~/static/doctors/d1.png"/>
                  </div>

                  <div class="item-body">
                    <h2>dr. Hj. Rahmi Rahim</h2>
                  </div>
                </el-card>
              </el-button>
              <el-dialog :visible.sync="dialogVisible3" width="60%">
                <h1 style="margin-bottom: 5px;color: #333333;">dr. Hj. Rahmi Rahim</h1>
                <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Anak</h4>
                <p style="margin-bottom: 10px">
                  <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                </p>

                <el-table :data="d3" style="width: 100%">
                  <el-table-column label="Jadwal Praktek">
                    <el-table-column prop="senin" label="Senin"></el-table-column>
                    <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                    <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                    <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                    <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                    <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                  </el-table-column>
                </el-table>
              </el-dialog>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-button type="text" @click="dialogVisible4 = true">
                <el-card shadow="never">
                  <div class="c-box">
                    <img class="c-img" src="~/static/doctors/d1.png"/>
                  </div>

                  <div class="item-body">
                    <h2>dr. Besse Sarmila</h2>
                  </div>
                </el-card>
              </el-button>
              <el-dialog :visible.sync="dialogVisible4" width="60%">
                <h1 style="margin-bottom: 5px;color: #333333;">dr. Besse Sarmila</h1>
                <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Anak</h4>
                <p style="margin-bottom: 10px">
                  <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                </p>

                <el-table :data="d4" style="width: 100%">
                  <el-table-column label="Jadwal Praktek">
                    <el-table-column prop="senin" label="Senin"></el-table-column>
                    <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                    <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                    <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                    <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                    <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                  </el-table-column>
                </el-table>
              </el-dialog>
            </el-col>
          </el-row>

          <div class="line-klinik">
            <span>Klinik Bedah</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible5 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Muhammad Kasim</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible5" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Muhammad Kasim</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Bedah</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d5" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible6 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. I Wayan Suka Arsana</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible6" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. I Wayan Suka Arsana</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Bedah</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d6" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible7 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Margareth Sidharta</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible7" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Margareth Sidharta</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Bedah</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d7" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Bedah Saraf</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible8 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Wahyudi</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible8" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Wahyudi</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Bedah Saraf</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d8" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Gigi & Mulut</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible9 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Xeriny Lilian T. Hasan</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible9" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Xeriny Lilian T. Hasan</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gigi & Mulut</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d9" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible10 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Nurul Ramadhanty</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible10" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Nurul Ramadhanty</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gigi & Mulut</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d10" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible11 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Muhsanah Santa</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible11" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Muhsanah Santa</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gigi & Mulut</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d11" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible12 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Tri Tawan</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible12" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Tri Tawan</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gigi & Mulut</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d12" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible13 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Erwin A. Launardo</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible13" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Erwin A. Launardo</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gigi & Mulut</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d13" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible14 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Rita Harianti Ladong</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible14" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Rita Harianti Ladong</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gigi & Mulut</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d14" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible15 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Eka Fatmawati</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible15" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Eka Fatmawati</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gigi & Mulut</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d15" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Gizi</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible16 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>Prof. dr. Suryani As'ad</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible16" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">Prof. dr. Suryani As'ad</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Gizi</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d16" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Penyakit Dalam</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible17 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Umar Said</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible17" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Umar Said</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Penyakit Dalam</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d17" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible18 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. H. Muhammadong</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible18" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. H. Muhammadong</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Penyakit Dalam</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d18" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible19 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Fabiola Maureen Shinta</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible19" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Fabiola Maureen Shinta</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Penyakit Dalam</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d19" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible20 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Ariantin Ulfa Said Culla</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible20" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Ariantin Ulfa Said Culla</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Penyakit Dalam</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d20" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible21 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Rachmat Latief</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible21" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Rachmat Latief</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Penyakit Dalam</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d21" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Jantung</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible22 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/Dr.Fadillah.jpg"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Fadillah Maricar</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible22" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Fadillah Maricar</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Jantung</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d22" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible23 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/Dr.Syaraf.jpg"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Bogie Putra Palinngi</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible23" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Bogie Putra Palinngi</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Jantung</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d23" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Jiwa</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible24 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Hj. Rabiah Thantawie</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible24" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Hj. Rabiah Thantawie</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Jiwa</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d24" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible25 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Januarsari Triwaty</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible25" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Januarsari Triwaty</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Jiwa</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d25" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Kulit</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible26 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Widyawaty Djamaluddin</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible26" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Widyawaty Djamaluddin</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Kulit</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d26" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible27 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Fadlina Zainuddin</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible27" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Fadlina Zainuddin</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Kulit</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d27" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Mata</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible28 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Hj. Hudaedah Mapeabang</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible28" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Hj. Hudaedah Mapeabang</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Mata</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d28" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible29 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/Dr.Munzyl.jpg"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Munzyl Yunus</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible29" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Munzyl Yunus</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Mata</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d29" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik Kandungan</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible30 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Hj.A. Nursanty</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible30" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Hj.A. Nursanty</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Kandungan</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d30" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible31 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/Dr.wil.jpg"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Wi Liong</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible31" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Wi Liong</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Kandungan</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d31" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible32 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Darma Syanty</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible32" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Darma Syanty</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Kandungan</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d32" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible33 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Rina Previana Amiruddin</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible33" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Rina Previana Amiruddin</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Kandungan</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d33" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible34 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Nurlaelah</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible34" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Nurlaelah</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik Kandungan</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d34" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik BEDAH ONKOLOGI</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible35 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. I Wayan Gede Suarsana</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible35" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. I Wayan Gede Suarsana</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik BEDAH ONKOLOGI</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d35" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik ORTHOPEDI</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible36 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. M. Nasser Mustari</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible36" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. M. Nasser Mustari</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik ORTHOPEDI</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d36" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible37 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Zulfan Oktosatria Siregar</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible37" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Zulfan Oktosatria Siregar</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik ORTHOPEDI</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d37" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik TB-PARU, TB-MDR, VCT</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible38 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d4.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Jamaluddin M</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible38" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Jamaluddin M</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik TB-PARU, TB-MDR,
                    VCT</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d38" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik SARAF</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible39 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/Dr.Mimi.jpg"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Mimi Lotisna</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible39" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Mimi Lotisna</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik SARAF</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d39" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible40 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/Dr.Ummu.jpg"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Ummu Atiah</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible40" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Ummu Atiah</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik SARAF</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d40" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>


          <div class="line-klinik">
            <span>Klinik THT</span>
            <hr>
          </div>
          <div data-aos="fade-right">
            <el-row :gutter="15">
              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible41 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Trining Dyah</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible41" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Trining Dyah</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik THT</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d41" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible42 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/Dr.Ade_Chandra.jpg"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Ade Chandra</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible42" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Ade Chandra</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik THT</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d42" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>

              <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <el-button type="text" @click="dialogVisible43 = true">
                  <el-card shadow="never">
                    <div class="c-box">
                      <img class="c-img" src="~/static/doctors/d1.png"/>
                    </div>

                    <div class="item-body">
                      <h2>dr. Masyita Gaffar</h2>
                    </div>
                  </el-card>
                </el-button>
                <el-dialog :visible.sync="dialogVisible43" width="60%">
                  <h1 style="margin-bottom: 5px;color: #333333;">dr. Masyita Gaffar</h1>
                  <h4 style="margin-bottom: 15px;font-weight: 500;color: #333333;">Spesialis Klinik THT</h4>
                  <p style="margin-bottom: 10px">
                    <small>NB: Jadwal sewaktu-waktu dapat berubah</small>
                  </p>

                  <el-table :data="d43" style="width: 100%">
                    <el-table-column label="Jadwal Praktek">
                      <el-table-column prop="senin" label="Senin"></el-table-column>
                      <el-table-column prop="selasa" label="Selasa" width="115"></el-table-column>
                      <el-table-column prop="rabu" label="Rabu" width="115"></el-table-column>
                      <el-table-column prop="kamis" label="Kamis" width="115"></el-table-column>
                      <el-table-column prop="jumat" label="Jum'at" width="115"></el-table-column>
                      <el-table-column prop="sabtu" label="Sabtu" width="115"></el-table-column>
                    </el-table-column>
                  </el-table>
                </el-dialog>
              </el-col>
            </el-row>
          </div>

        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "profil-dokter",
    data() {
      return {
        d1: [{senin: '-', selasa: '-', rabu: '08:00 - 14:00', kamis: '-', jumat: '-', sabtu: '-'}],
        d2: [{senin: '-', selasa: '-', rabu: '-', kamis: '08:00 - 14:00', jumat: '-', sabtu: '-'}],
        d3: [{senin: '08:00 - 14:00', selasa: '-', rabu: '-', kamis: '-', jumat: '08:00 - 14:00', sabtu: '-'}],
        d4: [{senin: '-', selasa: '08:00 - 14:00', rabu: '-', kamis: '-', jumat: '-', sabtu: '08:00 - 14:00'}],

        d5: [{senin: '-', selasa: '-', rabu: '-', kamis: '-', jumat: '-', sabtu: '-'}],
        d6: [{
          senin: '08:00 - 14:00',
          selasa: '-',
          rabu: '08:00 - 14:00',
          kamis: '-',
          jumat: '08:00 - 14:00',
          sabtu: '-'
        }],
        d7: [{
          senin: '-',
          selasa: '08:00 - 14:00',
          rabu: '-',
          kamis: '08:00 - 14:00',
          jumat: '-',
          sabtu: '08:00 - 14:00'
        }],

        d8: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d9: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d10: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d11: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d12: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d13: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d14: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d15: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d16: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d17: [{senin: '-', selasa: '-', rabu: '-', kamis: '08:00 - 14:00', jumat: '-', sabtu: '-'}],
        d18: [{senin: '-', selasa: '-', rabu: '08:00 - 14:00', kamis: '-', jumat: '-', sabtu: '-'}],
        d19: [{senin: '08:00 - 14:00', selasa: '-', rabu: '-', kamis: '-', jumat: '-', sabtu: '-'}],
        d20: [{senin: '-', selasa: '-', rabu: '-', kamis: '', jumat: '08:00 - 14:00', sabtu: '08:00 - 14:00'}],
        d21: [{senin: '-', selasa: '08:00 - 14:00', rabu: '-', kamis: '08:00 - 14:00', jumat: '-', sabtu: '-'}],

        d22: [{
          senin: '08:00 - 14:00',
          selasa: '-',
          rabu: '08:00 - 14:00',
          kamis: '-',
          jumat: '08:00 - 14:00',
          sabtu: '-'
        }],
        d23: [{
          senin: '-',
          selasa: '08:00 - 14:00',
          rabu: '-',
          kamis: '08:00 - 14:00',
          jumat: '-',
          sabtu: '08:00 - 14:00'
        }],

        d24: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d25: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d26: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d27: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d28: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d29: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d30: [{senin: '-', selasa: '08:00 - 14:00', rabu: '-', kamis: '-', jumat: '-', sabtu: '-'}],
        d31: [{senin: '08:00 - 14:00', selasa: '-', rabu: '-', kamis: '-', jumat: '-', sabtu: '-'}],
        d32: [{senin: '-', selasa: '-', rabu: '-', kamis: '-', jumat: '08:00 - 14:00', sabtu: '-'}],
        d33: [{senin: '-', selasa: '-', rabu: '08:00 - 14:00', kamis: '08:00 - 14:00', jumat: '-', sabtu: '-'}],
        d34: [{senin: '-', selasa: '-', rabu: '08:00 - 14:00', kamis: '-', jumat: '-', sabtu: '-'}],

        d35: [{senin: '-', selasa: '-', rabu: '08:00 - 14:00', kamis: '-', jumat: '-', sabtu: '-'}],

        d36: [{
          senin: '-',
          selasa: '08:00 - 14:00',
          rabu: '-',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '-'
        }],
        d37: [{
          senin: '08:00 - 14:00',
          selasa: '-',
          rabu: '08:00 - 14:00',
          kamis: '-',
          jumat: '-',
          sabtu: '08:00 - 14:00'
        }],

        d38: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d39: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d40: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        d41: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d42: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],
        d43: [{
          senin: '08:00 - 14:00',
          selasa: '08:00 - 14:00',
          rabu: '08:00 - 14:00',
          kamis: '08:00 - 14:00',
          jumat: '08:00 - 14:00',
          sabtu: '08:00 - 14:00'
        }],

        dialogVisible1: false,
        dialogVisible2: false,
        dialogVisible3: false,
        dialogVisible4: false,

        dialogVisible5: false,
        dialogVisible6: false,
        dialogVisible7: false,

        dialogVisible8: false,

        dialogVisible9: false,
        dialogVisible10: false,
        dialogVisible11: false,
        dialogVisible12: false,
        dialogVisible13: false,
        dialogVisible14: false,
        dialogVisible15: false,

        dialogVisible16: false,

        dialogVisible17: false,
        dialogVisible18: false,
        dialogVisible19: false,
        dialogVisible20: false,
        dialogVisible21: false,

        dialogVisible22: false,
        dialogVisible23: false,

        dialogVisible24: false,
        dialogVisible25: false,

        dialogVisible26: false,
        dialogVisible27: false,

        dialogVisible28: false,
        dialogVisible29: false,

        dialogVisible30: false,
        dialogVisible31: false,
        dialogVisible32: false,
        dialogVisible33: false,
        dialogVisible34: false,

        dialogVisible35: false,

        dialogVisible36: false,
        dialogVisible37: false,

        dialogVisible38: false,

        dialogVisible39: false,
        dialogVisible40: false,

        dialogVisible41: false,
        dialogVisible42: false,
        dialogVisible43: false,
      };
    }
  }
</script>
