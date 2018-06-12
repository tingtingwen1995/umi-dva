import * as usersService from '../../../services/service';

export default {
  namespace: 'list',
  state: {
    list: [],
    total: null,
    page: 1,
  },
  reducers: {
    //reducer 是一个函数，接受 state 和 action，返回老的或新的 state 。即：(state, action) => state
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page }); //这一步需要后端传page回来传到data里面，total也传到data里面
      yield put({ type: 'save', payload: { data, total: headers['x-total-count'], page} });
    },
    *remove(action, { call, put, select }) {
      const { id } = action.payload;
      yield call(usersService.remove, id);
      const page = yield select(state => state.list.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    //第一个参数就是action，这儿是解析之后的值，id = action.payload.id
    *patch({ payload: { id, values } }, { call, put, select }) {
      yield call(usersService.patch, id, values);
      const page = yield select(state => state.list.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *create({ payload: values }, { call, put, select }) {
      yield call(usersService.create, values);
      const page = yield select(state => state.list.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  }, 
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users/list') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
