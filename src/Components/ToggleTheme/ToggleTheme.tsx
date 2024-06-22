import { Button } from 'primereact/button';
import { useTheme } from '../../Theme/ThemeProvider';

const ToggleTheme = () => {
  const {toggleTheme} =useTheme()
  return (
    <div>
      <Button onClick={toggleTheme} icon="pi pi-sun" className='h-2rem' />
    </div>
  );
};

export default ToggleTheme;
