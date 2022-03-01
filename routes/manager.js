const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('');
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('');

router
  .route('/')
  .get(authenticateUser, authorizePermissions('admin'), getAllUsers);


router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;
