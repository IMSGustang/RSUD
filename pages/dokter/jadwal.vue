<template>
  <section class="c-doctor">
    <div class="c-head c-head-docktor">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Jadwal Dokter</h2>
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
            <el-breadcrumb-item>jadwal dokter</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-doctor--body">
          <h2 class="title-date">Jadwal Dokter Spesialis</h2>
          <h4 class="subtitle">
            NB: Jadwal sewaktu-waktu dapat berubah
          </h4>
          <el-table
            :data="doctors"
            style="width: 100%">
            <el-table-column
              fixed
              prop="dokter"
              label="Nama Dokter"
              width="220">
            </el-table-column>
            <el-table-column
              prop="poliklinik"
              label="Poliklinik"
              width="200">
            </el-table-column>

            <el-table-column label="Jadwal Praktek">
              <el-table-column
                prop="senin"
                label="Senin"
                width="120">
              </el-table-column>
              <el-table-column
                prop="selasa"
                label="Selasa"
                width="120">
              </el-table-column>
              <el-table-column
                prop="rabu"
                label="Rabu"
                width="120">
              </el-table-column>
              <el-table-column
                prop="kamis"
                label="Kamis"
                width="120">
              </el-table-column>
              <el-table-column
                prop="jumat"
                label="Jum'at"
                width="120">
              </el-table-column>
              <el-table-column
                prop="sabtu"
                label="Sabtu"
                width="120">
              </el-table-column>
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
          dokter:     'dr. Hj. Maryam,Sp.A',
          poliklinik: 'POLIKLINIK ANAK',
          senin:      '-',
          selasa:     '-',
          rabu:       '08:00 - 14:00',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Hj. Farida Albugis,Sp.A',
          poliklinik: 'POLIKLINIK ANAK',
          senin:      '-',
          selasa:     '-',
          rabu:       '-',
          kamis:      '08:00 - 14:00',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Hj. Rahmi Rahim,Sp.A',
          poliklinik: 'POLIKLINIK ANAK',
          senin:      '08:00 - 14:00',
          selasa:     '-',
          rabu:       '-',
          kamis:      '-',
          jumat:      '08:00 - 14:00',
          sabtu:      '-'
        }, {
          dokter:     'dr. Besse Sarmila,Sp.A',
          poliklinik: 'POLIKLINIK ANAK',
          senin:      '-',
          selasa:     '08:00 - 14:00',
          rabu:       '-',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Muhammad Kasim,Sp.B',
          poliklinik: 'POLIKLINIK BEDAH',
          senin:      '-',
          selasa:     '-',
          rabu:       '-',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. I Wayan Suka Arsana,Sp.B',
          poliklinik: 'POLIKLINIK BEDAH',
          senin:      '08:00 - 14:00',
          selasa:     '-',
          rabu:       '08:00 - 14:00',
          kamis:      '-',
          jumat:      '08:00 - 14:00',
          sabtu:      '-'
        }, {
          dokter:     'dr. Margareth Sidharta,Sp.B',
          poliklinik: 'POLIKLINIK BEDAH',
          senin:      '-',
          selasa:     '08:00 - 14:00',
          rabu:       '-',
          kamis:      '08:00 - 14:00',
          jumat:      '-',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Wahyudi, Sp.BS',
          poliklinik: 'POLIKLINIK BEDAH SARAF',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'drg. Xeriny Lilian T. Hasan, Sp.Pros',
          poliklinik: 'POLIKLINIK GIGI & MULUT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'drg. Nurul Ramadhanty,Sp.BM',
          poliklinik: 'POLIKLINIK GIGI & MULUT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'drg. Muhsanah Santa,Sp.KG',
          poliklinik: 'POLIKLINIK GIGI & MULUT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'drg. Tri Tawan',
          poliklinik: 'POLIKLINIK GIGI & MULUT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'drg. Erwin A. Launardo',
          poliklinik: 'POLIKLINIK GIGI & MULUT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'drg. Rita Harianti Ladong',
          poliklinik: 'POLIKLINIK GIGI & MULUT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'drg. Eka Fatmawati',
          poliklinik: 'POLIKLINIK GIGI & MULUT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'Prof.DR.dr. Suryani As\'ad,M.Sc,Sp.GK(K)',
          poliklinik: 'POLIKLINIK GIZI',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Umar Said,Sp.PD',
          poliklinik: 'POLIKLINIK INTERNA',
          senin:      '-',
          selasa:     '-',
          rabu:       '-',
          kamis:      '08:00 - 14:00',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. H. Muhammadong,Sp.PD',
          poliklinik: 'POLIKLINIK INTERNA',
          senin:      '-',
          selasa:     '-',
          rabu:       '08:00 - 14:00',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Fabiola Maureen Shinta,Sp.PD',
          poliklinik: 'POLIKLINIK INTERNA',
          senin:      '08:00 - 14:00',
          selasa:     '-',
          rabu:       '-',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Ariantin Ulfa Said Culla,Sp.PD',
          poliklinik: 'POLIKLINIK INTERNA',
          senin:      '-',
          selasa:     '-',
          rabu:       '-',
          kamis:      '-',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'DR.dr. Rachmat Latief,Sp.PD,K-PTI,M.Kes,FINASIM',
          poliklinik: 'POLIKLINIK INTERNA',
          senin:      '-',
          selasa:     '08:00 - 14:00',
          rabu:       '-',
          kamis:      '08:00 - 14:00',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Fadillah Maricar,Sp.JP',
          poliklinik: 'POLIKLINIK JANTUNG',
          senin:      '08:00 - 14:00',
          selasa:     '-',
          rabu:       '08:00 - 14:00',
          kamis:      '-',
          jumat:      '08:00 - 14:00',
          sabtu:      '-'
        }, {
          dokter:     'dr. Bogie Putra Palinngi,Sp.JP',
          poliklinik: 'POLIKLINIK JANTUNG',
          senin:      '-',
          selasa:     '08:00 - 14:00',
          rabu:       '-',
          kamis:      '08:00 - 14:00',
          jumat:      '-',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Hj. Rabiah Thantawie,Sp.KJ',
          poliklinik: 'POLIKLINIK JIWA',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Januarsari Triwaty,Sp.KJ',
          poliklinik: 'POLIKLINIK JIWA',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Widyawaty Djamaluddin,Sp.KK',
          poliklinik: 'POLIKLINIK KULIT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Fadlina Zainuddin,Sp.KK',
          poliklinik: 'POLIKLINIK KULIT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Hj. Hudaedah Mapeabang,Sp.M',
          poliklinik: 'POLIKLINIK MATA',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Munzyl Yunus,Sp.M',
          poliklinik: 'POLIKLINIK MATA',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Hj.A. Nursanty,Sp.OG',
          poliklinik: 'POLIKLINIK OBGYN',
          senin:      '-',
          selasa:     '08:00 - 14:00',
          rabu:       '-',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Wi Liong,Sp.OG',
          poliklinik: 'POLIKLINIK OBGYN',
          senin:      '08:00 - 14:00',
          selasa:     '-',
          rabu:       '-',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Darma Syanty,M.Kes,Sp,OG',
          poliklinik: 'POLIKLINIK OBGYN',
          senin:      '-',
          selasa:     '-',
          rabu:       '-',
          kamis:      '-',
          jumat:      '08:00 - 14:00',
          sabtu:      '-'
        }, {
          dokter:     'Dr.dr.Rina Previana Amiruddin,Sp.OG',
          poliklinik: 'POLIKLINIK OBGYN',
          senin:      '-',
          selasa:     '-',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. Nurlaelah, M.Kes, Sp.OG',
          poliklinik: 'POLIKLINIK OBGYN',
          senin:      '-',
          selasa:     '-',
          rabu:       '08:00 - 14:00',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '-'
        }, {
          dokter:     'dr. I Wayan Gede Suarsana,Sp.B(K)Onk',
          poliklinik: 'POLIKLINIK BEDAH ONKOLOGI',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. M. Nasser Mustari,Sp.OT',
          poliklinik: 'POLIKLINIK ORTOPEDI',
          senin:      '-',
          selasa:     '08:00 - 14:00',
          rabu:       '-',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '-'
        }, {
          dokter:     'dr. Zulfan Oktosatria Siregar,Sp.OT',
          poliklinik: 'POLIKLINIK ORTOPEDI',
          senin:      '08:00 - 14:00',
          selasa:     '-',
          rabu:       '08:00 - 14:00',
          kamis:      '-',
          jumat:      '-',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Jamaluddin M,Sp.P',
          poliklinik: 'POLIKLINIK TB-PARU',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Jamaluddin M,Sp.P',
          poliklinik: 'POLIKLINIK TB-MDR',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Jamaluddin M,Sp.P',
          poliklinik: 'POLIKLINIK VCT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Mimi Lotisna,Sp.S',
          poliklinik: 'POLIKLINIK SARAF',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Ummu Atiah,Sp.S',
          poliklinik: 'POLIKLINIK SARAF',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Trining Dyah,Sp.THT-KL',
          poliklinik: 'POLIKLINIK THT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Ade Chandra, M.Kes,Sp.THT-KL',
          poliklinik: 'POLIKLINIK THT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }, {
          dokter:     'dr. Masyita Gaffar,Sp.THT-KL',
          poliklinik: 'POLIKLINIK THT',
          senin:      '08:00 - 14:00',
          selasa:     '08:00 - 14:00',
          rabu:       '08:00 - 14:00',
          kamis:      '08:00 - 14:00',
          jumat:      '08:00 - 14:00',
          sabtu:      '08:00 - 14:00'
        }]
      }
    }
  }
</script>
