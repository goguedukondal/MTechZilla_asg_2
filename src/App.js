import "./App.css";
import GithubSearch from "./components/GithubSearch";

import GithubHome from "./components/GithubHome";
import { Box } from "@chakra-ui/react";
import { useData } from "./context/Context";

function App() {
  const { user } = useData();

  return (
    <div className="App">
      <Box>
        <GithubSearch />

        {user.length !== 0 && <GithubHome />}
      </Box>
    </div>
  );
}

export default App;
