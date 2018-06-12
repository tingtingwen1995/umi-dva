import React from 'react';
import styles from './index.css';
import HeaderShow from './Header';
import withRouter from 'umi/withRouter';

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <HeaderShow location={location} children ={children}/>
      {/* <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div> */}
    </div>
  );
}

export default withRouter(Layout);