import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());

app.model({ ...(require('/home/tingtingwen/Documents/user-dashboard/src/models/example.js').default) });
app.model({ ...(require('/home/tingtingwen/Documents/user-dashboard/src/pages/users/models/list.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
