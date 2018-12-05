new Vue({

  el:'#app',
  data:{
    hotFloorplan:true,
    currentOrientation: 0,
    currentTxt: "",
    currentFloor: 0,
    currentImage:'src/img/CC_01.jpg',
    currentFloorImage: '',
    hotspotslvl:[
     {
           hotspots:[
             {
              hotspot:[
              {
                t: 71,
                l: 45,
                imgToSet:'src/img/renders/C01/CC_01.jpg',
                txtDisplay:"Lobby salón eventos"
              },
              {
                t: 22,
                l: 22,
                imgToSet:'src/img/renders/C01/CC_01.jpg',
                txtDisplay:"Lobby salón eventos"
              }
            ]
            },
            {
              hotspot:[
                {
                t: 22,
                l: 58,
                imgToSet:'src/img/renders/C01/CC_03.jpg',
                txtDisplay:"Terraza salón de eventos"
               },
               {
                t: 32,
                l: 22,
                imgToSet:'src/img/renders/C01/CC_03.jpg',
                txtDisplay:"Terraza salón de eventos"
               }
             ]
            },
            {
              hotspot:[
                {
                t: 55,
                l: 60,
                imgToSet:'src/img/renders/C01/CC_02.jpg',
                txtDisplay:"Salón de eventos"
               },
               {
                t: 22,
                l: 22,
                imgToSet:'src/img/renders/C01/CC_02.jpg',
                txtDisplay:"Salón de eventos"
               }
             ]
            }
          ]
     }, //nivel 1
     {
       hotspots:[
         {
             hotspot:[
               {
               t: 43,
               l: 30,
               imgToSet:'src/img/renders/C02/CC_04.jpg',
               txtDisplay:"Kids Club"
              },
            {
               t: 22,
               l: 22
              }
            ]
           },
           {
             hotspot:[
               {
               t: 32,
               l: 43,
               imgToSet:'src/img/renders/C02/CC_05.jpg',
               txtDisplay:"Kids Club"
              },
            {
               t: 22,
               l: 22
              }
            ]
           },
           {
             hotspot:[
               {
               t: 36,
               l: 64,
               imgToSet:'src/img/renders/C02/CC_06.jpg',
               txtDisplay:"Junior's Club"
              },
            {
               t: 22,
               l: 22
              }
            ]
           },
           {
          hotspot:[
          {
            t: 40,
            l: 75,
            imgToSet:'src/img/renders/C02/CC_07.jpg',
            txtDisplay:"Cygar room"
          },
          {
            t: 22,
            l: 22,
          }
        ]
        },
        {
          hotspot:[
            {
            t: 67,
            l: 74,
            imgToSet:'src/img/renders/C02/CC_08.jpg',
            txtDisplay:"Lounge bar"
           },
         {
            t: 22,
            l: 22
           }
         ]
        },
        {
          hotspot:[
          {
            t: 66,
            l: 47,
            imgToSet:'src/img/renders/C02/CC_09.jpg',
            txtDisplay:"Sala cine"
           },
           {
            t: 22,
            l: 22
           }
         ]
        }
      ]
    }, //nivel 2
    {
      hotspots:[
        {
         hotspot:[
         {
           t: 43,
           l: 28.5,
           imgToSet:'src/img/renders/C03/CC_10.jpg',
           txtDisplay:"Box"
         },
         {
           t: 22,
           l: 22
         }
       ]
       },
        {
         hotspot:[
         {
           t: 67,
           l: 29,
           imgToSet:'src/img/renders/C03/CC_11.jpg',
           txtDisplay:"Spinning"
         },
         {
           t: 22,
           l: 22,
         }
       ]
       },
       {
         hotspot:[
           {
           t: 40,
           l: 50,
           imgToSet:'src/img/renders/C03/CC_12.jpg',
           txtDisplay:"Fitness club"
          },
        {
           t: 22,
           l: 22
          }
        ]
       },
       {
         hotspot:[
         {
           t: 41,
           l: 74.7,
           imgToSet:'src/img/renders/C03/CC_13.jpg',
           txtDisplay:"Yoga"
          },
          {
           t: 22,
           l: 22
          }
        ]
       }
     ]
   }, //nivel 3
   {
     hotspots:[
       {
        hotspot:[
        {
          t: 46,
          l: 49.5,
          imgToSet:'src/img/renders/C04/CC_14.jpg',
          txtDisplay:"Alberca"
        },
        {
          t: 22,
          l: 22
        }
      ]
      },
       {
        hotspot:[
        {
          t: 43,
          l: 69,
          imgToSet:'src/img/renders/C04/CC_15.jpg',
          txtDisplay:"Spa"
        },
        {
          t: 22,
          l: 22,
        }
      ]
      },
      {
        hotspot:[
          {
          t: 72,
          l: 33,
          imgToSet:'src/img/renders/C04/CC_16.jpg',
          txtDisplay:"Vestidores"
         },
       {
          t: 22,
          l: 22
         }
       ]
      },
      {
        hotspot:[
        {
          t: 48,
          l: 24.3,
          imgToSet:'src/img/renders/C04/CC_17.jpg',
          txtDisplay:"Vapor"
         },
         {
          t: 22,
          l: 22
         }
       ]
      }
    ]
  },//nivel 4
  {
    hotspots:[
      {
       hotspot:[
         {
           t: 79,
           l: 50.5,
           imgToSet:'src/img/renders/C05/CC_18.jpg',
           txtDisplay:"Área Paddle"
         },
         {
           t: 22,
           l: 22
         }
       ]
      }
    ]
  },//nivel 5
   {
     hotspots:[
       {
        hotspot:[
        {
          t: 64,
          l: 63.5,
          imgToSet:'src/img/renders/TR/TR_01.jpg',
          txtDisplay:"Lobby"
        },
        {
          t: 22,
          l: 22
        }
      ]
      },
       {
        hotspot:[
        {
          t: 77,
          l: 71,
          imgToSet:'src/img/renders/TR/TR_02.jpg',
          txtDisplay:"Business center"
        },
        {
          t: 22,
          l: 22,
        }
      ]
      },
      {
        hotspot:[
          {
          t: 35,
          l: 76,
          imgToSet:'src/img/renders/TR/TR_03.jpg',
          txtDisplay:"Vestidores"
         },
       {
          t: 22,
          l: 22
         }
       ]
      },
      {
        hotspot:[
        {
          t: 35,
          l: 58.3,
          imgToSet:'src/img/renders/TR/TR_04.jpg',
          txtDisplay:"Gimnasio"
         },
         {
          t: 22,
          l: 22
         }
       ]
      }
    ]
  } //TR
],


    floorImages:['src/img/CC_01.jpg',
    'src/img/CC_02.jpg',
    'src/img/CC_03.jpg',
    'src/img/CC_04.jpg',
    'src/img/CC_05.jpg',
    'src/img/TR_01.jpg']
  },
  methods:{

    rngNumber: function (){
      return Math.random(0,1);
    },
    prePopulate: function (){
      return userName;
    },
    getPosT: function (indexPos){

      return this.hotspotslvl[this.currentFloor].hotspots[indexPos].hotspot[this.currentOrientation].t;
    },
    getPosL: function (indexPos){

      return this.hotspotslvl[this.currentFloor].hotspots[indexPos].hotspot[this.currentOrientation].l;
    },
    filteredFloor: function (current){

      return this.hotspotslvl[current].hotspots;
    },
    setCurrentFloor: function(level){

      this.currentFloor = level;
      this.currentImage = this.floorImages[this.currentFloor];

    },
    setPopUpData: function (imgData,txtData){
      this.currentFloorImage = imgData;
      this.currentTxt = txtData;
    }
  }
});
