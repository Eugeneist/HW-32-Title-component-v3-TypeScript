import { useState } from 'react';
import Title from './components/Title';

const App = () => {
  const [isOpenedTitle, setOpened] = useState<boolean>(false);

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  if (isOpenedTitle === true) {
    return (
      <div className="App">
        <Title name="Peter" type="bold" />
        <Title name="Steven" type="normal" />
        <Title name="Tony" />
        <button onClick={handleClose}>Close title!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <button onClick={handleOpen}>Open title!</button>
    </div>
  );
}

export default App;

