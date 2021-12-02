<template>
  <div class="tables-basic">
    <b-breadcrumb>
      <b-breadcrumb-item>Home</b-breadcrumb-item>
      <b-breadcrumb-item active>Products</b-breadcrumb-item>
    </b-breadcrumb>
    <h2 class="page-title">Product - <span class="fw-semi-bold">List</span></h2>
    <b-row>
      <b-col>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          customHeader settings close
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Picture</th>
                  <th class="hidden-sm-down">name</th>
                  <th>Price (FCFA)</th>
                  <th class="hidden-sm-down">Date</th>
                  <th class="hidden-sm-down">Incentory  (sold/remaining)</th>
                  <th class="hidden-sm-down">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product,index) in products" :key="index">
                  <td>{{product.id}}</td>
                  <td>
                    <img class="img-rounded" :src="'/'+product.preview_front_image" alt="" height="150" />
                  </td>
                  <td class="width-150">
                    {{ product.name }}
                  </td>
                  <td>
                    {{product.price}}
                    <div v-if="product.flash">
                      <b-badge :variant="colors[product.flash]">{{product.flash}}</b-badge>
                    </div>
                  </td>
                  
                  <td class="text-muted">
                    .
                  </td>
                  
                  <td class="width-150">
                    .
                  </td>
                  <td class="width-150">
                    <b-button-group>
                      <b-button  >Edit</b-button>
                      <b-button variant="danger" >Delete</b-button>
                    </b-button-group>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" class="mr-3" size="sm">Send to...</b-button>
              <b-dropdown variant="inverse" class="mr-xs" size="sm" text="Clear" right>
                <b-dropdown-item>Clear</b-dropdown-item>
                <b-dropdown-item>Move ...</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
            <p>Basic table with styled content</p>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Widget from '@/components/Widget/Widget';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Vue from 'vue'
import {ValidateProductForm} from '@/components/Validator'

export default {
    name:'ProductsList',
      components: { Widget },
      data() {
    return {
        categories: [],
        colors: {hot:'danger',new:'warning',sale:"success"},
        products: null,
        subcategories: [],
        additionalInfos:[{name:'',keys:[''],values:['']}],
        images : [{front: new File([''],'') ,rear:new File([''],''),left:new File([''],''),right:new File([''],'')}],
        variations: [{name:'',values:[''],alias:[''],prices:[],vary:false,def:false}],
        imageIndex : null,
    };
  },
  async mounted() {
      await this.axios.get('products').then(
        ({data}) => {
          console.log(data)
          this.products = data.products
          }
        ,(err) => console.log(err)
      )
  },
  methods: {
      async fetchSubcat(value) {
        this.axios.get('subcategories',{params: {value}}).then(
          ({data}) => this.subcategories = data,
          (err) => console.log(err)
        )
      }
    ,
    addErrorNotification(message,timeout=2000) {
      this.$toasted.error(message, {
        action: [
          {
            text: 'Cancel',
            onClick: (e, toastObject) => {
              toastObject.el.classList.remove('info');
              toastObject.el.classList.add('success');
              toastObject.text('Alien planet destroyed!').goAway(timeout);
            }
          }
        ]
      });
    },
      changeIt(ev) {
          
          console.log(ev)
      },
      async submit() {
        
        const result = ValidateProductForm(this.form)
        this.prodError = result.errors
        if(!result.isValid){
          this.addErrorNotification(result.message)
          return
        }
        // console.log(result)
        if(this.images.slice(0,-1).length === 0 ) {
            this.addErrorNotification("you must add at least on image gallery",6000)
            return
        }
        if (!this.default_image)
          this.addErrorNotification("you must select at lestt one preview image gallery")
        
        const {form,combinations,variations,additionalInfos,images} = this
        let new_add_infos = {}
        additionalInfos.slice(0,-1).forEach(el => {
          var temp = {}
          for (let index = 0; index < el.keys.length; index++) {
            temp = {...temp, [el.keys[index]]:el.values[index] }
            
          }
          new_add_infos = {...new_add_infos, [el.name]: temp}
        } )

        const real_images = images.slice(0,-1)
        for (let index = 0; index < real_images.length; index++) {
          const el = real_images[index];
          var formdata = new FormData()
          formdata.append("images[]",el.front,el.front.name)
          formdata.append("images[]",el.rear,el.rear.name)
          formdata.append("images[]",el.right,el.right.name)
          formdata.append("images[]",el.left,el.left.name)
            await this.axios.post("upload",formdata, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                }).then(
                  ({data}) => console.log(data,"data"),
                  (err) => console.log(err.response)
                )
          
        }
        this.axios.post('addProduct', 
        {
          product:{...form},
        combinations:{...combinations},
        variations: [...variations.slice(0,-1)],
        addInfos:{...new_add_infos},
        default_image:this.imageIndex
        }).then(
          ({data}) => {
            console.log(data)
          },
          (err) => console.log(err)
        )

      },
      onReset() {
        this.form =  {}
      },
      addVariation() {
        var new_combs = []
      if (this.variations.length > 1){
      this.variations[this.variations.length-1].alias.forEach((el,ind) => {
          const temp1 = el.split(' ').join('-')
          var price = null
          var def1 = this.variations[this.variations.length-1].def == ind
          if(this.variations[this.variations.length-1].vary)
            price = this.variations[this.variations.length-1].prices[ind]
          this.combinations.forEach(comb => {
            const new_raw_key = el+comb.key
            var def2 = comb.default
            new_combs.push({string:temp1+'-'+comb.string,price,key:new_raw_key.split('').sort().join(''),default:def2 && def1,gallery:null})
          })
        })
        }
      else
        this.variations[0].alias.forEach((el,ind) => {
            var price = null
            var def = this.variations[0].def == ind
            if(this.variations[0].vary)
              price = this.variations[0].prices[ind]
          new_combs.push({string:el.split(' ').join('-'),price,key:el.split('').sort().join(''),default:def, gallery:null})
        })

        this.combinations = new_combs
        this.variations = [...this.variations, {name:'',values:[''],alias:[''],vary:false,def:false,prices:[]}]
        // console.log(new_combs)
      },
      addGallery() {
        this.images = [...this.images,{front:new File([''],''),rear:new File([''],''),left: new File([''],''),right:new File([''],'')}]
      },
      addTable() {
        this.additionalInfos = [...this.additionalInfos,{name:'',keys:[''],values:['']}]
      }
  },
};
</script>

<style  scoped>
  .cust_form {
    display: flex;
    justify-content : space-between;
      }
    .child.values {
      
        flex: 0 0 55%;
    }		
    .child.name {
        flex: 0 0 38%;
      
    }
    .select_error {
      border: 1px solid red
    }

</style>