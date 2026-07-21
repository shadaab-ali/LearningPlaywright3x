let responseTime=850;
let sla=1000;
let slaStatus=responseTime<=sla ? "Withing SLA" : "SLA breached";
console.log(`Response: ${responseTime} - ${slaStatus}`);
