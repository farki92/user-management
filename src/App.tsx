import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

// components
import Users from 'components/Users';
import User from 'components/User';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<User />} />
      <Route path="*" element={<Navigate to="/users" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
