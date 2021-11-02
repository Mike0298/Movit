const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { config, dataDict } = require("../../config/config");

const User = require("../../models/User");
const {
  validateRegisterData,
  validateLoginData,
} = require("../../util/validation");
const auth = require("../../util/auth");

//@route    POST    /api/users/register
//@desc     Register user
//@access   Public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //validate request
    const newUser = { name, email, password };
    const { valid, errors } = validateRegisterData(newUser);
    if (!valid) return res.status(400).json(errors);

    //check if user exist
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "User already exists" });

    //get user gravatar
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    user = new User({
      name,
      email,
      avatar,
      password,
    });

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    //return jsonwebtoken
    jwt.sign(
      payload,
      config.jwtSecret,
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

// @route   GET   api/users
// @desc    Get user data
// @access  Private

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    POST    /api/users/login
//@desc     Authenticate user and return token
//@access   Public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    //validate data
    const loginData = { email, password };
    const { valid, errors } = validateLoginData(loginData);
    if (!valid) return res.status(400).json(errors);
    //check if user exist
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    //return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.jwtSecret,
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});

//@route    PUT    /api/users/:user_id/mod
//@desc     Make an user a moderator
//@access   Private

router.put("/:user_id/mod", auth, async (req, res) => {
  try {
    const admin = await User.findById(req.user.id);
    if (admin.accountType !== dataDict.admin)
      return res
        .status(401)
        .json({ error: "Insufficent permission, admin role required" });

    const user = await User.findById(req.params.user_id);
    if (user.accountType === dataDict.admin)
      return res
        .status(401)
        .json({ error: "Invalid operation, admin role cannot be changed" });
    if (user.accountType === dataDict.moderator)
      return res.status(401).json({ error: "User already a mod" });

    user.accountType = dataDict.moderator;
    await user.save();
    return res
      .status(200)
      .json({ success: `User ${req.params.user_id} is now a moderator` });
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ error: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route    PUT    /api/users/:user_id/unmod
//@desc     Remove mod role from an user
//@access   Private

router.put("/:user_id/unmod", auth, async (req, res) => {
  try {
    const admin = await User.findById(req.user.id);
    if (admin.accountType !== dataDict.admin)
      return res
        .status(401)
        .json({ error: "Insufficent permission, admin role required" });

    const user = await User.findById(req.params.user_id);
    if (user.accountType === dataDict.admin)
      return res
        .status(401)
        .json({ error: "Invalid operation, admin role cannot be changed" });
    if (user.accountType === dataDict.member)
      return res.status(401).json({ error: "User is not a moderator" });

    user.accountType = dataDict.member;
    await user.save();
    return res.status(200).json({
      success: `User ${req.params.user_id} is no longer a moderator`,
    });
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ error: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
