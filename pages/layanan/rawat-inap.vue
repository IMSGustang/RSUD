<template>
  <section class="c-layanan">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">rawat inap</h2>
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
            <el-breadcrumb-item>rawat inap</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-layanan--body">
          <h2 class="title">Informasi Ruangan & Tempat Tidur Rawat Inap</h2>

          <el-collapse v-model="rawatInap" accordion>
            <el-collapse-item title="Baji Areng" name="1">
              <p>Jenis kelas baji areng :</p>
              <ol type="a">
                <li><div><div>Kelas Pavilium</div></div>    : 0 Ruangan</li>
                <li><div><div>Kelas Super VIP</div></div>   : 0 Ruangan</li>
                <li><div><div>Kelas VIP</div></div>   : 1 Ruangan</li>
                <li><div>Kelas I</div>         : 4 Ruangan</li>
                <li><div>Kelas II</div>        : 3 Ruangan</li>
                <li><div>Kelas III</div>       : 4 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Ati" name="2">
              <p>Jenis kelas baji ati :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 2 Ruangan</li>
                <li><div>Kelas I</div>         : 10 Ruangan</li>
                <li><div>Kelas II</div>        : 6 Ruangan</li>
                <li><div>Kelas III</div>       : 16 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Ati MDR" name="3">
              <p>Jenis kelas baji ati MDR :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 4 Ruangan</li>
                <li><div>Kelas II</div>        : 3 Ruangan</li>
                <li><div>Kelas III</div>       : 8 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Ada" name="4">
              <p>Jenis kelas baji ada :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 4 Ruangan</li>
                <li><div>Kelas II</div>        : 3 Ruangan</li>
                <li><div>Kelas III</div>       : 0 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 1 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Dakka" name="5">
              <p>Jenis kelas baji dakka :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 4 Ruangan</li>
                <li><div>Kelas II</div>        : 3 Ruangan</li>
                <li><div>Kelas III</div>       : 0 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Mamminasa Baji" name="6">
              <p>Jenis kelas mamminasa baji :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 2 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 4 Ruangan</li>
                <li><div>Kelas VIP</div>       : 6 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 0 Ruangan</li>
                <li><div>Kelas III</div>       : 0 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Minasa" name="7">
              <p>Jenis kelas baji minasa :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 4 Ruangan</li>
                <li><div>Kelas III</div>       : 24 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Pamai" name="8">
              <p>Jenis kelas baji pamai :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 0 Ruangan</li>
                <li><div>Kelas III</div>       : 16 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Kamase" name="9">
              <p>Jenis kelas baji kamase :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 0 Ruangan</li>
                <li><div>Kelas III</div>       : 12 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Baji Gau" name="10">
              <p>Jenis kelas baji gau :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 2 Ruangan</li>
                <li><div>Kelas II</div>       : 6 Ruangan</li>
                <li><div>Kelas III</div>       : 8 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 0 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="Kamar Bayi" name="11">
              <p>Jenis kelas kamar bayi :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 0 Ruangan</li>
                <li><div>Kelas III</div>       : 0 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 9 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="ICU (Intensive Care Unit)" name="12">
              <p>Jenis Kelas ICU :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 0 Ruangan</li>
                <li><div>Kelas III</div>       : 0 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 6 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="CVCU (Cardio Vascular Care Unit)" name="13">
              <p>Jenis kelas CVCU :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>: 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 0 Ruangan</li>
                <li><div>Kelas III</div>       : 0 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 6 Ruangan</li>
              </ol>
            </el-collapse-item>

            <el-collapse-item title="RPK (Ruang Perawat Khusus)" name="14">
              <p>Jenis kelas RPK :</p>
              <ol type="a">
                <li><div>Kelas Pavilium</div>  : 0 Ruangan</li>
                <li><div>Kelas Super VIP</div> : 0 Ruangan</li>
                <li><div>Kelas VIP</div>       : 0 Ruangan</li>
                <li><div>Kelas I</div>         : 0 Ruangan</li>
                <li><div>Kelas II</div>        : 0 Ruangan</li>
                <li><div>Kelas III</div>       : 0 Ruangan</li>
                <li><div>Ruang Isolasi</div>   : 0 Ruangan</li>
                <li><div>Tanpa Kelas</div>     : 5 Ruangan</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "rawat-inap",
    data() {
      return {
        rawatInap: '1'
      }
    }
  }
</script>
