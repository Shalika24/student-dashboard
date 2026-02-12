# Student Course Management Dashboard

A modern, responsive student course management system built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dashboard Overview** - Stats cards, quick actions, recent activity
- **Course Management** - Add, search, filter courses with status badges
- **Student Management** - Add, search, filter students with email validation
- **Profile Page** - User information display
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Collapsible Sidebar** - Desktop collapse & mobile drawer
- **Form Validation** - Input validation with error messages
- **Loading States** - Loading, empty, and error state components

## Project Structure

```
student-dashboard/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   └── States.tsx              # Loading, Empty, Error states
│   │   ├── AppShell.tsx                # Main layout wrapper
│   │   ├── Navbar.tsx                  # Top navigation bar
│   │   ├── Sidebar.tsx                 # Side navigation menu
│   │   └── Footer.tsx                  # Footer component
│   ├── courses/
│   │   └── page.tsx                    # Courses page
│   ├── students/
│   │   └── page.tsx                    # Students page
│   ├── profile/
│   │   └── page.tsx                    # Profile page
│   ├── layout.tsx                      # Root layout
│   ├── page.tsx                        # Home/Dashboard page
│   └── globals.css                     # Global styles & CSS variables
├── public/
│   ├── logo.svg                        # Dashboard logo
│   ├── user.png                        # User profile image
│   └── [other SVG files]
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or create the project:**
```bash
npx create-next-app@latest student-dashboard --typescript --tailwind --app
cd student-dashboard
```

2. **Install dependencies:**
```bash
npm install react-icons
```

3. **Copy all the files to their respective locations** (see File Mapping below)

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser:**
```
http://localhost:3000
```

## File Mapping

Copy each file to its corresponding location:

### Core Components (`app/components/`)

| File Name | Destination Path |
|-----------|-----------------|
| `AppShell.tsx` | `app/components/AppShell.tsx` |
| `Navbar.tsx` | `app/components/Navbar.tsx` |
| `Sidebar.tsx` | `app/components/Sidebar.tsx` |
| `Footer.tsx` | `app/components/Footer.tsx` |
| `States.tsx` | `app/components/ui/States.tsx` |

### Pages (`app/`)

| File Name | Destination Path |
|-----------|-----------------|
| `HomePage.tsx` | `app/page.tsx` |
| `CoursesPage.tsx` | `app/courses/page.tsx` |
| `StudentsPage.tsx` | `app/students/page.tsx` |
| `ProfilePage.tsx` | `app/profile/page.tsx` |
| `layout.tsx` | `app/layout.tsx` |
| `globals.css` | `app/globals.css` |

### Public Assets (`public/`)

Make sure you have these files in your `public/` folder:
- `logo.svg` - Your dashboard logo
- `user.png` - User profile picture

## Color Scheme

The dashboard uses a blue-themed color palette defined in CSS variables:

```css
--blue-900: #1e3a8a  /* Navbar/Footer */
--blue-600: #2563eb  /* Primary buttons */
--blue-200: #bfdbfe  /* Soft accents */
--blue-100: #dbeafe  /* Panels */
--border: #93c5fd    /* Borders */
```

## Key Improvements Applied

**Mobile Sidebar Animation** - Added slide-in/out animation for mobile drawer  
**CSS Variable Consistency** - Updated Navbar/Footer to use CSS variables  
**Quick Action Links** - Connected dashboard buttons to relevant pages  
**Responsive Design** - Optimized for all screen sizes  

## Responsive Breakpoints

- **Mobile:** `< 768px` - Single column, drawer sidebar
- **Tablet:** `768px - 1024px` - 2 columns, static sidebar
- **Desktop:** `> 1024px` - 3-4 columns, collapsible sidebar

## Component Features

### AppShell
- Manages sidebar state (mobile drawer + desktop collapse)
- Wraps all pages with consistent layout

### Navbar
- Mobile hamburger menu button
- Desktop collapse/expand button
- Quick navigation links

### Sidebar
- Smooth slide animation on mobile
- Collapse/expand on desktop
- Active route highlighting
- Tooltip on hover when collapsed

### States Components
- `LoadingState` - Animated loading indicator
- `EmptyState` - No results message
- `ErrorState` - Error display with red styling

## Pages Overview

### Dashboard (/)
- 4 stat cards (courses, students, instructors, classes)
- Quick action buttons (with navigation)
- Recent activity timeline
- Announcements panel

### Courses (/courses)
- Search by ID, title, instructor
- Filter by status (Active, Upcoming, Completed)
- Add new course form with validation
- Card grid layout with status badges

### Students (/students)
- Search by ID, name, email, course
- Filter by status (Active, Inactive)
- Add new student form with email validation
- Table layout with hover effects

### Profile (/profile)
- User information display
- Profile picture
- Role and status cards

## Form Validation

### Courses Form
- Required fields: ID, title, instructor, duration
- Duplicate ID prevention
- Auto-uppercase ID

### Students Form
- Required fields: ID, name, email, course
- Email format validation (regex)
- Duplicate ID prevention
- Auto-uppercase ID

## Future Enhancements

- [ ] Edit/Delete functionality for courses and students
- [ ] Pagination for large lists
- [ ] Sort functionality on table columns
- [ ] Export to CSV feature
- [ ] Dark mode toggle
- [ ] Toast notifications
- [ ] Backend API integration
- [ ] User authentication
- [ ] Charts and graphs

## Dependencies

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "react-icons": "^5.0.0"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "typescript": "latest",
    "tailwindcss": "latest"
  }
}
```

## Troubleshooting

### Images not loading?
Make sure `logo.svg` and `user.png` are in the `public/` folder.

### Sidebar not sliding on mobile?
Ensure the updated `Sidebar.tsx` includes the transform classes.

### Styles not applying?
Check that `globals.css` is imported in `layout.tsx`.

### Build errors?
Run `npm install` to ensure all dependencies are installed.

## License

This project is open source and available for educational purposes.

##  Author

Built with ❤️ for learning Next.js and TypeScript

---

**Happy Coding!**
