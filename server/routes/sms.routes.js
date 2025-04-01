
import Router from "express";

import User from "../models/user.model.js";
import loggedIn from "../middleware/LoggedIn.middleware.js";
import twilio from "twilio";
const twilioClient = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const TWILIO_PHONE = process.env.TWILIO_PHONE;
const router = Router();



router.post("/send", loggedIn, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    await twilioClient.messages.create({
      from: TWILIO_PHONE,
      to: process.env.Phone_Number,
      body: `📢 Notification: ${message}`,
    });

    res.json({ success: true, message: "SMS sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending SMS:", error);
    res.status(500).json({ error: "Failed to send SMS" });
  }
});

export default router
