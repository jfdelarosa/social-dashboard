<template lang="pug">
  div
    el-row(:gutter="20")
      el-col(:span="8")
        h3 Twitter
        el-input(size="small" placeholder="Titulo" v-model="network.twitter.title")
        el-input(size="small" placeholder="Url" v-model="network.twitter.url")
      el-col(:span="8")
        h3 Facebook
        el-input(size="small" placeholder="Titulo" v-model="network.facebook.title")
        el-input(size="small" placeholder="Url" v-model="network.facebook.url")
      el-col(:span="8")
        h3 Linkedin
        el-input(size="small" placeholder="Titulo" v-model="network.linkedin.title")
        el-input(size="small" placeholder="Url" v-model="network.linkedin.url")
    el-tabs(v-model="activeName")
      el-tab-pane(label="Preview" name="view")
        medium-editor(:text='code' :options='options' v-on:edit='processEditOperation' custom-tag='div')
      el-tab-pane(label="HTML" name="html")
        el-input(type="textarea" :rows="12" v-bind:value="code" :readonly="true")
</template>
<script>
import firebase from '../../firebase'
import vueMediumEditor from 'vue2-medium-editor'
export default{
  components: {
    'medium-editor': vueMediumEditor
  },
  computed:{
    code: {
      get(){
        return this.doMail()
      },
      set(val){
        this.doMail(val)
      }
    }
  },
  data(){
    return {
      text: "",
      options: {
        toolbar: {
          buttons: ['bold', 'italic', 'underline', 'anchor', 'center']
        }
      },
      activeName: 'view',
      network: {
        twitter: {
          title: "",
          url: ""
        },
        facebook: {
          title: "",
          url: ""
        },
        linkedin: {
          title: "",
          url: ""
        }
      }
    }
  },
  methods: {
    processEditOperation(operation) {
      this.code = operation.api.origElements.innerHTML
    },
    doMail(social){
      return `<table style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;height: 100%; background: #D6E3F5; background-image: url('https://www.questionpro.com/qp_userimages/sub-3/2917616/textura_2.png'); background-size: 120px; background-repeat: repeat; -webkit-font-smoothing: antialiased;-webkit-text-size-adjust: none;width: 100% !important;">
    
  <tbody>
      
<tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
        
  <!-- Ancho de caja -->
  <td style="margin: 0 auto !important;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;display: block !important; clear: both !important; max-width: 560px !important;"> 
          
            <!-- Inicia contenido -->
            <table style="margin: 24px auto; padding: 0; font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65; border-collapse: collapse; width: 100% !important;">
              
                <tbody>
 
                  <!-- FILA HEADER -->
<tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                    <td align="center" style="margin: 0;padding: 12px 0 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65; background-color: #1b87e6;">
                     <img src="https://www.questionpro.com/qp_userimages/sub-3/2917616/heythere_qp.png" style="margin-bottom: -12px;"/>
                      
                    </td>
                </tr>
                
                  <!-- INICIA COPY INICIAL -->
                  <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                    <td class="content" style="margin: 0;padding: 30px 35px;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: white; color: #505050;">

<h2 style="margin: 0;padding: 0;font-size: 24px; ">Hola <span style="color:#1b87e6;">QPronitas</span></h2>

<p style="font-size: 16px;">¿Nos apoyan con sus <strong>likes y shares</strong>? Vamos a difundir ese contenido tan jugoso que merece ser compartido.</p>
                   
<!-- INICIA TABLA CON ENLACES -->
<table style="font-family: sans-serif; margin: 0 auto;">
  <tbody>
    <tr>
        <!-- TWITTER -->
      <td>
          
      <a href="INSERTA TU LINK AQUI" target="_blank" style="text-decoration: none;">
        <div style="width: 100%; box-sizing: border-box; padding: 18px 12px; border-collapse: collapse; border-radius: 0px; line-height: 1.4; text-align: center; background-color: #1b3380;">
         <img src="https://www.questionpro.com/qp_userimages/sub-3/2917616/white_tw.png" style="margin: 10px auto; max-width: 48px;">
        <p style="margin:0; text-decoration: none; font-weight: 500; color: #fff; font-size:12px;">10 consejos para negociar de forma efectiva</p>
        </a>
        </div>
        
      </td>
      
            <!-- FACEBOOK -->
      <td>
        
      <a href="INSERTA TU LINK AQUI" target="_blank" style="text-decoration: none;">
        <div style="width: 100%; box-sizing: border-box; padding: 18px 12px; border-collapse: collapse; border-radius: 0px; line-height: 1.4; text-align: center; background-color: #1b3380;">
         <img src="https://www.questionpro.com/qp_userimages/sub-3/2917616/white_fb.png" style="margin: 10px auto; max-width: 48px;">
        <p style="margin:0; text-decoration: none; font-weight: 500; color: #fff; font-size:12px;">10 consejos para negociar de forma efectiva</p>
        </a>
        </div>
        
      </td>
            
      <!-- LINKED IN -->
      <td>
        
      <a href="INSERTA TU LINK AQUI" target="_blank" style="text-decoration: none;">
        <div style="width: 100%; box-sizing: border-box; padding: 18px 12px; border-collapse: collapse; border-radius: 0px; line-height: 1.4; text-align: center; background-color: #1b3380;">
         <img src="https://www.questionpro.com/qp_userimages/sub-3/2917616/white_li.png" style="margin: 10px auto; max-width: 48px;">
        <p style="margin:0; text-decoration: none; font-weight: 500; color: #fff; font-size:12px;">10 consejos para negociar de forma efectiva</p>
        </a>
        </div>
          
          </td>

    </tr>
  </tbody>
</table>
                                           
                    </td>
                </tr>
                  
                  <!--
                  <tr>
                    <td>
                    </td>
                  </tr>
                  -->
                  
 <!-- INICIA CONTENIDO EXTRA -->
    <tr style="margin:0; padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                    <td class="content" style="margin: 0;padding: 30px 35px;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: #eeeeee; color: #505050;">
                      
<p style="font-weight: 700; margin-bottom: 20px; text-align:center; font-size: 16px; ">- 22 de febrero - </p>
                     <p style="font-size: 14px; text-align:left;">Siguiendo con cosas relacionadas a Nintendo, ayer se anuncio que el presidente de Nintendo of America Reggis Fils-Aimé (a.k.a. "my body is ready", según internet) <a href="https://edition.cnn.com/2019/02/21/tech/bowser-nintendo-scli-intl/index.html" target="_blank" style="text-decoration: none; font-weight: 700; color: #1b87e6;"> se retira, dejando en su lugar a Doug Bowser</a>. ¡No podría haber nombre más apropiado!</p>
    
      </td>
                  </tr>
                  
                  <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                    <td class="content footer" align="center" style="margin: 0;padding: 30px 35px;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: none; font-size: 12px; color: #505050;">
                        <center><img src="https://www.questionpro.com/qp_userimages/sub-3/3175908/nube_brandon_1534524046945.gif" width="70px" height="70px"></center>
¡Recuerda crecer tus cuentas 5 min al día! Las escaleras al cielo te esperan       
                    </td>
                </tr>
            </tbody>
                  
</table>
    
<!-- TERMINA EL CORREO -->              

        </td>
    </tr>
    
</tbody>
</table>`
    }
  }
}
</script>
<style>
.medium-editor-anchor-preview,.medium-editor-toolbar{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:16px;z-index:2000}@-webkit-keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}@keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}.medium-editor-anchor-preview{left:0;line-height:1.4;max-width:280px;position:absolute;text-align:center;top:0;word-break:break-all;word-wrap:break-word;visibility:hidden}.medium-editor-anchor-preview a{color:#fff;display:inline-block;margin:5px 5px 10px}.medium-editor-placeholder-relative:after,.medium-editor-placeholder:after{content:attr(data-placeholder)!important;white-space:pre;padding:inherit;margin:inherit;font-style:italic}.medium-editor-anchor-preview-active{visibility:visible}.medium-editor-dragover{background:#ddd}.medium-editor-image-loading{-webkit-animation:medium-editor-image-loading 1s infinite ease-in-out;animation:medium-editor-image-loading 1s infinite ease-in-out;background-color:#333;border-radius:100%;display:inline-block;height:40px;width:40px}.medium-editor-placeholder{position:relative}.medium-editor-placeholder:after{position:absolute;left:0;top:0}.medium-editor-placeholder-relative,.medium-editor-placeholder-relative:after{position:relative}.medium-toolbar-arrow-over:before,.medium-toolbar-arrow-under:after{border-style:solid;content:'';display:block;height:0;left:50%;margin-left:-8px;position:absolute;width:0}.medium-toolbar-arrow-under:after{border-width:8px 8px 0}.medium-toolbar-arrow-over:before{border-width:0 8px 8px;top:-8px}.medium-editor-toolbar{left:0;position:absolute;top:0;visibility:hidden}.medium-editor-toolbar ul{margin:0;padding:0}.medium-editor-toolbar li{float:left;list-style:none;margin:0;padding:0}.medium-editor-toolbar li button{box-sizing:border-box;cursor:pointer;display:block;font-size:14px;line-height:1.33;margin:0;padding:15px;text-decoration:none}.medium-editor-toolbar li button:focus{outline:0}.medium-editor-toolbar li .medium-editor-action-underline{text-decoration:underline}.medium-editor-toolbar li .medium-editor-action-pre{font-family:Consolas,"Liberation Mono",Menlo,Courier,monospace;font-size:12px;font-weight:100;padding:15px 0}.medium-editor-toolbar-active{visibility:visible}.medium-editor-sticky-toolbar{position:fixed;top:1px}.medium-editor-relative-toolbar{position:relative}.medium-editor-toolbar-active.medium-editor-stalker-toolbar{-webkit-animation:medium-editor-pop-upwards 160ms forwards linear;animation:medium-editor-pop-upwards 160ms forwards linear}.medium-editor-action-bold{font-weight:bolder}.medium-editor-action-italic{font-style:italic}.medium-editor-toolbar-form{display:none}.medium-editor-toolbar-form a,.medium-editor-toolbar-form input{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.medium-editor-toolbar-form .medium-editor-toolbar-form-row{line-height:14px;margin-left:5px;padding-bottom:5px}.medium-editor-toolbar-form .medium-editor-toolbar-input,.medium-editor-toolbar-form label{border:none;box-sizing:border-box;font-size:14px;margin:0;padding:6px;width:316px;display:inline-block}.medium-editor-toolbar-form .medium-editor-toolbar-input:focus,.medium-editor-toolbar-form label:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;outline:0}.medium-editor-toolbar-form a{display:inline-block;font-size:24px;font-weight:bolder;margin:0 10px;text-decoration:none}.medium-editor-toolbar-form-active{display:block}.medium-editor-toolbar-actions:after{clear:both;content:"";display:table}.medium-editor-element{word-wrap:break-word;min-height:30px}.medium-editor-element img{max-width:100%}.medium-editor-element sub{vertical-align:sub}.medium-editor-element sup{vertical-align:super}.medium-editor-hidden{display:none}

.medium-toolbar-arrow-under:after{border-color:#242424 transparent transparent;top:50px}.medium-toolbar-arrow-over:before{border-color:transparent transparent #242424;top:-8px}.medium-editor-toolbar{background-color:#242424;background:-webkit-linear-gradient(top,#242424,rgba(36,36,36,.75));background:linear-gradient(to bottom,#242424,rgba(36,36,36,.75));border:1px solid #000;border-radius:5px;box-shadow:0 0 3px #000}.medium-editor-toolbar li button{background-color:#242424;background:-webkit-linear-gradient(top,#242424,rgba(36,36,36,.89));background:linear-gradient(to bottom,#242424,rgba(36,36,36,.89));border:0;border-right:1px solid #000;border-left:1px solid #333;border-left:1px solid rgba(255,255,255,.1);box-shadow:0 2px 2px rgba(0,0,0,.3);color:#fff;height:50px;min-width:50px;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in}.medium-editor-toolbar li button:hover{background-color:#000;color:#ff0}.medium-editor-toolbar li .medium-editor-button-first{border-bottom-left-radius:5px;border-top-left-radius:5px}.medium-editor-toolbar li .medium-editor-button-last{border-bottom-right-radius:5px;border-top-right-radius:5px}.medium-editor-toolbar li .medium-editor-button-active{background-color:#000;background:-webkit-linear-gradient(top,#242424,rgba(0,0,0,.89));background:linear-gradient(to bottom,#242424,rgba(0,0,0,.89));color:#fff}.medium-editor-toolbar-form{background:#242424;border-radius:5px;color:#999}.medium-editor-toolbar-form .medium-editor-toolbar-input{background:#242424;box-sizing:border-box;color:#ccc;height:50px}.medium-editor-toolbar-form a{color:#fff}.medium-editor-toolbar-anchor-preview{background:#242424;border-radius:5px;color:#fff}.medium-editor-placeholder:after{color:#b3b3b1}
</style>