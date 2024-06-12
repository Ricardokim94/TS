import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Counter 인터페이스 정의
interface Counter {
  count: number;
}

// 초기 상태 정의
const 초기값: Counter = { count: 0 };

// Redux slice 정의
const counterSlice = createSlice({
  name: 'counter',
  initialState: 초기값,
  reducers: {
    증가(state) {
      state.count += 1;
    },
    감소(state) {
      state.count -= 1;
    },
    맘대로증가 (state, action : PayloadAction<number>){
      state.count += action.payload
    }
  }
});

// Action 생성자 export
export const { 증가, 감소, 맘대로증가 } = counterSlice.actions;

// Redux store 생성
const store = configureStore({
  reducer: {
    counter1 : counterSlice.reducer 
  }
});

// store의 타입 미리 export 해두기 
export type RootState = ReturnType<typeof store.getState>

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
