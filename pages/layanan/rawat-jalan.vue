<template>
  <section class="c-layanan">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">rawat jalan</h2>
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
            <el-breadcrumb-item>rawat jalan</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-layanan--body">
          <h2 class="title">Daftar Poliklinik Rawat Jalan</h2>
          <el-collapse v-model="rawatJalan" accordion>
            <el-collapse-item title="Poliklinik Anak" name="1">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Bedah" name="2">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Bedah Saraf" name="3">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Gigi & Mulut" name="4">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Gizi" name="5">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Interna" name="6">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Jantung" name="7">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Jiwa" name="8">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Kulit" name="9">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Mata" name="10">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Obgyn" name="11">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Bedah Onkoligi" name="12">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Ortopedi" name="13">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik TB-Paru" name="14">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik TB-MDR" name="15">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik VCT" name="16">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik Saraf" name="17">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>

            <el-collapse-item title="Poliklinik THT" name="18">
              <div>
                Tidak ada deskripsi!
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "rawat-jalan",
    data() {
      return {
        rawatJalan: '1'
      }
    }
  }
</script>
