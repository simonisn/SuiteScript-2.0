"use strict";define(["N/ui","N/email","N/runtime"],function(e,t,i){var a;return a=function(a){if("GET"===a.request.method){var r=e.createForm({title:"Demo Suitelet Form"}),d=r.addField({id:"subject",type:e.FieldType.TEXT,label:"Subject"});d.layoutType=e.FieldLayoutType.NORMAL,d.breakType=e.FieldBreakType.STARTCOL,d.isMandatory=!0;var s=r.addField({id:"recipient",type:e.FieldType.EMAIL,label:"Recipient email"});s.isMandatory=!0;var l=r.addField({id:"message",type:e.FieldType.TEXTAREA,label:"Message"});l.displaySize={width:60,height:10},r.addSubmitButton({label:"Send Email"}),a.response.writePage(r)}else{var u=a.request;t.send({author:i.getCurrentUser().id,recipients:u.parameters.recipient,subject:u.parameters.subject,body:u.parameters.message})}},{onRequest:a}});