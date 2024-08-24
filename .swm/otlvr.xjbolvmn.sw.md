---
title: OTLVR
---
### Overview:

### The **360° Video Streaming Platform** is an innovative web-based service that enables users to stream immersive 360-degree videos. This platform is designed to deliver high-quality, interactive video experiences where users can control the viewing angle, exploring the content from any direction in real-time. The application is built using modern web technologies to ensure seamless performance and a rich user experience across various devices.

### 

### Installation:

### Prerequisites

- &nbsp;&nbsp;&nbsp;&nbsp;Node.js (version 16.0.0 or higher)
- &nbsp;&nbsp;&nbsp;&nbsp;npm (version 7.0.0 or higher)
- &nbsp;&nbsp;&nbsp;&nbsp;vite

### Setup:

1. Clone the repository:

- [ ] git clone <https://github.com/hari03032004/Deovr.git>
- [ ] cd Deovr

2. Install dependencies:

- [ ] &nbsp;&nbsp;npm install
- [ ] &nbsp;npm install vite @vitejs/plugin-react

3. Start the development server:

- npm start

4. Deployment:

- npm run dev
- ctrl+click&nbsp;

5. File Structure:

- Public:
  - Output.mp4
  - vite.svg
- src:
  - assets
    - react.svg
  - components
    - <SwmPath>[src/components/Button.jsx](/src/components/Button.jsx)</SwmPath>
    - <SwmPath>[src/components/Navbar.jsx](/src/components/Navbar.jsx)</SwmPath>
    - <SwmPath>[src/components/Searchbar.jsx](/src/components/Searchbar.jsx)</SwmPath>
    - <SwmPath>[src/components/Sidebar.css](/src/components/Sidebar.css)</SwmPath>
    - <SwmPath>[src/components/SidebarData.jsx](/src/components/SidebarData.jsx)</SwmPath>
    - <SwmPath>[src/components/ToggleButton.jsx](/src/components/ToggleButton.jsx)</SwmPath>
    - <SwmPath>[src/components/TopNavbar.css](/src/components/TopNavbar.css)</SwmPath>
    - <SwmPath>[src/components/TopNavbar.jsx](/src/components/TopNavbar.jsx)</SwmPath>
    - <SwmPath>[src/components/TopNavbarData.jsx](/src/components/TopNavbarData.jsx)</SwmPath>
    - <SwmPath>[src/components/Video.jsx](/src/components/Video.jsx)</SwmPath>
  - routes:
    - <SwmPath>[src/routes/Facebook.jsx](/src/routes/Facebook.jsx)</SwmPath>
    - <SwmPath>[src/routes/Form.jsx](/src/routes/Form.jsx)</SwmPath>
    - <SwmPath>[src/routes/GetVrPlayer.jsx](/src/routes/GetVrPlayer.jsx)</SwmPath>
    - <SwmPath>[src/routes/Home.jsx](/src/routes/Home.jsx)</SwmPath>
    - <SwmPath>[src/routes/MyFavourites.jsx](/src/routes/MyFavourites.jsx)</SwmPath>
    - <SwmPath>[src/routes/MySubscriptions.jsx](/src/routes/MySubscriptions.jsx)</SwmPath>
    - <SwmPath>[src/routes/Originals.jsx](/src/routes/Originals.jsx)</SwmPath>
    - <SwmPath>[src/routes/Photos.jsx](/src/routes/Photos.jsx)</SwmPath>
    - <SwmPath>[src/routes/Premium.jsx](/src/routes/Premium.jsx)</SwmPath>
    - <SwmPath>[src/routes/PublicPlaylists.jsx](/src/routes/PublicPlaylists.jsx)</SwmPath>
    - <SwmPath>[src/routes/Signin.jsx](/src/routes/Signin.jsx)</SwmPath>
    - <SwmPath>[src/routes/Signup.jsx](/src/routes/Signup.jsx)</SwmPath>
    - <SwmPath>[src/routes/Videos.jsx](/src/routes/Videos.jsx)</SwmPath>
    - <SwmPath>[src/routes/WatchLater.jsx](/src/routes/WatchLater.jsx)</SwmPath>
    - <SwmPath>[src/routes/footer.jsx](/src/routes/footer.jsx)</SwmPath>
  - <SwmPath>[src/App.css](/src/App.css)</SwmPath>
  - <SwmPath>[src/App.jsx](/src/App.jsx)</SwmPath>
  - <SwmPath>[src/index.css](/src/index.css)</SwmPath>
  - <SwmPath>[src/main.jsx](/src/main.jsx)</SwmPath>

### Work Flow:(Video-player)

### graph TD      C{main.jsx}     C --> D\[navbar&sidebar\]     D --> E\[Home\]     D --> F\[videos\]     E --> G\[video\]     F --> G     F --> H\[video360\]     F --> J\[videoside.js

&nbsp;

1.main.jsx:

