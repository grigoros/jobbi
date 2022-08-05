import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: { 
    type: String,
    required: true,
    maxlength: 20,
    default: 'lastName',
  },
  lastName: { 
    type: String,
    required: true,
    maxlength: 20,
    default: 'my city',
  },
  email: { 
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email'
    },
    unique: true,
  },
  password: { type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
})

export default mongoose.model('User', UserSchema)