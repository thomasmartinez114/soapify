import '@/assets/styles/globals.css';

export const metadata = {
  title: 'SOAPify AI',
  keywords: 'soap, notes, soap notes, medical',
  description: 'Automate your SOAP notes',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
