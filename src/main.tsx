@@ .. @@
 import { StrictMode } from 'react';
 import { createRoot } from 'react-dom/client';
 import App from './App.tsx';
 import './index.css';
 
-createRoot(document.getElementById('root')!).render(
+const rootElement = document.getElementById('root');
+if (rootElement) {
+  createRoot(rootElement).render(
-  <StrictMode>
-    <App />
-  </StrictMode>
-);
+    <StrictMode>
+      <App />
+    </StrictMode>
+  );
+} else {
+  console.error('Root element not found');
+}