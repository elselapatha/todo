
import React, { Component } from 'react'
import { connect } from 'react-redux';
import classNames from "classnames";

import moment from 'moment'
import { List } from 'antd'
import { HiCheckCircle } from 'react-icons/hi'
import { FiCircle, FiTrash2 } from 'react-icons/fi'

import TodoItem from './types'

import { removeTodoAsync, doneTodoAsync } from './tasksSlice';

interface Props {
  item: TodoItem
  removeTask: (id: String) => void,
  doneTask: (id: String) => void
}

class TodoListItem extends Component<Props>{

  removeTask = (event: React.MouseEvent<SVGAElement>) => {
    this.props.removeTask(this.props.item.id)
    console.log('Task Removed.');
    event.preventDefault()
  }

  done = (event: React.MouseEvent<SVGAElement>) => {
    this.props.doneTask(this.props.item.id)
    console.log('Task done.');
    event.preventDefault()
  }

  render () {
    const item = this.props.item
    return <List.Item className="transition-colors group duration-200 border border-gray-300 select-none hover:bg-gray-100 rounded-lg mb-2">
      <div className={classNames('h-full', 'py-1', 'text-lg', 'flex', 'flex-row', { 'cursor-pointer': !item.done })}>
        <div className="flex items-center">
          {item.done ? <HiCheckCircle size="24px" className="text-green-500 ml-1 mr-5" /> : <FiCircle size="24px" className="text-gray-400 ml-1 mr-5 group-hover:text-emerald-500" onClick={this.done} style={{ fill: 'white' }} />}
        </div>
        <div>
          <span className={classNames({ 'line-through': item.done })}>{item.title}</span>
          <div className="text-sm text-gray-400">{moment(item.timestamp).fromNow()}</div>
        </div>
      </div>
      <FiTrash2 onClick={this.removeTask} className="text-gray-500 hover:text-red-700 md:mr-4 cursor-pointer" size="24px" />
    </List.Item>
  }

}

const mapDispatchToProps = {
  removeTask: removeTodoAsync,
  doneTask: doneTodoAsync
}

export default connect(null, mapDispatchToProps)(TodoListItem)