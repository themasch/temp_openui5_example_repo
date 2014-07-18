sap.ui.controller("example.view.Index", {

    /**************************************************************
     * Life Cycle Methods
     **************************************************************/

    onInit: function () {
        var oView = this.getView();

        this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

        this.oShopNav   = oView.byId("shopNav");
        this.oPage      = oView.byId("shopPage");
        this.oNavButton = oView.byId("shopPage-navButton");

        // attach events
        this.oPage.attachNavButtonPress(this._toggleMaster, this);

    },


    /**
     *
     * @param {sap.ui.base.Event} oEvt
     * @listens List#itemPress
     * @private
     */
    navigate: function(oEvt) {
        var oListItem = oEvt.getParameter("listItem");
        var sItemId = oListItem.getId().replace(this.getView().getId() + '--', '');
        var sPageName = sItemId.replace(/^nav\-/, '');

        this.oRouter.navTo(sPageName);
    },

    /**************************************************************
     * private methods
     **************************************************************/

    /**
     * hide/show master on nav button press
     *
     * @private
     */
    _toggleMaster: function() {
        if(this.oShopNav.isMasterShown()) {
            this.oShopNav.hideMaster();
        }
        else {
            this.oShopNav.showMaster();
        }
    }
});