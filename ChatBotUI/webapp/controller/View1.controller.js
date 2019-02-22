sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ChatBotUI.ChatBotUI.controller.View1", {
		onInit: function () {
			var userdata = null;
     		var customerdata = null;
			$.ajax({
				type: "get",
				async: false,
				url: "/chatbotbackend/chatbotservice/userinfo",
				success: function(data, res) {
					customerdata = data;
				},
				error: function(err) {

				}
			});
		
			window.webchatMethods = {
		        // called at each user message
		        getMemory: (conversationId) => {
		          const memory = { userName: customerdata.username, userId: customerdata.userid}
		          return { memory, merge: true }
		        }
	    	};
   			this.getView().byId("nameId").setText(customerdata.username);
			this.getView().byId("logonId").setText(customerdata.userid);
		}
	});
});