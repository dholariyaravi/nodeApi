module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {
          Answer: String,
          question :String,
          published: Boolean,
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };