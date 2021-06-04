import React from 'react';
import { Layout } from 'antd'
import Header from './components/header/Header'
import TodoList from './components/todo/TodoList'

import './App.sass';
function App () {
  return (
    <div className="App">
      <Layout className="layout h-screen">
        <Layout.Content className="p-4 lg:p-20 bg-gray-100">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full lg:w-2/3 bg-white flex flex-col rounded-2xl shadow-lg h-full">
              <Header />
              <TodoList />
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
