<template>
  <section class="c-profil">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="20">
        <div class="c-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">beranda</el-breadcrumb-item>
            <el-breadcrumb-item>profil</el-breadcrumb-item>
            <el-breadcrumb-item>laporan</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-profil--body">
          <el-card shadow="never">
            <h2 class="title">Laporan RSUD Labuang Baji Makassar</h2>

            <el-input
              placeholder="Cari laporan"
              v-model="filterText">
            </el-input>

            <el-tree
              class="filter-tree"
              :data="data2"
              :props="defaultProps"
              default-expand-all
              :filter-node-method="filterNode"
              ref="tree2">
              <span><nuxt-link to="">download</nuxt-link></span>
            </el-tree>

          </el-card>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "laporan",
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
        filterText: '',
        data2: [{
          id: 1,
          label: '2018',
          children: [{
            id: 4,
            label: 'Contoh laporan tahun 2018 (1)'
          }]
        }, {
          id: 2,
          label: '2017',
          children: [{
            id: 5,
            label: 'Contoh laporan tahun 2017 (1)'
          }, {
            id: 6,
            label: 'Contoh laporan tahun 2017 (2)'
          }]
        }, {
          id: 3,
          label: '2016',
          children: [{
            id: 7,
            label: 'Contoh laporan tahun 2016 (1)'
          }, {
            id: 8,
            label: 'Contoh laporan tahun 2016 (2)'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  }
</script>
