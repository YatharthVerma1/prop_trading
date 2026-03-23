import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db, usersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "proptrader-dev-secret-2024";

router.post("/auth/register", async (req, res) => {
  const { name, email, password, country } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required." });
  }

  const existing = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
  if (existing.length > 0) {
    return res.status(409).json({ error: "An account with this email already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const [user] = await db.insert(usersTable).values({
    name,
    email,
    password: hashedPassword,
    country: country || "IN",
    status: "active",
  }).returning();

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

  return res.status(201).json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      country: user.country,
      status: user.status,
    },
  });
});

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

  return res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      country: user.country,
      status: user.status,
    },
  });
});

router.get("/auth/me", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.slice(7);

  let payload: { userId: number; email: string };
  try {
    payload = jwt.verify(token, JWT_SECRET) as { userId: number; email: string };
  } catch {
    return res.status(401).json({ error: "Invalid or expired token." });
  }

  const [user] = await db.select().from(usersTable).where(eq(usersTable.id, payload.userId)).limit(1);
  if (!user) {
    return res.status(404).json({ error: "User not found." });
  }

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    country: user.country,
    status: user.status,
  });
});

export default router;
