<template>
  <div class="c-repair">
    <div class="c-repair__body">
      <el-card shadow="never">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-git-merge">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M6 21V9a9 9 0 0 0 9 9"></path>
        </svg>

        <h2 class="title"> Pages masih dalam tahap perbaikan </h2>

        <nuxt-link to="/">Back to home</nuxt-link>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "404",
    layout: "maintenance"
  }
</script>

<style lang="scss">
  .c-repair {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #fcfcfc;

    & .c-repair__body {
      & .el-card {
        border: none;
        background: transparent;
        text-align: center;

        & svg {
          width: 70px;
          height: 70px;
          margin-bottom: 15px;
          color: rgba(0, 0, 0, .5);
        }

        & .title {
          color: rgba(0, 0, 0, .6);
          font-weight: 300;
          margin-bottom: 10px;
          font-size: 25px;
          letter-spacing: .75px;
        }

        & a {
          letter-spacing: .75px;
          color: rgba(0, 0, 0, .6);
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
</style>
