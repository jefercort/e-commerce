# 🛍️ E-Commerce Web Shop

A modern, fully responsive e-commerce web application built with React.js, Vite, and Tailwind CSS. This project showcases a complete online shopping experience with product browsing, cart management, and a clean, professional UI design.

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your deployed URL here when available -->

## ✨ Features

### Core Functionality
- 🏪 **Product Catalog** - Browse through a variety of products with detailed information
- 🔍 **Product Search** - Find products quickly with search functionality
- 📱 **Responsive Design** - Seamless experience across all devices (mobile, tablet, desktop)
- 🛒 **Shopping Cart** - Add, remove, and update product quantities
- 💰 **Price Calculation** - Automatic subtotal and total price updates
- 🏷️ **Product Categories** - Filter products by categories
- ⭐ **Product Details** - View detailed product information including images, descriptions, and prices

### User Experience
- 🎨 **Modern UI/UX** - Clean and intuitive interface using Tailwind CSS
- ⚡ **Fast Performance** - Optimized with Vite for quick load times
- 🔄 **Real-time Updates** - Cart updates instantly without page refresh
- 📊 **Product Filtering** - Sort and filter products by price, category, or rating
- 💳 **Checkout Process** - Streamlined checkout flow (UI demonstration)

## 🛠️ Technologies Used

### Frontend
- **React.js 18** - Modern JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router** - For seamless navigation between pages
- **React Context API** - State management for cart and user data

### Additional Libraries
- **React Icons** - Beautiful icons for enhanced UI
- **Axios** - For API calls (if using external API)
- **React Hot Toast** - Elegant notifications for user actions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/jefercort/e-commerce.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd e-commerce
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
e-commerce/
├── public/                  # Public assets
│   └── images/             # Product images
├── src/
│   ├── assets/             # Static assets (images, fonts)
│   ├── components/         # Reusable React components
│   │   ├── Cart/          # Shopping cart components
│   │   ├── Products/      # Product listing components
│   │   ├── Layout/        # Layout components (Header, Footer)
│   │   └── UI/            # UI components (Buttons, Cards)
│   ├── context/           # React Context for state management
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── Shop.jsx       # Products page
│   │   ├── ProductDetail.jsx # Product detail page
│   │   └── Cart.jsx       # Shopping cart page
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles and Tailwind imports
│   └── main.jsx           # Application entry point
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore file
├── index.html             # HTML template
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎯 Core Components

### Product Card
- Displays product image, name, price, and rating
- Quick add to cart functionality
- Link to detailed product view

### Shopping Cart
- Real-time cart updates
- Quantity adjustment controls
- Remove items functionality
- Price calculation
- Checkout button

### Product Filter
- Filter by category
- Sort by price (low to high, high to low)
- Search functionality

## 💻 Available Scripts

```bash
# Development
npm run dev             # Start development server with hot reload

# Build
npm run build          # Build for production
npm run preview        # Preview production build locally

# Code Quality
npm run lint           # Run ESLint for code linting
npm run format         # Format code with Prettier
```

## 🎨 Customization

### Tailwind Configuration
Modify `tailwind.config.js` to customize:
- Color scheme
- Typography
- Spacing
- Breakpoints

### Adding Products
Products can be added by:
1. Updating the product data file/API
2. Adding product images to the public folder
3. Ensuring proper data structure is maintained

## 🚧 Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Order history and tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced filtering options
- [ ] Admin dashboard for product management
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Product recommendations
- [ ] Inventory management
- [ ] Discount codes and promotions

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- **React Development**: Components, hooks, state management, routing
- **Modern CSS**: Tailwind CSS utility classes, responsive design
- **E-commerce Concepts**: Cart logic, product management, user flow
- **Build Tools**: Vite configuration and optimization
- **Best Practices**: Code organization, component reusability, performance optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kevin Cortes**
- GitHub: [@jefercort](https://github.com/jefercort)
- Portfolio: https://proserv.com.co

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- React community for excellent documentation
- Tailwind CSS for the amazing utility-first framework
- Vite for the blazing fast development experience

---

⭐ **If you find this project useful, please consider giving it a star on GitHub!**

🔗 **[View Live Demo](#)** | 📝 **[Report Bug](https://github.com/jefercort/e-commerce/issues)** | 💡 **[Request Feature](https://github.com/jefercort/e-commerce/issues)**
