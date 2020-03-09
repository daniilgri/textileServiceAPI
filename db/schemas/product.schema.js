const mongoose = require("mongoose");

const { USAGE_TYPES } = require("../../constants/usageType.constants");
const {
  USAGE_CONDITIONS
} = require("../../constants/usageCondition.constants");
const { SEASONS } = require("../../constants/season.constants");
const { GENDERS } = require("../../constants/gender.constants");
const { SUPPORT_SURFACE } = require("../../constants/supportSurface.constants");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  usageType: {
    type: String,
    required: true,
    trim: true,
    enum: [
      USAGE_TYPES.HOUSEHOLD,
      USAGE_TYPES.SPORT,
      USAGE_TYPES.PRODUCTION,
      USAGE_TYPES.UNIFORM,
      USAGE_TYPES.RITUAL
    ]
  },
  usageCondition: {
    type: String,
    required: true,
    trim: true,
    enum: [USAGE_CONDITIONS.DAILY, USAGE_CONDITIONS.OCCASIONAL]
  },
  season: {
    type: String,
    required: true,
    trim: true,
    enum: [
      SEASONS.ALL_SEASONAL,
      SEASONS.AUTUMN,
      SEASONS.SPRING,
      SEASONS.SUMMER,
      SEASONS.WINTER
    ]
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: [GENDERS.FEMALE, GENDERS.MALE, GENDERS.UNISEX]
  },
  ageRange: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AgeRange",
    required: true
  },
  materials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Material"
    }
  ],
  supportSurface: {
    type: String,
    required: true,
    trim: true,
    enum: [SUPPORT_SURFACE.SHOULDER, SUPPORT_SURFACE.WAIST]
  },
  code: {
    type: String,
    required: true
  }
});

exports.ProductSchema = ProductSchema;
