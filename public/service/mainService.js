angular.module('app').factory('mainService',function($http,$q){

        var travelPlanObject = [
          {
            type:'node',
            cityName:'bangalore',
            basicServices:'',
            childServices:{
              stay:[
                {
                  requestedData:{
                    area: "Hari Nagar",
                    rating: "3",
                    roomType: "Executive",
                    checkinDate: "6/30/2016",
                    checkoutDate: "7/01/2016"
                  },
                  selectedData:{
                    image: "public/assets/images/hotel3.png",
                    name: "JW Mariott",
                    rating: "5",
                    location: "hotel's exact address",
                    roomType: "Deluxe",
                    checkinDate: "6/30/2016",
                    checkinTime: "2:00 PM",
                    checkoutDate: "7/01/2016",
                    checkoutTime: "3:00 PM",
                    price: "10000 INR",
                    comments: "Some useful comment which you may want to convey to the hotel"
                }
              },
                {
                  requestedData:{
                    area: "Hari Nagar",
                    rating: "3",
                    roomType: "Executive",
                    checkinDate: "6/30/2016",
                    checkoutDate: "7/01/2016"
                  },
                  selectedData:{
                    image: "public/assets/images/hotel3.png",
                    name: "JW Mariott",
                    rating: "5",
                    location: "hotel's exact address",
                    roomType: "Deluxe",
                    checkinDate: "6/30/2016",
                    checkinTime: "2:00 PM",
                    checkoutDate: "7/01/2016",
                    checkoutTime: "3:00 PM",
                    price: "10000 INR",
                    comments: "Some useful comment which you may want to convey to the hotel"
                }
              }
              ],
              localTravel:[
                {
                  requestedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM"
                  },
                  selectedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM",
                    dropDate: "4/30/2016",
                    dropTime: "12:00 PM",
                    cab: {
                      image: "public/assets/images/uber.png",
                      companyName: "Uber",
                      cabNumber: "DL AJ 5034",
                      driverDetails: {
                         name: "Job Elton"
                       },
                      estimatedPrice: "800 INR",
                      cabType: "sedan"
                     }
                  }
                },
                {
                  requestedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM"
                  },
                  selectedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "localBus",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM",
                    dropDate: "4/30/2016",
                    dropTime: "12:00 PM",
                    localBus: {
                      image: "public/assets/images/localBus.png",
                      companyName: "red bus",
                      busNumber: "AB 327014",
                      busType: "AC bus",
                      seatsType: "sleeper",
                      price: "100 INR"
                   }
                  }
                }
              ]
            }
          },
          {
            type:"edge",
            childServices:{
              booking: {
                   requestedData:{

                   },
                   selectedData:{
                     travelStartDate: "5/1/2016",
                     mode: "flight",
                     flight: {
                       image:"public/assets/images/indigo.png",
                       companyName: "Air Costa",
                       flightID: "AC2456",
                       seatNumber: "45H",
                       sourceAirport:"koramangala airport",
                       destinationAirport:"delhi airport",
                       price: "876547 INR",
                       preferences: {
                          class: "Bussiness",
                          Nonstop: "true",
                          meals: "Non Veg",
                          extraBaggage: "14 Kg"
                        }
                      },
                  train: {
                     image:"public/assets/images/rail.png",
                     companyName: "Air Costa",
                     trainNumber: "AC2456",
                     seatNumber: "45H",
                     coachNumber: "7A",
                     sourceStation:"koramangala railway station",
                     destinationStation:"new delhi railway station",
                     price: "876547 INR",
                     preferences: {
                        class: "2 AC"
                     }
                   },
                  travelStartTime: "2:00 AM",
                  travelEndDate: "5/2/2016",
                  travelEndTime: "3:00 AM"
                 }
                }
            }
          },
          {
            type:'node',
            cityName:'Delhi',
            basicServices:'',
            childServices:{
              stay:[
                {
                  requestedData:{
                    area: "Hari Nagar",
                    rating: "3",
                    roomType: "Executive",
                    checkinDate: "6/30/2016",
                    checkoutDate: "7/01/2016"
                  },
                  selectedData:{
                    image: "public/assets/images/hotel3.png",
                    name: "JW Mariott",
                    rating: "5",
                    location: "hotel's exact address",
                    roomType: "Deluxe",
                    checkinDate: "6/30/2016",
                    checkinTime: "2:00 PM",
                    checkoutDate: "7/01/2016",
                    checkoutTime: "3:00 PM",
                    price: "10000 INR",
                    comments: "Some useful comment which you may want to convey to the hotel"
                }
              },
                {
                  requestedData:{
                    area: "Hari Nagar",
                    rating: "3",
                    roomType: "Executive",
                    checkinDate: "6/30/2016",
                    checkoutDate: "7/01/2016"
                  },
                  selectedData:{
                    image: "public/assets/images/hotel3.png",
                    name: "JW Mariott",
                    rating: "5",
                    location: "hotel's exact address",
                    roomType: "Deluxe",
                    checkinDate: "6/30/2016",
                    checkinTime: "2:00 PM",
                    checkoutDate: "7/01/2016",
                    checkoutTime: "3:00 PM",
                    price: "10000 INR",
                    comments: "Some useful comment which you may want to convey to the hotel"
                }
              }
              ],
              localTravel:[
                {
                  requestedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM"
                  },
                  selectedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM",
                    dropDate: "4/30/2016",
                    dropTime: "12:00 PM",
                    cab: {
                      image: "public/assets/images/uber.png",
                      companyName: "Uber",
                      cabNumber: "DL AJ 5034",
                      driverDetails: {
                         name: "Job Elton"
                       },
                      estimatedPrice: "800 INR",
                      cabType: "sedan"
                     }
                  }
                },
                {
                  requestedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM"
                  },
                  selectedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "localBus",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM",
                    dropDate: "4/30/2016",
                    dropTime: "12:00 PM",
                    localBus: {
                      image: "public/assets/images/localBus.png",
                      companyName: "red bus",
                      busNumber: "AB 327014",
                      busType: "AC bus",
                      seatsType: "sleeper",
                      price: "100 INR"
                   }
                  }
                }
              ]
            }
          },
          {
            type:"edge",
            childServices:{
              booking:
                {
                   requestedData:{

                   },
                   selectedData:{
                     travelStartDate: "5/1/2016",
                     mode: "bus",
                   bus: {
                      image:"public/assets/images/bus.png",
                      companyName: "Air Costa",
                      busNumber: "AC2456",
                      seatNumber: "45H",
                      sourceBusStop:"koramangala bus stop",
                      destinationBusStop:"delhi bus stop",
                      price: "876547 INR",
                      preferences: {
                         class: "Deluxe AC",
                         seatType: "sleeper"
                      }
                    },
                  travelStartTime: "2:00 AM",
                  travelEndDate: "5/2/2016",
                  travelEndTime: "3:00 AM"
                 }
              }
            }
          },
          {
            type:'node',
            cityName:'pune',
            basicServices:'',
            childServices:{
              localTravel:[
                {
                  requestedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM"
                  },
                  selectedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM",
                    dropDate: "4/30/2016",
                    dropTime: "12:00 PM",
                    cab: {
                      image: "public/assets/images/uber.png",
                      companyName: "Uber",
                      cabNumber: "DL AJ 5034",
                      driverDetails: {
                         name: "Job Elton"
                       },
                      estimatedPrice: "800 INR",
                      cabType: "sedan"
                     }
                  }
                },
                {
                  requestedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM"
                  },
                  selectedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "localBus",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM",
                    dropDate: "4/30/2016",
                    dropTime: "12:00 PM",
                    localBus: {
                      image: "public/assets/images/localBus.png",
                      companyName: "red bus",
                      busNumber: "AB 327014",
                      busType: "AC bus",
                      seatsType: "sleeper",
                      price: "100 INR"
                   }
                  }
                }
              ]
            }
          },
          {
            type:"edge",
            childServices:{
              booking:
                {
                   requestedData:{

                   },
                   selectedData:{
                     travelStartDate: "5/1/2016",
                     mode: "train",
                     train: {
                       image:"public/assets/images/rail.png",
                       companyName: "Air Costa",
                       trainNumber: "AC2456",
                       seatNumber: "45H",
                       coachNumber: "7A",
                       sourceStation:"koramangala railway station",
                       destinationStation:"new delhi railway station",
                       price: "876547 INR",
                       preferences: {
                          class: "2 AC"
                       }
                     },
                     travelStartTime: "2:00 AM",
                     travelEndDate: "5/2/2016",
                     travelEndTime: "3:00 AM"
                 }
              }
            }
          },
          {
            type:'node',
            cityName:'bangalore',
            basicServices:'',
            childServices:{
              localTravel:[
                {
                  requestedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM"
                  },
                  selectedData:{
                    source: "Rajiv Chowk",
                    destination: "New Delhi IGI Airport",
                    type: "cab",
                    pickupDate: "4/30/2016",
                    pickupTime: "10:00 AM",
                    dropDate: "4/30/2016",
                    dropTime: "12:00 PM",
                    cab: {
                      image: "public/assets/images/ola.png",
                      companyName: "Uber",
                      cabNumber: "DL AJ 5034",
                      driverDetails: {
                         name: "Job Elton"
                       },
                      estimatedPrice: "800 INR",
                      cabType: "sedan"
                     }
                  }
                }
              ]
            }
          }
        ];
        var travelPlanObjectInitial = [
          {
            "essential": {
            },
            "childServices": {},
            "type": "location",
            "state": "initial"
          },
          {
            "essential": {
            },
            "childServices": {},
            "type": "transit",
            "state": "initial"
          },
          {
            "essential": {
            },
            "childServices": {},
            "type": "location",
            "state": "initial"
          }

        ];
        var elementMasters = {};
        var nodeMaster = {};
        var edgeMaster = {};
        // var someData;
        var subFactories= {

             nodeEdgeInitializer:function(nodeOrEdge){
               var numberOfElements = Object.keys(travelPlanObject[nodeOrEdge]).length;
               var id=nodeOrEdge.slice(0, -1)+numberOfElements;
               travelPlanObject[nodeOrEdge][id] = {
                    "status": "initial",
                    "essential": {},
                    "childServices": {}

               };
             },

             travelPlanInitializer: function(indexForTravelMode){
               console.log(indexForTravelMode);
               travelPlanObject=[];
               var modeOfTravel = ["oneWay", "twoWay", "multiWay"];
               if(indexForTravelMode>=0){
                 for(var i=0;i<indexForTravelMode+1;i++){
                   subFactories.nodeEdgeInitializer('nodes');
                   subFactories.nodeEdgeInitializer('edges');
                 }
                   subFactories.nodeEdgeInitializer('nodes');
                 return 'success';
               }else{
                 return 'fail';
               }
             },

              getTravelPlanObject: function(){
                   return travelPlanObjectInitial;
                },

             getElementData: function(elementType, elementId){
                 return travelPlanObject[elementType][elementId];

             },

             getEdgeMaster: function(){
                return $http.get('public/data/configjsons/edgemaster.json');
             },

             getNodeMaster: function(){
               console.log('I am in getNodeMaster');
               return $http.get('public/data/configjsons/nodemaster.json');
             },

             getPrerequisites: function() {
               return $q.all([subFactories.getNodeMaster(),subFactories.getEdgeMaster()]);
             },

             travelPlanExists :function(){
               if(travelPlanObject==null || travelPlanObject.length==0){
                 return false;
               }
               else{
                 return true;
               }
             }
             
          }
     return subFactories;
  });
