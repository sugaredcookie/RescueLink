# RescueLink🚑

A life-saving app designed to connect individuals in distress with the nearest hospitals, ensuring rapid response in health emergencies. This app is especially impactful in rural and underserved areas where healthcare accessibility is limited.

---

## 🌟 Features

1. **Emergency Button**  
   - One-tap functionality to send an alert to the nearest hospital.
   - Includes user’s live GPS location for accurate assistance.

2. **Real-time Location Sharing**  
   - Automatically shares the user's location with hospitals.  
   - Google Maps integration for precise navigation.

3. **Hospital Notification System**  
   - Hospitals receive a beep alert with the user's details and directions.  
   - Enables ambulance dispatch instantly.

4. **User-Friendly Interface**  
   - Simple and intuitive design, accessible to all age groups.  
   - Optimized for mobile devices with offline support in areas with poor connectivity.

5. **Real-time Communication**  
   - Two-way interaction between users and hospitals for additional details or confirmation.  

6. **Scalable Integration**  
   - Collaborates with local healthcare services, NGOs, and government schemes for broad accessibility.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
  - Responsive design for mobile-first functionality.  
  - Uses `navigator.geolocation` API to capture GPS location.

- **Backend**: Node.js  
  - RESTful APIs to handle requests and notifications.  
  - Real-time communication using WebSockets (e.g., `Socket.io`).

- **Database**: MongoDB  
  - Stores hospital data, user details, and emergency request logs.

- **Mapping and Navigation**: Google Maps API  
  - Provides directions and real-time tracking.

---

## 🚀 How It Works

1. **For Users**:  
   - Tap the **Emergency Button** to send a distress signal.  
   - Your live location and Google Maps directions are shared with the nearest hospital.

2. **For Hospitals**:  
   - Receive alerts via a dedicated app or web interface.  
   - Includes a beep sound, user location, and directions for dispatching an ambulance.

3. **Integration**:  
   - Collaborates with local healthcare services to ensure quick response times.  
