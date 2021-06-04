import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List, Spin } from 'antd'
import TodoListItem from './TodoListItem'
import TodoItem from './types'

import { selectTasks, selectLoading } from './tasksSlice';
import { RootState } from '../../app/store'

interface Props {
  tasks: Array<TodoItem>,
  loading: boolean
}

class TodoList extends Component<Props> {

  render () {
    return <div className="px-8 my-6 h-full overflow-auto">
      <Spin tip="Loading..." spinning={false}>
        <List
          split={false}
          itemLayout="horizontal"
          size="small"
          dataSource={this.props.tasks}
          renderItem={item => <TodoListItem item={item} />}
        />
      </Spin>
    </div>
  }
}
const mapStateToProps = (state: RootState) => ({
  tasks: selectTasks(state),
  loading: selectLoading(state)
});

export default connect(mapStateToProps)(TodoList)
