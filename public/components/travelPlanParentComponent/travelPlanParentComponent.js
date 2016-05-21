angular.module('app')
  .component('travelPlanParentComponent',{
    controller: ["dataUpdateHelper",travelPlanParentCtrl],
    templateUrl: "public/components/travelPlanParentComponent/travelPlanParentComponent.html",
    controllerAs: 'travelPlanParentCtrl'
  });


function travelPlanParentCtrl (dataUpdateHelper) {
  var travelPlanParentCtrl = this;

  //PG: 19th May- It is checked before hand if the Travel Plan exists or not
  travelPlanFormCtrl.$onInit = function () {

      travelPlanParentCtrl.travelPlanExists = dataUpdateHelper.travelPlanExists();
      // travelPlanFormCtrl.updateCurrentState()

  };


  if(travelPlanParentCtrl.travelPlanExists)
  {
    //PG: 19th May- Getting all the fields data needed to render the forms
    var elementFields = {
      "node": dataUpdateHelper.getNodes(),
      "edge": dataUpdateHelper.getEdges()
    }

  }

  //PG: 19th May- This function will be called when there will be a change in the travel-plan state.
  travelPlanFormCtrl.updateCurrentState = function(elementId,elementType, childState) {
    travelPlanFormCtrl.state = "travelPlanForm";
    travelPlanParentCtrl.currentElement = elementType;
    travelPlanParentCtrl.currentElementId = elementId;
    if(childState != undefined) {
      travelPlanFormCtrl.childState = childState;
      travelPlanFormCtrl.state = "child";
    }

    travelPlanParentCtrl.currentFormData = dataUpdateHelper.getElementData(travelPlanParentCtrl.currentElement,travelPlanParentCtrl.currentElementId);

    travelPlanParentCtrl.currentFormFieldsData =  elementFields[travelPlanParentCtrl.currentElement];

  }


  travelPlanParentCtrl.essentialFieldsUpdate = function(fieldId, essentialFieldsValues ) {
    dataUpdateHelper.essentialFieldsUpdate(travelPlanParentCtrl.currentElement, travelPlanParentCtrl.currentElementId, fieldId, essentialFieldsValues);
  }

  travelPlanParentCtrl.childServiesFormUpdate = function(childServicesFormValues, childServiceId, fieldId) {
    dataUpdateHelper.childServiesFormUpdate(travelPlanParentCtrl.currentElement, travelPlanParentCtrl.currentElementId, childServiceId, fieldId, childServicesFormValues);
  }


}
