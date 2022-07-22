```tsx
import { useBreakpointValue } from "@chakra-ui/react";

const App = () => {
  const variants = useBreakpointValue({ base: "Small", md: "Medium" });

  return <div>{variants}</div>;
};
```

### Bug

- On mobile, closing the drawer resets the accordion
