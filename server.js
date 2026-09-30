const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());

/* =========================
   HEALTH CHECK
========================= */

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "SOLEHUB API ONLINE"
  });
});

/* =========================
   PRODUCTS
========================= */

app.get("/api/products", (req, res) => {
  res.json({
    products: [
      {
        id: 1,
        name: "SOLEHUB Runner",
        price: 299000,
        stock: 10,
        size: "39-44"
      },
      {
        id: 2,
        name: "SOLEHUB Classic",
        price: 399000,
        stock: 8,
        size: "40-44"
      }
    ]
  });
});

/* =========================
   LOGIN
========================= */

app.post("/api/auth/login", (req, res) => {
  const { email } = req.body;

  res.json({
    success: true,
    accessToken: "solehub-demo-token",
    user: {
      id: 1,
      name: "SOLEHUB User",
      email: email || "user@solehub.com",
      role: "buyer"
    }
  });
});

/* =========================
   REGISTER
========================= */

app.post("/api/auth/register", (req, res) => {
  res.json({
    success: true,
    message: "Akun berhasil dibuat",
    user: req.body
  });
});

/* =========================
   CURRENT USER
========================= */

app.get("/api/auth/me", (req, res) => {
  res.json({
    user: {
      id: 1,
      name: "SOLEHUB User",
      email: "user@solehub.com",
      role: "buyer"
    }
  });
});

/* =========================
   ORDERS
========================= */

app.get("/api/orders", (req, res) => {
  res.json({
    orders: []
  });
});

app.post("/api/orders", (req, res) => {
  res.json({
    success: true,
    message: "Pesanan berhasil dibuat",
    order: {
      id: Date.now(),
      items: req.body.items || [],
      status: "pending"
    }
  });
});

/* =========================
   WALLET
========================= */

app.get("/api/wallet", (req, res) => {
  res.json({
    balance: 0,
    transactions: []
  });
});

/* =========================
   CHAT
========================= */

app.get("/api/chats", (req, res) => {
  res.json({
    chats: []
  });
});

app.post("/api/chats/messages", (req, res) => {
  res.json({
    success: true,
    message: req.body.message || ""
  });
});

/* =========================
   SELLER
========================= */

app.get("/api/seller/products", (req, res) => {
  res.json({
    products: []
  });
});

app.post("/api/seller/products", (req, res) => {
  res.json({
    success: true,
    message: "Produk berhasil ditambahkan",
    product: req.body
  });
});

/* =========================
   ROOT
========================= */

app.get("/", (req, res) => {
  res.send("SOLEHUB API ONLINE 🚀");
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`SOLEHUB API berjalan di port ${PORT}`);
});
