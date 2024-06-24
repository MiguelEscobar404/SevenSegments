import './App.css';
import SevenSegments1 from './components/SevenSegments1';
import { SevenSegments2 } from './components/SevenSegments2';

function App() {
  return (
    <>
      <SevenSegments1 digit={9} text={'Primera Parte'} />
      <SevenSegments2 text={'Segunda Parte'} />
    </>
  );
}

export default App;
