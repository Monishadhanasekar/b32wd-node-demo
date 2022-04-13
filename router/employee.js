const express = require("express");
const router = express.Router();
var employeeModule = require("../module/employee");

router.get('/', employeeModule.getEmployees);
router.get('/:id', employeeModule.getEmployee);
router.post('/create', employeeModule.createEmployee);
router.put('/update/:id', employeeModule.updateEmployee);
router.patch('/update/:id', employeeModule.updateEmployeeRole);
router.delete('/delete/:id', employeeModule.deleteEmployee);

module.exports = router;

// POST /employee/create
    // req.body

// GET /employee/e32