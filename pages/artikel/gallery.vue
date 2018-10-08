<template>
  <section class="c-article">
    <div class="c-head">
      <div class="c-head__body">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20">
            <h2 class="title">Gallery</h2>
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
            <el-breadcrumb-item>artikel</el-breadcrumb-item>
            <el-breadcrumb-item>gallery</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="c-article--body">
          <no-ssr>
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
          </no-ssr>

          <el-row>
            <el-col :span="24">
              <div class="c-pagination">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000">
                </el-pagination>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "gallery",
    data() {
      return {
        slide1: [
          {
            src: '/news.png',
            msrc: '/news.png',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 400,
            h: 400
          },
          {
            src: '/news.png',
            msrc: '/news.png',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 400,
            h: 400
          },
          {
            src: '/news.png',
            msrc: '/news.png',
            alt: 'picture2',
            title: 'Image Caption 3',
            w: 400,
            h: 400
          },
          {
            src: '/news.png',
            msrc: '/news.png',
            alt: 'picture2',
            title: 'Image Caption 4',
            w: 400,
            h: 400
          },
          {
            src: '/news.png',
            msrc: '/news.png',
            alt: 'picture2',
            title: 'Image Caption 5',
            w: 400,
            h: 400
          },
          {
            src: '/news.png',
            msrc: '/news.png',
            alt: 'picture2',
            title: 'Image Caption 6',
            w: 400,
            h: 400
          }
        ]
      }
    },
    methods: {
      handleClose() {
        console.log('close event')
      }
    }
  }
</script>
