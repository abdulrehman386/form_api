const {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
} = require("drizzle-orm/pg-core");

const businessForm = pgTable("business_form", {
  id: serial("id").primaryKey(),

  businessName: varchar("business_name", { length: 255 }),
  website: varchar("website", { length: 255 }),
  socialMedia: text("social_media"),
  gmbLink: varchar("gmb_link", { length: 255 }),
  bookingSystem: varchar("booking_system", { length: 255 }),

  paymentMethod: varchar("payment_method", { length: 50 }),

  bestSelling: text("best_selling"),
  responseTime: varchar("response_time", { length: 100 }),
  language: varchar("language", { length: 100 }),

  brandManual: varchar("brand_manual", { length: 10 }),

  targetAudience: text("target_audience"),
  audienceType: varchar("audience_type", { length: 50 }),

  competitor1: varchar("competitor1", { length: 255 }),
  competitor2: varchar("competitor2", { length: 255 }),
  competitor3: varchar("competitor3", { length: 255 }),

  createContent: varchar("create_content", { length: 10 }),

  facebook: boolean("facebook"),
  instagram: boolean("instagram"),
  linkedin: boolean("linkedin"),
  tiktok: boolean("tiktok"),
  youtube: boolean("youtube"),

  otherPlatform: varchar("other_platform", { length: 255 }),

  aboutBusiness: text("about_business"),
});

module.exports = {
  businessForm,
};