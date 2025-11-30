import { RouterProvider } from 'react-router';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { RewardsProvider } from './context/RewardsContext';
import { router } from './utils/routes';

function App() {
  return (
    <AuthProvider>
      <RewardsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </RewardsProvider>
    </AuthProvider>
  );
}

export default App;