The code is setting up the structure and navigation for a multi-page React application. It organizes the application into different routes, each corresponding to a specific feature or view, and ensures that users can navigate between these sections without page reloads, providing a smooth and dynamic user experience.

2.Index.css:

This CSS code is used to style various components of a website, focusing on a video component and responsive design. Below is an overview of what the code does:

1. **Global Styles**:

   - `:root`: Sets global styles, such as box-sizing and margin reset.

   - `a`: Styles anchor (`<a>`) tags to have a specific font weight, color, and inherit text decoration.

   - `body`: Removes the default margin from the body.

2. **Heading and Button Styles**:

   - `h1`: Sets a large font size and line height for `<h1>` elements.

   - `button`: Styles buttons with rounded corners, padding, font settings, background color, and a hover effect that changes the border color.

3. **Layout Styles**:

   - `.layout`: Defines a grid layout with two columns, one for navigation (likely a sidebar) and one for the main content.

   - `.navbar-toggle`: Styles a navigation bar toggle button with flexbox for layout control.

4. **Search Bar and Container**:

   - `.search-bar`: Styles the search bar with specific dimensions, color, and flexbox for centering content.

   - `.container`: Provides a flexbox layout for a container, ensuring elements are evenly spaced and vertically centered.

5. **Button Styles**:

   - Multiple classes like `.button`, `.topnavbar-button`, and `.sign-button` style buttons with flexbox for layout, specific colors, padding, font settings, and hover effects.

6. **Video Component Styles**:

   - `.video-grid`: Defines a grid layout for videos, specifying columns, gap between grid items, and overall width control.

   - `.video-container`: Styles the container for each video, using flexbox to arrange its content vertically.

   - `.video`: Specifies the dimensions and positioning of the video element, ensuring it fits within its container.

   - `video`: Ensures the actual `<video>` element is properly sized, has rounded corners, and covers its container (using `object-fit: cover`).

   - `.video-content`: Manages the layout of the video’s title and description.

   - `.video-title`: Aligns the video title and any accompanying elements.

   - `.video-profile`: Styles the profile icon next to the video title.

   - `.video-name`: Sets font weight and size for the video name.

   - `.video-description`: Styles the video description with appropriate font size and color.

7. **Additional Component Styles**:

   - `.premium-icon`: Styles an icon that likely represents premium content, positioned over the video.

   - `.Like-com`: Positions and styles like/comment icons near the video.

8. **Responsive Design**:

   - `@media` queries: Adjust the layout and styles for different screen widths (1200px, 900px, and 600px), ensuring that the website is responsive.

     - On smaller screens, the layout changes from multiple columns to a single-column layout, and the video grid adjusts the number of columns to fit the screen width.

     - Components like buttons and the navbar toggle are also resized or hidden based on the screen size.

### Explanation for Video Component Styling:

- **Grid Layout (**`.video-grid`): The videos are displayed in a responsive grid that changes the number of columns based on screen size.

- **Container (**`.video-container`): Each video is wrapped in a container that organizes its content (video, title, description) vertically.

- **Video Element (**`.video`, `video`): The video element is styled to fit within its container, with rounded corners and cover scaling to ensure the video fills its space without distortion.

- **Title and Description**: The title and description are styled with appropriate font settings and alignment, ensuring that the text is clear and visually appealing next to the video.

This CSS ensures that the video component is both visually appealing and responsive across various devices, providing a consistent user experience.

&nbsp;

### 3.Components:

#### a) Applayout.jsx:

#### The provided code defines a React functional component named `Applayout`, which serves as the layout for a web application. It manages the state and behavior of a sidebar and passes this state down to child components.

### Key Components and Logic:

1. **State Management**:

   - `sidebar` State:

     - Initialized with `true`, indicating that the sidebar is initially visible.

     - The state is managed by `useState` and can be toggled with the `showSidebar` function.

   - `close` State:

     - Initialized with `false`, likely indicating whether a specific close action or UI element is active.

     - Managed by `useState` and can be toggled with the `showClose` function.

2. **Event Handlers**:

   - `showSidebar`:

     - Toggles the `sidebar` state between `true` and `false`, effectively showing or hiding the sidebar.

     - Logs the current state of `sidebar` to the console for debugging.

   - `showClose`:

     - Toggles the `close` state between `true` and `false`.

3. **Rendering**:

   - `<Navbar />`:

     - A child component that receives `showSidebar`, `sidebar`, and `close` as props. This allows `Navbar` to control or reflect the visibility of the sidebar and respond to the `close` state.

   - `<Outlet />`:

     - A placeholder component from `react-router` that renders the matched child route component.

     - The `context` prop is used to pass `showSidebar` to the components rendered by `Outlet`, and `showClose` is also passed directly

b) <SwmPath>[src/components/Button.jsx](/src/components/Button.jsx)</SwmPath>:

&nbsp;

&nbsp;

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBRGVvdnIlM0ElM0FWYXNhbnRoYW4xMTExMDI=" repo-name="Deovr"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
