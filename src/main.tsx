import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Tailwind CSSのインポート
import App from './App.tsx'
import AuthProvider from './components/Lesson4/context/AuthContext.tsx';


// index.htmlのroot要素を取得して、その中にAppコンポーネントを描画する
createRoot(document.getElementById('root')!).render(
  // StrictModeはReactの開発ツールであるReact DevToolsを有効にするためのもの
  // 開発中にエラーを検出するためのもの

  <StrictMode>
    {/* ラップすることでuserCOntextのコンテキスト情報を使用できる */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
