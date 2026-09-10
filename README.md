# 🛒 ShopHub

یک فروشگاه اینترنتی مدرن و واکنش‌گرا که با **React** و **Vite** توسعه داده شده است.

این پروژه با هدف تمرین و نمایش مفاهیم توسعه رابط کاربری با React، مدیریت State، مسیریابی، فرم‌ها و پیاده‌سازی جریان خرید در یک فروشگاه اینترنتی ساخته شده است.

## 🌐 نسخه آنلاین

**مشاهده پروژه:**
https://mkv-dev.ir/portfolio/shophub/

## ✨ امکانات

* نمایش محصولات فروشگاه
* مشاهده جزئیات هر محصول
* افزودن محصول به سبد خرید
* افزایش و کاهش تعداد محصولات
* حذف محصول از سبد خرید
* محاسبه مجموع سبد خرید
* صفحه Checkout
* صفحه ورود / احراز هویت
* مدیریت وضعیت احراز هویت با Context
* مدیریت سبد خرید با Context
* مسیریابی بین صفحات با React Router
* طراحی واکنش‌گرا برای اندازه‌های مختلف صفحه

## 🧩 صفحات

* **Home** — نمایش محصولات
* **Product Details** — جزئیات محصول
* **Authentication** — ورود و احراز هویت
* **Checkout** — بررسی و تکمیل سفارش

## 🛠 تکنولوژی‌ها

* React
* Vite
* React Router DOM
* React Hook Form
* JavaScript (JSX)
* CSS
* React Context API
* ESLint

## 📁 ساختار پروژه

```text
react-store/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Auth.jsx
│   │   ├── Checkout.jsx
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

ساختار پروژه شامل کامپوننت‌های قابل استفاده مجدد، Contextهای مربوط به State، داده‌های محصولات و صفحات مجزا برای بخش‌های مختلف فروشگاه است.

## 🚀 اجرای پروژه

ابتدا Repository را Clone کنید:

```bash
git clone https://github.com/mehrankasebvatan/react-store.git
```

وارد پوشه پروژه شوید:

```bash
cd react-store
```

وابستگی‌ها را نصب کنید:

```bash
npm install
```

برای اجرای پروژه در محیط توسعه:

```bash
npm run dev
```

برای ساخت نسخه Production:

```bash
npm run build
```

برای مشاهده نسخه Production به صورت Local:

```bash
npm run preview
```

## 📦 وابستگی‌های اصلی

این پروژه از React 19، React Router DOM و React Hook Form استفاده می‌کند و با Vite توسعه داده شده است.

## 🛍 مدیریت سبد خرید

مدیریت سبد خرید با استفاده از **React Context API** انجام شده است.

امکانات مربوط به سبد خرید شامل:

* افزودن محصول
* افزایش تعداد محصول
* کاهش تعداد محصول
* حذف محصول
* خالی کردن سبد
* محاسبه مجموع قیمت

است.

## 🔐 مدیریت احراز هویت

وضعیت احراز هویت در پروژه با استفاده از `AuthContext` مدیریت شده و در ساختار اصلی برنامه به عنوان Provider قرار گرفته است.

## 📌 وضعیت پروژه

این پروژه یک **Front-End Project** است و برای نمایش مهارت‌های توسعه رابط کاربری با React ساخته شده است.

اطلاعات محصولات و منطق فروشگاه در سمت Front-End مدیریت می‌شوند و پروژه به عنوان یک فروشگاه واقعی با Backend و سیستم پرداخت آنلاین پیاده‌سازی نشده است.

---

### 👨‍💻 توسعه‌دهنده

**Mehran Kasebvatan**

* GitHub: https://github.com/mehrankasebvatan
* Live Demo: https://mkv-dev.ir/portfolio/shophub/
