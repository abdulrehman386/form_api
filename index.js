const express = require("express");
const { drizzle } = require("drizzle-orm/node-postgres");
const { businessForm } = require("./schema");
const { Pool } = require("pg");
const cors = require("cors");
const { eq } = require("drizzle-orm");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "business",
    password: "Rehman",
    port: 5432,
});

const db = drizzle(pool);
pool.connect()
    .then(() => console.log("✅ Database Connected"))
    .catch((err) => console.log("❌ Database Error:", err.message));
// CREATE (POST)
app.post("/business", async (req, res) => {
    try {
        const {
            businessName,
            website,
            socialMedia,
            gmbLink,
            bookingSystem,
            paymentMethod,
            bestSelling,
            responseTime,
            language,
            brandManual,
            targetAudience,
            audienceType,
            competitor1,
            competitor2,
            competitor3,
            createContent,
            facebook,
            instagram,
            linkedin,
            tiktok,
            youtube,
            otherPlatform,
            aboutBusiness
        } = req.body;

        await db.insert(businessForm).values({
            businessName,
            website,
            socialMedia,
            gmbLink,
            bookingSystem,
            paymentMethod,
            bestSelling,
            responseTime,
            language,
            brandManual,
            targetAudience,
            audienceType,
            competitor1,
            competitor2,
            competitor3,
            createContent,
            facebook,
            instagram,
            linkedin,
            tiktok,
            youtube,
            otherPlatform,
            aboutBusiness
        });

        res.status(201).json({
            message: "Business form submitted successfully"
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error"
        });
    }
});

// UPDATE (PUT)
app.put("/business/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const {
            businessName,
            website,
            socialMedia,
            gmbLink,
            bookingSystem,
            paymentMethod,
            bestSelling,
            responseTime,
            language,
            brandManual,
            targetAudience,
            audienceType,
            competitor1,
            competitor2,
            competitor3,
            createContent,
            facebook,
            instagram,
            linkedin,
            tiktok,
            youtube,
            otherPlatform,
            aboutBusiness
        } = req.body;

        await db
            .update(businessForm)
            .set({
                businessName,
                website,
                socialMedia,
                gmbLink,
                bookingSystem,
                paymentMethod,
                bestSelling,
                responseTime,
                language,
                brandManual,
                targetAudience,
                audienceType,
                competitor1,
                competitor2,
                competitor3,
                createContent,
                facebook,
                instagram,
                linkedin,
                tiktok,
                youtube,
                otherPlatform,
                aboutBusiness
            })
            .where(eq(businessForm.id, Number(id)));

        res.json({
            message: "Business updated successfully"
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });
    }
});
// READ (GET ALL)
app.get("/business", async (req, res) => {
    try {
        const result = await db.select().from(businessForm);

        res.status(200).json(result);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });
    }
});

// DELETE
app.delete("/business/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await db
            .delete(businessForm)
            .where(eq(businessForm.id, Number(id)));

        res.json({
            message: "Business deleted successfully"
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });
    }
});
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});