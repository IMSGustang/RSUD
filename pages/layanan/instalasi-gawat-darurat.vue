<template>
  <section class="c-layanan">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">instalasi gawat darurat</h2>
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
            <el-breadcrumb-item>layanan</el-breadcrumb-item>
            <el-breadcrumb-item>instalasi gawat darurat</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <section class="c-layanan--body">
          <h2 class="title">Instalasi Rawat Darurat (Buka 24 Jam)</h2>
          <el-row :gutter="15">
            <el-col :xs="24" :sm="24" :md="14">
              <p>
                Instalasi Gawat Darurat (IGD) RSUD. Labuang Baji melayani penderita yang tergolong gawat darurat
                selama 24 jam, namun tidak menutup kemungkinan merawat penderita yang bukan gawat darurat. UGD
                dipimpin oleh seorang dokter spesialis bedah dan dibantu oleh dua orang dokter umum sebagai kepala
                unit dan kepala unit non bedah.
              </p>

              <p>
                Ruangan di Instalasi Gawat Darurat (IGD)
              </p>
              <ol type="1">
                <li>Ruang Penerimaan Pasien</li>
                <li>Ruang Triase</li>
                <li>Ruang Resusitasi</li>
                <li>Ruang Tindakan</li>
                <li>Ruang Periksa</li>
                <li>Ruang Observasi Bedah</li>
                <li>Ruang Tunggu Keluarga Pasien</li>
                <li>Ruang Dokter Jaga</li>
                <li>Ruang Administrasi</li>
                <li>Ruang Cito Operasi</li>
                <li>Ruang Laboratorium cito.</li>
              </ol>
            </el-col>

            <el-col :xs="24" :sm="24" :md="10">
              <img src="~/static/IGD/IGD.jpg" v-scroll-reveal.reset.nomobile="{delay:300}" />
              <p class="title-image">Gambar 1 - Ruangan IGD</p>
            </el-col>
          </el-row>
        </section>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "instalasi-gawat-darurat"
  }
</script>
