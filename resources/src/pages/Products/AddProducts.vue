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
          title="<h5><span class='fw-semi-bold'>Basic Infos</span></h5>"
          close collapse customHeader
        >
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group
                id="input-group-1"
                label="Name: "
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.name"
                :state="prodError.name"
                type="text"
                placeholder="Enter name"
                required
                ></b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-2"
                label="Flash:"
                label-for="input-2"
            >
                <b-select
                id="input-2"
                v-model="form.flash"
                placeholder="Enter flash"
                >
                <b-select-option :value="undefined" >None</b-select-option>
                <b-select-option value="hot" >hot</b-select-option>
                <b-select-option value="new" >new</b-select-option>
                <b-select-option value="sale" >sale</b-select-option>

                </b-select>
            </b-form-group>

            
            <b-form-group
                id="input-group-31"
                label="Discount:"
                label-for="input-31"
                description="set the percentage discount to apply."
            >
            <b-input-group id="input-31"  append="%">
                <b-form-input
                v-model="form.discount"
                :no-wheel="true"
                type="number"
                placeholder="Product discount"
                ></b-form-input>
            </b-input-group>
            </b-form-group>
            <b-form-group
                v-show="form.discount"
                id="input-group-31"
                label="Discount expire date:"
                label-for="input-31"
                description="set the expire time."
            >
                <b-form-datepicker
                v-model="form.expires_at"
                required></b-form-datepicker>
            </b-form-group>

            <b-form-group
                id="input-group-4"
                label="category:"
                label-for="input-4"
                :state="prodError.category"
                description="We'll never share your email with anyone else."
            >
                <b-select
                @change="fetchSubcat"
                id="input-4"
                v-model="form.category"
                >
                <b-select-option :value="undefined" >None</b-select-option>
                <b-select-option v-for="(cat,ind) in categories" :key="ind" :value="cat.id" >{{ cat.name }}</b-select-option>
                </b-select>
            </b-form-group>
            
            <b-form-group
                v-show="subcategories"
                id="input-group-5"
                label="Subcategory:"
                label-for="input-5"
                :state="prodError.subcategory"
                description="We'll never share your email with anyone else."
            >
                <b-select
                id="input-5"
                v-model="form.subcategory"
                >

                <b-select-option :value="undefined" >None</b-select-option>
                <b-select-option v-for="(subcat,ind) in subcategories" :key="ind"  :value="subcat.id" >{{ subcat.name }}</b-select-option>
                </b-select>
            </b-form-group>
            
            <b-form-group
                id="input-group-6"
                label="status:"
                label-for="input-6"
                description="We'll never share your email with anyone else."
            >
                <b-select
                id="input-6"
                v-model="form.status"
                >
                <b-select-option :value="undefined" >in stock</b-select-option>
                <b-select-option value="out of stock" >out of stock</b-select-option>
                </b-select>
            </b-form-group>
            <b-form-group
                id="input-group-8"
                label="Summary: "
                label-for="input-8"
                description="We'll never share your email with anyone else."
            >
                <b-form-textarea
                id="input-8"
                v-model="form.summary"
                type="text"
                :state="prodError.summary"
                placeholder="Summarize"
                required
                ></b-form-textarea>
            </b-form-group>
            <b-form-group
                id="input-group-7"
                label="Describtion: "
                label-for="input-7"
                description="We'll never share your email with anyone else."
            >
                <b-form-textarea
                id="input-7"
                v-model="form.desc"
                :state="prodError.desc"
                type="text"
                placeholder="Desc"
                required
                ></b-form-textarea>
            </b-form-group>
            <!-- <b-form-group>
                <b-input-group>
                    <b-form-input placeholder="Name"></b-form-input>
                    <b-form-input placeholder="Value"></b-form-input>
                </b-input-group>
            </b-form-group> -->


            <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
                >
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group> -->

            </b-form>          
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Widget
          title="<h5><span class='fw-semi-bold'>Image Gallery</span></h5>"
          close collapse customHeader
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Front image</th>
                  <th>Rear image</th>
                  <th class="hidden-sm-down">Left image</th>
                  <th class="hidden-sm-down">Right image</th>
                  <th class="hidden-sm-down">preview</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row,index) in images" :key="index">
                  <td>{{index+1}}</td>
                  <td>
                    <!-- <img class="img-rounded" src="../../assets/hope.jpg" alt="" height="150" /> -->
                    <!-- <input type="file" accept="image/jpeg, image/png, image/gif" @change="changeIt"  /> -->
                    <b-form-file v-model="row.front" accept="image/jpeg, image/png, image/gif"></b-form-file>
                  </td>
                  <td>
                    <b-form-file v-model="row.rear" accept="image/jpeg, image/png, image/gif"></b-form-file>
                  </td>
                  <td>
                    <b-form-file v-model="row.left" accept="image/jpeg, image/png, image/gif"></b-form-file>
                  </td>
                  <td>
                    <b-form-file v-model="row.right" accept="image/jpeg, image/png, image/gif"></b-form-file>
                  </td>
                  <td>
                    <b-checkbox v-model="imageIndex" :value='index+1' :unchecked-value="null" name="default_image"  ></b-checkbox>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" @click="addGallery" class="mr-3" size="sm">Add</b-button>
          </div>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Widget
          title="<h5> <span class='fw-semi-bold'>Additional infos</span></h5>"
          close collapse customHeader
        >
          <div class="table-resposive">
            <table v-for="(infos,index) in additionalInfos" :key="index" class="table">
              <tbody>
                  <label>
                    <b-form-input v-model="infos.name" placeholder="caption"  ></b-form-input>
                </label>
                <tr v-for="(x,ind) in infos.keys" :key="ind">
                  <td>
                      <b-input v-model="infos.keys[ind]" placeholder="key" ></b-input>
                  </td>
                  <td>
                      <b-input-group :key="ind" >
                            <b-form-input v-model="infos.values[ind]" placeholder="value"></b-form-input>
                            <b-input-group-append>
                              <b-button size="sm" text="Button" variant="success" @click="() => {
                                   additionalInfos[index].values.push('')
                                   additionalInfos[index].keys.push('')
                                   }" >+</b-button>
                            </b-input-group-append>
                        </b-input-group>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" @click="addTable" class="mr-3" size="sm">Add</b-button>
          </div>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Widget
          title="<h5><span class='fw-semi-bold'>Product variatoins</span></h5>"
          close collapse customHeader
        >
        <template v-for="(vars,index) in variations" 
             >
          <h6 :key="index">Variation {{ index+1 }} </h6>
          <div class="cust_form" :key="index+9">
            <div class="child name" >
              <b-input v-model="vars.name" placeholder="Name" ></b-input>
              <b-input-group>
          <b-form-checkbox name="vary" v-model="vars.vary" >Vary with price ? </b-form-checkbox>

        </b-input-group>
        
            </div>
            <div class="child values" >
        <template v-for="(vals,ind) in vars.values" >
                       <b-input-group :key="ind" >
                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" v-model="vars.values[ind]" placeholder="Value"></b-form-input>
                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0"	v-show="vars.vary" placeholder="Price"  type="number" v-model="vars.prices[ind]"   ></b-form-input>
                            <b-form-input    v-model="vars.alias[ind]" placeholder="Alias"></b-form-input>
                            <b-input-group-append v-show="vars.values.length -1 === ind" :key="ind+'++'" >
                              <b-button size="sm" text="Button" variant="success" @click="variations[index].values.push('')" >+</b-button>
                            </b-input-group-append>
                            <b-checkbox  name='default' v-model="vars.def" :value="ind" :unchecked-value="null" >Default</b-checkbox>
                        </b-input-group>
        </template>
      </div>
          </div>
        </template>
          <div class="clearfix mt-5">
            <div class="float-right">
              <b-button variant="default" @click="addVariation" class="mr-3" size="sm">Add</b-button>
            </div>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Widget
          title="<h5><span class='fw-semi-bold'>Combinations</span></h5>"
          close collapse customHeader
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Combination String</th>
                  <th>price</th>
                  <th class="hidden-sm-down">unique key</th>
                  <th class="hidden-sm-down">gallery</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(combination,index) in combinations" :key="index">
                  <td>{{index}}</td>
                  <td>
                    {{ combination.string }}
                  </td>
                  <td>
            <b-input-group id="input-3"  append="FCFA">
              <b-form-input
              v-model="combination.price"
              :no-wheel="true"
              type="number"
              placeholder="Price"
              ></b-form-input>
            </b-input-group>
                  </td>
                  <td>
                    <p class="mb-0">
                      <small>
                        <span class="fw-semi-bold">{{ combination.key }}</span>
                      </small>
                    </p>
                    
                  </td>
                  <td class="text-muted">
                      <b-select v-model="combination.gallery">
                          <b-select-option :value="null" >None</b-select-option>
                          <b-select-option v-for="(img,index) in images.slice(0,-1)" :value="index+1" :name='index+1' :key="index">{{ index+1 }}</b-select-option>
                      </b-select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
          <b-button variant="success" @click="submit" >Submit product</b-button>
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
    name:'AddProducts',
      components: { Widget },
      data() {
    return {
        categories: [],
        // combination_error: true,
        prodError: {},
        subcategories: [],
        additionalInfos:[{name:'',keys:[''],values:['']}],
        images : [{front: new File([''],'') ,rear:new File([''],''),left:new File([''],''),right:new File([''],'')}],
        variations: [{name:'',values:[''],alias:[''],prices:[],vary:false,def:false}],
        imageIndex : null,
        combinations: [{string:'default',key:'default',default:true,price:null}],
        form: {},
    };
  },
  async mounted() {
      await this.axios.get('categories').then(
        ({data}) => this.categories = data
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
        const {form,combinations,variations,additionalInfos,images} = this
        const result = ValidateProductForm(this.form)
        this.prodError = result.errors
        if(!result.isValid){
          this.addErrorNotification(result.message)
          // return
        }
        // console.log(result)
        if(this.images.slice(0,-1).length === 0 ) {
            this.addErrorNotification("you must add at least on image gallery",6000)
            // return
        }
        if (!this.default_image)
          this.addErrorNotification("you must select at lestt one preview image gallery")


        var comb_error = false
        combinations.forEach(comb => {
          if (!comb.price || !comb.gallery)
            {
              comb_error = true
              return
            }
        })

        if(comb_error)
          this.addErrorNotification("error in combs")
        
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