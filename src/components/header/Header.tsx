import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postTodoAsync } from '../todo/tasksSlice';
import TodoItem from '../todo/types'

import { v4 as uuid } from 'uuid'
import moment from 'moment'

interface Props {
  addTask: (task: TodoItem) => void
}

interface State {
  title: string
}

class Header extends Component<Props, State> {

  state = {
    title: ''
  }

  addTask = (event: React.FormEvent<HTMLFormElement>) => {
    this.props.addTask({
      id: uuid(),
      timestamp: moment(),
      title: this.state.title,
      done: false
    })
    this.setState({ title: '' })
    console.log('Added Successfully');
    event.preventDefault()
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: event.target.value })
    event.preventDefault()
  }

  render () {
    return <div className="px-8 flex flex-col">
      <div className="text-gray-700 text-4xl font-bold py-8"> Todo</div>
      <form onSubmit={this.addTask} className="flex space-x-2">
        <input
          type="text"
          className="block appearance-none text-base placeholder-gray-500 placeholder-opacity-50 border border-gray-300 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 hover:border-emerald-400 focus:border-emerald-400 focus:ring-emerald-300"
          placeholder="New Task"
          value={this.state.title}
          onChange={this.onChange} />
        <button type="submit" className="min-w-max px-3 py-2 shadow-md bg-green-500 rounded-md text-white focus:outline-none font-semibold hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md">Add Task</button>
      </form>
    </div>
  }
}

export default connect(null, { addTask: postTodoAsync })(Header)