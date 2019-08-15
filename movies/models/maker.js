const mongoose = require(`mongoose`);
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// My schema
const MakerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});


MakerSchema.virtual('passwordConfirmation')
  .get(() => this.passwordConfirmation)
  .set((value) => this.passwordConfirmation = value);


MakerSchema.pre('save', function (next) {
  const maker = this;
  if (!maker.isModified('password')) return next;
  if (maker.password !== maker.passwordConfirmation) throw new Error('Your password does not match your password confirmation');

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(maker.password, salt, (err, hash) => {
      if (err) return next(err);

      maker.password = hash;
      next();
    });
  });
});


MakerSchema.methods.authenticate = function (plainPassword, callback) {
  
  bcrypt.compare(plainPassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};


module.exports = mongoose.model('Maker', MakerSchema);