## COMMENTED-ADVANCED-CODE-TEMPLATE

### General note
- Solve problem using simplest and basic features
- If you know - `Super Cool Latest Advanced method` - comment your supercode down (in proj file) below using COMMENTED-ADVANCED-CODE-TEMPLATE

### COMMENTED-ADVANCED-CODE-TEMPLATE
```javascript
/***********************************
* Amend (Replace)                  *              
***********************************/
// your code
// your code
// your code
// your code
```

### 1. How it must looks in real Project
 - Tasks can be much more simplest, example is worst case
```javascript
// Simple feature vesrion
const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
// const Profile = require('../../models/Profile');
router.post("/",
 async (req, res) => {
    try {
      const newPost = new Post({
        text: req.body.text,
      });
      const post = newPost.save();
      res.json(post);
    } catch (err) {
      res.status(500).send({ msg: err.message });
    }
  }
);
module.exports = router;
/**************************************************
* Amend (Replace)                                 *
**************************************************/
// const { check, validationResult } = require("express-validator"); // add validation
// const auth = require("../../middleware/auth"); //add autentification, middleware/auth already exist
// Solve autentification issue 123
// [
//   auth,
//   [
//     check("text", "Text is required")
//       .not()
//       .isEmpty()
//   ]
// ],
// async (req, res) => {
```

### 2. How it must looks in real Project nexttask
```javascript
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Post = require("../../models/Post");
router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = new Post({
        text: req.body.text,
        username: user.username,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ msg: err.message });
    }
  }
);
module.exports = router;
/**************************************************
* Amend (Replace)                                 *
**************************************************/
//Add new router.get issue 124

```
