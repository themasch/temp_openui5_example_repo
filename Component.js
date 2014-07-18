/*globals sap,jQuery,console*/
sap.ui.define("example.Component", [ "sap/ui/core/UIComponent" ],
    function(Component) {
        "use strict";

        Component.extend("example.Component", {
            metadata: {
                rootView: "example.view.App",
                routing: {
                    config: { // default values for routing
                        viewType : "XML",
                        viewPath: "example.view",
                        clearTarget: false,
                        targetControl : "rootNav",
                        targetAggregation: "pages"
                    },
                    routes: [ // contains routing configuration objects
                        {
                            name : "login",
                            pattern : "login",
                            view : "Login"
                        },
                        {
                            name: "shopIndex",
                            pattern: ":all*:",
                            view: "Index",
                            subroutes: [
                                {
                                    name: "dashboard",
                                    pattern: "dashboard",
                                    targetControl: "shopNav",
                                    targetAggregation: "detailPages",
                                    view: "Dashboard"
                                },
                                {
                                    name: "shop",
                                    pattern: "shop",
                                    targetControl: "shopNav",
                                    targetAggregation: "detailPages",
                                    view: "Shop"
                                },
                                {
                                    name: "cart",
                                    pattern: "cart",
                                    targetControl: "shopNav",
                                    targetAggregation: "detailPages",
                                    view: "Cart"
                                }
                            ]
                        }
                    ]
                }
            }
        });

        example.Component.prototype.init = function() {
            sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().attachRouteMatched(function(evt) {
                var oTarget = evt.getParameter("targetControl"),
                    oView   = evt.getParameter("view");
                oTarget.to(oView);
            });

            // this component should automatically initialize the router!
            this.getRouter().initialize();
        };
    }
);
