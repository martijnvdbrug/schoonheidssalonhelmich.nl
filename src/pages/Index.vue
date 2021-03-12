<template>
  <Layout>
    <div id="home">
      <articles>
        <banner/>
      </articles>
      <!--

          <about />
      -->

      <!--    <subscribe />

          <social />-->
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    console.log(this);
  },
  components: {
    About: () => import('../components/home/About'),
    Articles: () => import('../components/home/Articles'),
    Banner: () => import('../components/home/Banner'),
    /*      Social: () => import('@/components/home/Social'),
          Subscribe: () => import('@/components/home/Subscribe'),*/
  },
}
</script>
