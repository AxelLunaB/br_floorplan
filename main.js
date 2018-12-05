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
                imgToSet:'src/img/renders/C01/CC_02.png',
                txtDisplay:"Salón de eventos"
               },
               {
                t: 22,
                l: 22,
                imgToSet:'src/img/renders/C01/CC_02.png',
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
               imgToSet:'src/img/renders/C02/CC04.png',
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
               imgToSet:'src/img/renders/C02/CC05.png',
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
               imgToSet:'src/img/renders/C02/CC06.png',
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
            imgToSet:'src/img/renders/C02/CC07.png',
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
            imgToSet:'src/img/renders/C02/CC08.png',
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
            imgToSet:'src/img/renders/C02/CC09.png',
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
           t: 20,
           l: 25,
           imgToSet:'src/img/renders/06BR_Motor_Lobby.jpg',
           txtDisplay:"MOTOR LOBBY"
         },
         {
           t: 22,
           l: 22,
           imgToSet:'src/img/renders/06BR_Motor_Lobby.jpg',
           txtDisplay:"MOTOR LOBBY"
         }
       ]
       },
        {
         hotspot:[
         {
           t: 70,
           l: 25,
           imgToSet:'src/img/renders/06BR_Motor_Lobby.jpg',
           txtDisplay:"MOTOR LOBBY"
         },
         {
           t: 22,
           l: 22,
           imgToSet:'src/img/renders/06BR_Motor_Lobby.jpg',
           txtDisplay:"MOTOR LOBBY"
         }
       ]
       },
       {
         hotspot:[
           {
           t: 40,
           l: 71,
           imgToSet:'src/img/renders/08BR_Terraza_2.jpg',
           txtDisplay:"TERRAZA 2"
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
           t: 55,
           l: 64,
           imgToSet:'src/img/renders/07BR_Terraza_3.jpg',
           txtDisplay:"TERRAZA 3"
          },
          {
           t: 22,
           l: 22
          }
        ]
       }
     ]
    }
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
    setCurrentFloor: function(level, element){
      this.currentFloor = level;
      this.currentImage = this.floorImages[this.currentFloor];
      this.currentSelectedFloorOnSelector = element;
    },
    setPopUpData: function (imgData,txtData){
      this.currentFloorImage = imgData;
      this.currentTxt = txtData;
    },

    selectorClickHandler: function(level, element){
      if (this.currentSelectedFloorOnSelector != null){
        console.log("entré");
        console.log(this.currentSelectedFloorOnSelector);
        this.currentSelectedFloorOnSelector.removeAttribute('id');
      }
      this.setCurrentFloor(level, element);
      element.setAttribute ("id","selected");
      window.location.href="index.html#architectural-plan";
    }
  }
});
