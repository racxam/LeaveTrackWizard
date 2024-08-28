const cds= require("@sap/cds")
module.exports= cds.service.impl(async function(){
    const db= await cds.connect.to('db');
    const {LeaveRequest}=db.entities;
    

})
