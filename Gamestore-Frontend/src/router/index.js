import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue'; // Import the SignIn View
import CustomerView from '../views/CustomerView.vue'; // Ensure this view is imported
import OwnerView from '../views/OwnerView.vue'; // Ensure this view is imported
import AccountView from '../views/AccountView.vue';
import CheckoutView from '../views/CheckoutView.vue'; // Import the Checkout View
import PaymentView from '../views/PaymentView.vue'; // Import the Payment View
import OrderCompleteView from "@/views/OrderCompleteView.vue"; // Import the Order complete view
import DashBoardView from '../views/DashBoardView.vue'; // Import the Payment View
import StaffView from '@/views/StaffView.vue';
import OrderManagementView from '@/views/OrderManagementView.vue';
import ShoppingCartView from "@/views/ShoppingCartView.vue";
import ProductView from '../views/ProductView.vue';
import ReviewView from '../views/ReviewView.vue';
import WishlistView from '@/views/WishlistView.vue';
import SearchView from '@/views/SearchView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/account', // Changed to a unique path for the account view
      name: 'account',
      // route level code-splitting
      component: AccountView,
    },
    {
      path: '/', // Default route for the home page
      name: 'home',
      component: HomeView,
    },
    {
      path: '/employee', // Default route for the home page
      name: 'employee',
      component: StaffView,
    },
    {
      path: "/order_management/:id",
      name: "order_management",
      component: OrderManagementView,
      props: true,
    },
    {
      path: '/signin', // Route for the SignIn page
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView
    },

    {
      path: '/owner',
      name: 'owner',
      component: OwnerView
    },
    {
      path: '/checkout', // Route for the Checkout page
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/payment', // Route for the Payment page
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/ordercomplete',
      name: 'ordercomplete',
      component: OrderCompleteView
    },
    { path: '/dashboard',
      name: 'Dashboard',
      component: DashBoardView
    },
    {
      path: '/shoppingcart',
      name: '/ShoppingCart',
      component: ShoppingCartView
    },
    {
      path: '/product/name/:name',
      name: 'product-by-name',
      component: ProductView
    },
    {
      path : '/product/:id',
      name : 'product',
      component : ProductView
    },
    {
      path: '/product/:id/review',
      name: 'ReviewView',
      component : ReviewView
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    }
  ],
});

export default router;
