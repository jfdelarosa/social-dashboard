<template lang="pug"> 
  div
    section.features
      .container
        h2.section-title Características
        el-row(:gutter="20")
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="undraw_savings_hjfl.svg")
            h1.title Titulo
            h3.subtitle Descripción corta del item.
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="undraw_visual_data_b1wx.svg")
            h1.title Titulo
            h3.subtitle Descripción corta del item.
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="undraw_dashboard_nklg.svg")
            h1.title Titulo
            h3.subtitle Descripción corta del item.
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="undraw_social_dashboard_k3pt.svg")
            h1.title Titulo
            h3.subtitle Descripción corta del item.
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="undraw_data_xmfy.svg")
            h1.title Titulo
            h3.subtitle Descripción corta del item.
          el-col.item(:xs="24" :sm="12" :md="8" :lg="8" :xl="8")
            img(src="undraw_teacher_35j2.svg")
            h1.title Titulo
            h3.subtitle Descripción corta del item.
    section.big
      .container
        el-row(:gutter="0")
          el-col.has-text(:xs="24" :sm="12" :md="16" :lg="16" :xl="16")
            .text
              h3 Section title
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus est, posuere et dolor ac, sagittis venenatis justo. Nam sed velit a massa tempor vestibulum ac a urna.
          el-col.has-img.hidden-xs-only(:xs="24" :sm="12" :md="8" :lg="8" :xl="16")
            img(src="undraw_chatting_2yvo.svg")
    section.big
      .container
        el-row(:gutter="0")
          el-col.has-img.hidden-xs-only(:xs="24" :sm="12" :md="8" :lg="8" :xl="16")
            img(src="undraw_real-time_sync_o57k.svg")
          el-col.has-text(:xs="24" :sm="12" :md="16" :lg="16" :xl="16")
            .text
              h3 Section title
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus est, posuere et dolor ac, sagittis venenatis justo. Nam sed velit a massa tempor vestibulum ac a urna.
    section.big
      .container
        el-row(:gutter="0")
          el-col.has-text(:xs="24" :sm="12" :md="16" :lg="16" :xl="16")
            .text
              h3 Section title
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus est, posuere et dolor ac, sagittis venenatis justo. Nam sed velit a massa tempor vestibulum ac a urna.
          el-col.has-img.hidden-xs-only(:xs="24" :sm="12" :md="8" :lg="8" :xl="16")
            img(src="undraw_mail_2_tqip.svg")
    section.last-cta
      h2.title Hola
      h3.subtitle Mundo
      el-button(type="success" round) Call to action
</template>
<style scoped>
.container{
  margin: 0 auto;
  max-width: 1000px;
}
.features{
  padding-bottom: 4rem;
}
.section-title{
  text-transform: uppercase;
  color: #333;
  text-align: center;
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin: 0;
  font-weight: bold;
}
.item{
  text-align: center;
  padding: 2rem;
}
.item img{
  width: 128px;
  height: 128px;
}
.item .title{
  color: #333;
  font-weight: bold;
  margin-bottom: 0 0 0.5rem 0;
}
.item .subtitle{
  margin: 0;
}
.big{
  width: 100%;
}
.big:nth-child(2n){
  background: #F0F0F0;
}
.big img{
  width: 100%;
}
.big h3{
  font-size: 1.5rem;
  color: #3c3c3c;
}
.big .text{
  color: #5d5d5d;
  font-size: 1.15rem;
  padding: 3rem;
}
.big .has-img{
  padding: 4rem;
}
.last-cta{
  background: #209cee;
  padding: 5rem 0;
  text-align: center;
  
}
.last-cta .title{
  font-size: 1.75rem;
  font-weight: bold;
  color: white;
  margin: 0;
}
.last-cta .subtitle{
  font-size: 1.25rem;
  color: white;
  margin: 1rem 0;
}
</style>