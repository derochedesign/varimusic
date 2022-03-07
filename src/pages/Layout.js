const Layout = props => {
  return (
    <div className="phone-layout">
      <div className="inner">
        {props.children}
      </div>
    </div>
  );
}
export default Layout;