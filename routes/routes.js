const express = require('express');
const router = express.Router();
const {
  authUser,
  authPermissions,
} = require('../authentication');
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController');

router
  .route('/')
  .get(authUser, authPermissions('admin'), getAllUsers);

router.route('/showMe').get(authUser, showCurrentUser);
router.route('/updateUser').patch(authUser, updateUser);
router.route('/updateUserPassword').patch(authUser, updateUserPassword);

router.route('/:id').get(authUser, getSingleUser);

module.exports = router;