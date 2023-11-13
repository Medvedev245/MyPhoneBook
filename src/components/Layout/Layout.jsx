import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                marginTop: '100px',
              }}
            >
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
