sap.ui.define([
    "sap/ui/core/mvc/Controller",
    	"sap/ui/model/json/JSONModel",
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit: function () {
            var model = new JSONModel ( {});
           	this.getView().setModel(model, "worklistView");

            this._getCallNorthWidth()
        },

         		_getCallNorthWidth: function () {
				var that = this,
					oViewModel = that.getModel('worklistView'),
					// vAddTemp = oViewModel.getProperty("/vAddTemp"),
					oBusyIndicator = new sap.m.BusyDialog();
				oBusyIndicator.open();
				that.getOwnerComponent().getModel()
					.read('/Employees', {
						// filters: [new Filter('JOBPST', 'EQ', Number(vAddTemp))],
						success: function (sResponse) {
							// if (sResponse.results.length > 0) {
							for (var i in sResponse.results) {
								sResponse.results[i].edit = true;
								sResponse.results[i].addedit = true;
								sResponse.results[i].vstatus = true;
							}
							oViewModel.setProperty('/aAddTemp', sResponse.results);
							// }
							oBusyIndicator.close();
						}.bind(this),
						error: function (eResponse) {
							oBusyIndicator.close();
							var errorText = $('<a>').html(eResponse.responseText)[0].textContent;
							this._exceptionHandling("/p2oCGAvDUzk4zLVh", JSON.stringify({}), errorText, 0);
						}.bind(this),
						// error: function (eResponse) {
						// 	oBusyIndicator.close();
						// }
					});
				oViewModel.setProperty("/eFieldName_Editable", true);
			},
    });
});
