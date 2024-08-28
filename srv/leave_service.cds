using { app.Leave } from '../db/leave_schema';

service LeaveManagementService  {

  entity LeaveType as projection on Leave.LeaveType;
  entity LeaveRequest as projection on Leave.LeaveRequest;
  @readonly
  entity Manager as projection on Leave.Manager;

  @readonly
  entity HR as projection on Leave.HR

  @readonly
  entity Employees as projection on Leave.Employee;
  


}
