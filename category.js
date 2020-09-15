var express = require('express');
var router = express.Router();
var Category = require('./models/categories');

/* API to fetch the record based upon the category ID */
router.get("/api/category", function (req, res) {
  try {
    Category.findOne({ _id: req.query.id }, function (error, data) {
      if (error) console.log(error);
      if (data.categoryType === 'Parent') {
        Category.find({ parentCategoryId: data._id }, function (err, result) {
          res.status(200).send({ message: 'Successfully fetched all the Child categories.', data: result });
        });
      } else {
        Category.find({ _id: data.parentCategoryId }, function (err, result) {
          res.status(200).send({ message: 'Successfully fetched parent category', data: result });
        });
      }
    });
  }
  catch (err) {
    console.log("here error in category :", err);
  }
});


module.exports = router;