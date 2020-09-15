var mongoose = require('mongoose'), Schema = mongoose.Schema;
var categorySchema = new Schema({
  name: { type: String },
  categoryType: { type: String, default: 'parent' },
  parentCategoryId: { type: Schema.Types.ObjectId, ref: 'categories' }
}, { collection: 'categories' });

/*
 *Define model and export it for use in other page
 */
var Category = module.exports = mongoose.model("Category", categorySchema);
module.exports = Category;