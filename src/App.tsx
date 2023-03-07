import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import router from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
