import { CustomButton } from "./CustomButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CustomButton text="Click me!" warnMessage="warning" hint="this is btn" />

      <CustomButton text="Click me!" hint="this is button" />

      <CustomButton text="Click me!" warnMessage="this is button" />
    </div>
  );
}