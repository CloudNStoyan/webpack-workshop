import { useEffect, useState, JSX } from 'react';
import { Button, CssBaseline } from '@mui/material';

import { formatDate } from '~helpers';
import logoUrl from '~logo.png';

export const App = (): JSX.Element => {
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then((res) => res.text())
      .then(setMessage)
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, []);

  return (
    <div className="text text-center">
      <CssBaseline />
      <div>Hello Webpack</div>
      <div data-testid="date-label">{formatDate(new Date())}</div>
      {message && <div data-testid="server-message">{message}</div>}
      <div>
        <img src={logoUrl} alt="logo" />
      </div>
      <div>
        <Button variant="contained">Cats</Button>
      </div>
    </div>
  );
};
