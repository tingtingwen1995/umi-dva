import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import styles from './users.css';
import { routerRedux } from 'dva/router';
import { PAGE_SIZE } from '../../../constants';
import UserModal from '././useModal';


function Users({ dispatch, data: dataSource,loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
        type: 'list/remove',
        payload: { id },
      });
  }

  function pageChangeHandler(page) {
      //第一种方法，监听路由
    dispatch(routerRedux.push({
      pathname: '/users/list',
      query: { page },
    }));
    //第二种方法，直接发送action
    // dispatch({
    //     type: `list/fetch`,
    //     payload: { page },
    // });
  }

  function editHandler(id, values) {
    dispatch({
      type: 'list/patch',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'list/create',
      payload: values,
    });
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (
          <span className={styles.operation}>
            <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
              <a>Edit</a>
            </UserModal>
            <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
              <a href="">Delete</a>
            </Popconfirm>
          </span>
        ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
            <UserModal record={{}} onOk={createHandler}>
                <Button type="primary">Create User</Button>
            </UserModal>
        </div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={parseInt(current,10)}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { data = [], total = [], page = 1 } = state.list;
  return {
    data,
    total,
    page,
    loading: state.loading.effects['list/fetch'],
  };
}

export default connect(mapStateToProps)(Users);