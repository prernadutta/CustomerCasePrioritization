({
	doInit : function(component, event, helper) {
        var data = {'Name':'Account of Prerna','Balance':800000};
		component.set("v.Var1","Demo Value from component Controller")
        component.set("v.newAcc",data)
        component.set("v.userData",
                      {
                          'myString1':'StringValue',
                          'myInteger1':2024
                      })
	}
})