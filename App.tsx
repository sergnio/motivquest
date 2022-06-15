import MotivAppProvider from "./components/Providers/MotivAppProvider";
import Main from "./components/Main";

export default () => {
  return (
    <MotivAppProvider>
      <Main />
    </MotivAppProvider>
  );
};
