import axios from "axios";
const EMPLOYEE_API_URL="http://localhost:8080/api/v1/employees";
class EmployeeService{
    getEmployee(){
        return axios.get(EMPLOYEE_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_URL, employee);
    }

}
// eslint-disable-next-line
export default new EmployeeService()
