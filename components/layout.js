const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>NiftyTunes</h1>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
