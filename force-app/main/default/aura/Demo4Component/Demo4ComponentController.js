({
    doInit : function(component, event, helper) {
        component.set("v.Message1", "Button 1 needs to be Clicked!");
        component.set("v.Message2", "Button 2 needs to be Clicked!");
	},
	handleClick1 : function(component, event, helper) {
        
        var btn = event.getSource();
        var msg = btn.get("v.label");
        component.set("v.Message1", msg+" clicked!");
	},
    handleClick2 : function(component, event, helper) {
        component.set("v.Message2", "Button 2 Clicked!");
	}
})