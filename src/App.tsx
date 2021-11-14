import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import configureStore from './store';

// components
import Users from 'components/Users';

const App = () => (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
