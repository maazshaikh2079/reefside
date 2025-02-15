## ReefSide Restro - Restaurant Management WebApp
ReefSide Restro is a web-based restaurant management system designed to streamline the operations of restaurants with efficient digital solutions. Below are the core features of the application:

### URL: https://reefside.netlify.app/
---

### Features
## 1. Login System
Multiple User Roles: Different login credentials for waiters, admins, and users.
Waiter Login: Access to waiter management tools and order handling.
Admin Login: Access to restaurant-wide management including order review and deletion.
<img width="1106" alt="image" src="https://github.com/user-attachments/assets/9abba732-720c-4711-b59a-3a0a7c7fbdeb">

## 2. Waiter Management
Add New Waiters: Input waiter details including Name, ID, Address, and Salary.
Edit Waiter Details: Update any details of existing waiters.
Delete Waiters: Remove a waiter from the system.
Duplicate ID Handling: Prevents the addition or update of a waiter with a duplicate ID.
<img width="1106" alt="image" src="https://github.com/user-attachments/assets/f576cbc9-ce7f-4b28-b3ec-b0df2801077f">

## 3. Order Management
Order Review: View all placed orders with details like dishes, GST amount, and total price.
Mark Orders as Paid: Delete orders after payment is confirmed.
Real-Time Updates: Fetches and displays updated data using Firebase Firestore.
<img width="1106" alt="image" src="https://github.com/user-attachments/assets/9d1a8f0b-6629-4f1c-86bb-09afb62dd953">

## 4. Payment Calculation
GST Calculation: Automatically calculates GST and adds it to the total amount.
Final Payment: View final amounts including GST for each order.
<img width="1106" alt="image" src="https://github.com/user-attachments/assets/dc124d92-7c02-4d08-9493-303ec7b38627">

## 5. Responsive Design
Mobile-Friendly: Adapts to different screen sizes with responsive design.
Consistent Layout: Ensures all pages work seamlessly across devices, providing a uniform user experience.
<img width="1106" alt="image" src="https://github.com/user-attachments/assets/2ff329d9-1287-4a1e-9c0b-595bd42fe854">

## 6. Real-Time Data Sync
Firebase Integration: All data is stored and updated in real-time with Firebase Firestore.
Live Data Fetch: Waiters, orders, and other details are fetched and updated live without page reloads (unless necessary).
## 7. Customizable Layout
UI Flexibility: Custom layouts and CSS to match the specific needs of the restaurant, such as color themes and branding.
## 8. Easy Setup & Deployment
React-Based: Built on top of React for modern web development, making it easy to extend and modify.
Firebase Hosting: Can be deployed seamlessly on Firebase or other static hosting services.
