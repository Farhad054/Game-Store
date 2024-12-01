import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue'; // Import the SignIn View
import EmployeeView from '../views/EmployeeView.vue'; // Ensure this view is imported
import CustomerView from '../views/CustomerView.vue'; // Ensure this view is imported
import OwnerView from '../views/OwnerView.vue'; // Ensure this view is imported
import AccountView from '../views/AccountView.vue';
import CheckoutView from '../views/CheckoutView.vue'; // Import the Checkout View
import PaymentView from '../views/PaymentView.vue'; // Import the Payment View
import StaffView from '@/views/StaffView.vue';
import OrderView from '@/views/OrderView.vue';


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
      path: '/staff', // Default route for the home page
      name: 'staff',
      component: StaffView,
    },
    {
      path: "/orders",
      name: "orders",
      component: OrderView,
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
      path: '/employees',
      name: 'employee',
      component: EmployeeView
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
    }
  ],
});

export default router;
