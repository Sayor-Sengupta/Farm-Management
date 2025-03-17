import express from "express";
import multer from "multer";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

// Multer configuration for local storage
const upload = multer({ dest: "uploads/" });

router.post("/predict", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No image uploaded" });
    } 

    const imagePath = path.join(__dirname, "../", req.file.path);

    // Run Python script
    const pythonProcess = spawn("python", ["predict.py", imagePath]);

    let prediction = "";

    pythonProcess.stdout.on("data", (data) => {
        prediction += data.toString().trim();
    });

    pythonProcess.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
    });

    pythonProcess.on("close", (code) => {
        // Delete image after prediction
        fs.unlinkSync(imagePath);

        if (code !== 0) {
            return res.status(500).json({ error: "Python script error" });
        }

        // ✅ Ensure response matches new class names
        res.json({ prediction });
    });
});

export default router;
