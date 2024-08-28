sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
],
    function (Controller, Fragment,  MessageBox,MessageToast) {
        "use strict";

        return Controller.extend("com.leavetrack.leavetrack.controller.View1", {
            onInit: function () {
                //sap.ui.getCore().byId("leaveTypeId").getValue();
            },

            onLeaveApply: function () {


                var oData = {
                    employeeID: 1,
                    leaveType: this.getView().byId("leaveTypeId").getSelectedKey(),
                    fromDate: this.getView().byId("fromDateId").getValue(),
                    toDate: this.getView().byId("toDateId").getValue(),
                    reason: this.getView().byId("reasonId").getValue(),
                }
                var oModel = this.getView().getModel();
                console.log(oData);
                // oModel.setUseBatch(false);
                oModel.create("/LeaveRequest",oData,{
                    success: function () {
                        console.log("Hello");

                        alert("done")
                    },
                    error: function (oError) {
                        console.log(oError.message);

                        alert("error")
                    }
                })

            },
            onConfirmationMessageBoxPress: function () {
                MessageBox.confirm("Are you sure that you wants to apply for Leave!");
                onLeaveApply();

            },


        });
    });
