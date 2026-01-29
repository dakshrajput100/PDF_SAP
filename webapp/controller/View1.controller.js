sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project2.controller.View1", {
            onInit: function () {
                var model = new JSONModel({});
                this.getView().setModel(model, "objectView");


            },


            onPressPdfSunLifeForm: function () {

                var objectView = this.getView().getModel("objectView");
                var Test = objectView.getProperty("/Test");
                var dd = {
                    content: [
                        {
                            text: "Test:",
                            style: "text",
                            margin: [0, 5, 0, 0]
                        },
                        {
                            table: {
                                widths: [507],
                                heights: [20],
                                body: [
                                    [
                                        {
                                            style: "text",
                                            text: Test || " ",
                                            border: [true, true, true, true]
                                        }
                                    ]
                                ]
                            }
                        }
                    ]
                };

                pdfMake.createPdf(dd).download("Sample_Without_Fix.pdf");
            },



            onPressPdfSunLifeForm1: function () {

                function safeBreak(str) {
                    return (str || '').replace(/(.{1})/g, "$1\u200B");
                }

                var objectView = this.getView().getModel("objectView");
                var Test = objectView.getProperty("/Test");

                var dd = {
                    content: [
                        {
                            text: "Test:",
                            style: "text",
                            margin: [0, 5, 0, 0]
                        },
                        {
                            table: {
                                widths: [507],
                                body: [
                                    [
                                        {
                                            style: "text",
                                            text: safeBreak(Test),
                                            noWrap: false,
                                            border: [true, true, true, true]
                                        }
                                    ]
                                ]
                            }
                        }
                    ]
                };

                pdfMake.createPdf(dd).download("Sample_With_Fix.pdf");
            }




        });
    });
