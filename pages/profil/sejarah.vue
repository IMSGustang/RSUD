<template>
  <section class="c-profil">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Sejarah</h2>
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
            <el-breadcrumb-item>profil</el-breadcrumb-item>
            <el-breadcrumb-item>sejarah</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-profil--body">
          <el-card shadow="never">
            <h2 class="title">Sejarah Singkat RSUD Labuang Baji Makassar</h2>
            <p>
              RSUD Labuang Baji Makassar didirikan pada tahun 1938 oleh
              Zending Gereja Genoformaf Surabaya, Malang dan Semarang sebagai
              rumah sakit Zending. RSUD Labuang Baji diresmikan pada tanggal 12 Juni
              1938. Pada masa perang dunia ke II, rumah sakit ini digunakan oleh
              pemerintah Kotapraja Makassar untuk menampung penderita korban
              perang. Pada tahun 1946-1948, RSUD Labuang Baji mendapat bantuan
              dari pemerintah Negara Indonesia Timur (NIT) dengan merehabilitasi
              gedung-gedung yang hancur akibat perang.
            </p>

            <p>
              Kapasitas tempat tidur yang tersedia pada saat diresmikan adalah
              25 tempat tidur. Pada tahun 1949- 1951, Zending mendirikan bangunan
              permanen sehingga kapasitas tempat tidur menjadi 170 tempat tidur (TT).
              Pada tahun 1952-1955, oleh pemerintah daerah Kotapraja Makassar
              diberikan tambahan beberapa bangunan ruangan, sehingga kapasitas
              tempat tidur bertambah menjadi 190 TT. Sejak saat itulah (1955) RSUD
              Labuang Baji dibiayai oleh pemerintah daerah tingkat I Sulawesi Selatan.
            </p>

            <p>
              Pada tahun 1960, oleh Zending RSUD Labuang Baji diserahkan
              kepada pemerintah daerah tingkat I Sulawesi Selatan dan dikelola oleh
              Dinas Kesehatan Provinsi Sulawesi Selatan dengan akreditasi rumah sakit
              tipe C. Terhitung mulai tanggal 16 januari 1996, melalui Peraturan Daerah
              Provinsi Sulawesi Selatan No. 2 Tahun 1996, kelas rumah sakit
              ditingkatkan menjadi rumah sakit kelas B.
            </p>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "sejarah"
  }
</script>
