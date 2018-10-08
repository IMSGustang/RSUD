<template>
  <section class="c-info">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Pendaftaran Online</h2>
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
            <el-breadcrumb-item>pendaftaran online</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-info--body">
          <el-card shadow="never">
            <h2 class="title">Ketentuan Umum Pendaftaran Online</h2>
            <ol type="1">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>
              <li>
                Aut beatae commodi deserunt earum excepturi fugiat fugit illo impedit
              </li>
              <li>
                Aut beatae commodi deserunt earum excepturi fugiat fugit illo impedit inventore magnam odio optio praesentium sed
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>
              <li>
                Aut beatae commodi deserunt earum excepturi fugiat fugit illo impedit
              </li>
              <li>
                Aut beatae commodi deserunt earum excepturi fugiat fugit illo impedit inventore magnam odio optio praesentium sed
              </li>
            </ol>

            <div class="btn-container">
              <nuxt-link to="/404"><el-button type="primary" plain>Daftar Sekarang</el-button></nuxt-link>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "pendaftaran-online"
  }
</script>
