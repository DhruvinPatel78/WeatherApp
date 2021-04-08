import React, { useEffect, useState } from 'react';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import Navigation from './navigation/navigation';

const App = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);

  return !loaded ? <SplashScreen /> : <Navigation />;
};

export default App;
