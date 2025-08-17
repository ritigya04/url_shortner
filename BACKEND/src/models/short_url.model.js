 import mongoose from "mongoose";
const shortUrlSchema = new mongoose.Schema({
 full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
    index: true,//btree that manages the index
    // This is used to speed up the search for short URLs in the database.
    unique: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  
  },
});
// shortUrlSchema.index({ short_url: 1 }, { unique: true });
const shortUrl = mongoose.model("shortUrl", shortUrlSchema);
export default shortUrl;
