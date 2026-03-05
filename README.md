# Headless WordPress + Next.js Website

This project is a modern web application built using **Next.js** as the frontend and **WordPress** as a **Headless CMS**.  
The frontend fetches data from the WordPress REST API and displays dynamic content such as doctors/team members.

---

## 🚀 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS

### Backend (Headless CMS)
- WordPress
- WordPress REST API
- Advanced Custom Fields (ACF)

### Email Service
- Nodemailer
- Gmail SMTP

---

## 📁 Project Structure
headless-next/
│
├── app/
│ ├── page.js # Homepage
│ ├── about/page.js # About page
│ ├── contact/page.js # Contact page
│ ├── doctors/page.js # Doctors listing page
│ ├── doctors/[slug]/page.js # Single doctor page
│ └── api/contact/route.js # Contact form API
│
├── components/
│ ├── Header.js
│ ├── Footer.js
│ └── Container.js
│
├── lib/
│ └── config.js # Global site variables
│
├── public/
│ └── images/
│
├── .env.local
└── README.md

