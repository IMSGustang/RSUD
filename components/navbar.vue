<template>
  <section>
    <div class="c-navbar">
      <div class="c-brand">
        <nuxt-link to="/">
          <img src="~/static/labuangbaji.png"/>
        </nuxt-link>
      </div>

      <div class="c-navbar-item">
        <el-menu :default-active="activeDekstop" mode="horizontal" class="hidden-sm-and-down" @select="handleSelect">
          <el-menu-item index="1">
            <nuxt-link to="/">Beranda</nuxt-link>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">Profil</template>
            <el-menu-item index="2-1">
              <nuxt-link to="/profil/visimisi">Visi & Misi</nuxt-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <nuxt-link to="/profil/sejarah">Sejarah</nuxt-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <nuxt-link to="/profil/laporan">Laporan Rumah Sakit</nuxt-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">Artikel</template>
            <el-menu-item index="3-1">
              <nuxt-link to="/artikel/berita">Berita</nuxt-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <nuxt-link to="/artikel/informasi">Informasi Kesehatan</nuxt-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <nuxt-link to="/artikel/buletin">Buletin</nuxt-link>
            </el-menu-item>
            <el-menu-item index="3-4">
              <nuxt-link to="/artikel/event">Event</nuxt-link>
            </el-menu-item>
            <el-menu-item index="3-5">
              <nuxt-link to="/artikel/gallery">Gallery</nuxt-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">Dokter</template>
            <el-menu-item index="4-1">
              <nuxt-link to="/dokter/profil-dokter">Profil Dokter</nuxt-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <nuxt-link to="/dokter/jadwalreguler">Jadwal Dokter Poli Reguler</nuxt-link>
            </el-menu-item>
            <el-menu-item index="4-3">
              <nuxt-link to="/dokter/jadwalnonreguler">Jadwal Dokter Poli Sore</nuxt-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">Layanan</template>
            <el-menu-item index="5-1">
              <nuxt-link to="/layanan/rawat-jalan">Rawat Jalan</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-2">
              <nuxt-link to="/layanan/rawat-inap">Rawat Inap</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-3">
              <nuxt-link to="/layanan/instalasi-gawat-darurat">Instalasi Gawat Darurat (24 Jam)</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-4">
              <nuxt-link to="/layanan/instalasi-dialisis">Instalasi Dialisis</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-5">
              <nuxt-link to="/layanan/layanan-unggulan">Layanan Unggulan</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-6">
              <nuxt-link to="/layanan/perpustakaan">Perpustakaan</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-7">
              <nuxt-link to="/layanan/pendidikan-pelatihan">Pendidikan & Pelatihan (DIKLAT)</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-8">
              <nuxt-link to="/layanan/pendidikan-penelitian">Bagian Pendidikan & Penelitian (DIKLIT)</nuxt-link>
            </el-menu-item>
            <el-menu-item index="5-9">
              <nuxt-link to="/layanan/penunjang">Penunjang</nuxt-link>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">Info Pengunjung</template>
            <el-menu-item index="6-1">
              <nuxt-link to="/info/pendaftaran-online">Pendaftaran Online</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-2">
              <nuxt-link to="/info/antrian-pendaftaran">Informasi Antrian & Pendaftaran</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-3">
              <nuxt-link to="/info/tempat-tidur">Informasi Tempat Tidur</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-4">
              <nuxt-link to="/info/kepuasan-pelanggan">Informasi Kepuasan Pelanggan</nuxt-link>
            </el-menu-item>
          </el-submenu>

          <el-menu-item index="7">
            <nuxt-link to="/rujukan/nasional">Rujukan Nasional</nuxt-link>
          </el-menu-item>
        </el-menu>

        <el-menu :default-active="activeMobile" class="c-menu hidden-md-and-up" mode="horizontal" menu-trigger="click" @select="handleSelect">
          <el-submenu index="2">
            <template slot="title">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              Menu
            </template>
            <el-menu-item index="2-1">
              <nuxt-link style="text-transform: uppercase;font-size: 13px;" to="/">Beranda</nuxt-link>
            </el-menu-item>
            <el-submenu index="2-2">
              <template slot="title">Profil</template>
              <el-menu-item index="2-2-1">
                <nuxt-link to="/profil/visimisi">Visi & Misi</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-2-2">
                <nuxt-link to="/profil/sejarah">Sejarah</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-2-3">
                <nuxt-link to="/profil/laporan">Laporan Rumah Sakit</nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2-3">
              <template slot="title">Artikel</template>
              <el-menu-item index="2-3-1">
                <nuxt-link to="/artikel/berita">Berita</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-3-2">
                <nuxt-link to="/artikel/informasi">Informasi Kesehatan</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-3-3">
                <nuxt-link to="/artikel/buletin">Buletin</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-3-4">
                <nuxt-link to="/artikel/event">Event</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-3-5">
                <nuxt-link to="/artikel/gallery">Gallery</nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2-4">
              <template slot="title">Dokter</template>
              <el-menu-item index="2-4-1">
                <nuxt-link to="/dokter/profil-dokter">Profil Dokter</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-4-2">
                <nuxt-link to="/dokter/jadwalreguler">Jadwal Dokter Poli Reguler</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-4-3">
                <nuxt-link to="/dokter/jadwalnonreguler">Jadwal Dokter Poli Sore</nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2-5">
              <template slot="title">Layanan</template>
              <el-menu-item index="2-5-1">
                <nuxt-link to="/layanan/rawat-jalan">Rawat Jalan</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-2">
                <nuxt-link to="/layanan/rawat-inap">Rawat Inap</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-3">
                <nuxt-link to="/layanan/instalasi-gawat-darurat">Instalasi Gawat Darurat (24 Jam)</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-4">
                <nuxt-link to="/layanan/instalasi-dialisis">Instalasi Dialisis</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-5">
                <nuxt-link to="/layanan/layanan-unggulan">Layanan Unggulan</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-6">
                <nuxt-link to="/layanan/perpustakaan">Perpustakaan</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-7">
                <nuxt-link to="/layanan/pendidikan-pelatihan">Pendidikan & Pelatihan (DIKLAT)</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-8">
                <nuxt-link to="/layanan/pendidikan-penelitian">Bagian Pendidikan & Penelitian (DIKLIT)</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-5-9">
                <nuxt-link to="/layanan/penunjang">Penunjang</nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2-6">
              <template slot="title">Info Pengunjung</template>
              <el-menu-item index="2-6-1">
                <nuxt-link to="/info/pendaftaran-online">Pendaftaran Online</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-6-2">
                <nuxt-link to="/info/antrian-pendaftaran">Informasi Antrian & Pendaftaran</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-6-3">
                <nuxt-link to="/info/tempat-tidur">Informasi Tempat Tidur</nuxt-link>
              </el-menu-item>
              <el-menu-item index="2-6-4">
                <nuxt-link to="/info/kepuasan-pelanggan">Informasi Kepuasan Pelanggan</nuxt-link>
              </el-menu-item>
            </el-submenu>

            <el-menu-item index="2-7" style="text-transform: uppercase">
              <nuxt-link style="text-transform: uppercase;font-size: 13px;" to="/rujukan/nasional">Rujukan Nasional</nuxt-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        activeDekstop: '1',
        activeMobile: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
