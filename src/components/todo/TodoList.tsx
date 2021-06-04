import React, { Component } from 'react'
import { connect } from 'react-redux'

import { List } from 'antd'
import TodoListItem from './TodoListItem'
import TodoItem from './types'

import { selectTasks } from './tasksSlice';

interface Props {
  tasks: Array<TodoItem>
}

class TodoList extends Component<Props> {

  render () {
    return <div className="px-8 my-6 h-full overflow-auto">
      <List
        split={false}
        itemLayout="horizontal"
        size="small"
        dataSource={this.props.tasks}
        renderItem={item => <TodoListItem item={item} />}
      />
    </div>
  }
}
const mapStateToProps = (state: any) => ({
  tasks: selectTasks(state)
});

export default connect(mapStateToProps)(TodoList)
