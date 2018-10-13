<template>
  <section class="c-info">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Dokumen</h2>
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
            <el-breadcrumb-item>info pengunjung</el-breadcrumb-item>
            <el-breadcrumb-item>dokumen</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-info--body">
          <h2 class="title-room">Dokumen Informasi : </h2>

          <a href="https://drive.google.com/open?id=1jA4tPhIMV4JcsUAGxwCftcs5LNeO3o9k" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Sertifikat Ijin Operasional Rumah Sakit
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1fwBVhZRXXsZFgyUP9Zqfi5Z_Sjb7UZtD" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              SK Penetapan Rumah Sakit Umum Daerah (RSUD) Sebagai PPK-BLUD
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1x6AXntjT3xJzPVhpu7ZR4UuETCSnoDG1" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Sertifikat Akreditasi Rumah Sakit
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1JxfAYvERmWsCXyTxeLuitJHndIpb7_-u" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Struktur Organisasi RSUD Labuang Baji Prov. Sul-Sel
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1YJpjYUUv7uS7QHCU8_cke2UN25_y-4yG" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Tupoksi Struktural
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1eRUVukGLGajVo0zbz-EyqHHVNxttMA8R" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Hak & Kewajiban Rumah Sakit (RS)
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1dlh575SYTf_NhhAGNkkt6EJr3KGx7Fze" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Hak & Kewajiban Pasien
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1vC8RlplIFEGN2ZEXPpO_ev_SQ_T_JK0i" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Hak & Kewajiban Dokter
            </el-button>
          </a>

          <a href="https://drive.google.com/open?id=1Z1PwyuuBJq3Ir0VFftdSW0TS91LqICjw" target="_blank">
            <el-button type="primary" icon="el-icon-document" plain round>
              Hak & Kewajiban Perawat dan Bidan
            </el-button>
          </a>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "dokumen"
  }
</script>
