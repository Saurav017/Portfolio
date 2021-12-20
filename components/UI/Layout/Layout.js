import classes from './Layout.module.css'
import Navbar from '../../Navbar/Navbar';

const Layout = (props) => {

  return (
    <>
      <Navbar />
      <section className={classes.layout}>{props.children}</section>
    </>
  );
};

export default Layout
