import { useSelector } from "react-redux";

function ThemeProvider({children}) {
    const {theme} = useSelector(state => state.theme)
  return (
    <div className={theme}>
        <div className="bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-600
        min-h-screen">
        {children}    
        </div>
    </div>
  );
}

export default ThemeProvider;