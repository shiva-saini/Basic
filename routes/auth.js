const express = require("express");
const authController = require("../controllers/auth");
const { check, body } = require("express-validator");
const User = require("../models/user");

const router = express.Router();
router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);
router.get("/reset", authController.getReset);
router.get("/reset/:token", authController.getNewPassword);
router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.").normalizeEmail(),
    body("password", "password does not match")
      .isLength({ min: 5 })
      .isAlphanumeric().trim(),
  ],
  authController.postLogin
);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        // if (value === 'test@test.com') {
        //   throw new Error('This email address if forbidden.');
        // }
        // return true;
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject(
              "E-Mail exists already, please pick a different one."
            );
          }
        });
      }).normalizeEmail(),

    body(
      "password",
      "Please enter a password with number and alphabets with at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric().trim(),

    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password must match");
      }
      return true;
    }).trim(),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.post("/reset", authController.postReset);
router.post("/new-password", authController.postNewPassword);

module.exports = router;