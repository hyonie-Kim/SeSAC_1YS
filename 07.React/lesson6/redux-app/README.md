# Redux 세팅

- `npx create-react-app redux-app`
- `npm install redux`
- `npm install react-redux`

```javascript
// src/index.js
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider>
      <App />
    </Provider>
  </>
);
```
