const express = require('express');
const router = express.Router();
const {handleAllUsers, CreateUser} = require('../controllers/user');
const {getUserById} = require('../controllers/user');
const{deleteUser} = require('../controllers/user');
//REST API
router.get('/',handleAllUsers);

router.get('/:id',getUserById);

router.post('/',CreateUser);


router.delete('/:id',deleteUser)

module.exports = router;