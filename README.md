/*
App Design :

1. Header
   -Logo
   -Nav Items
2. Body
   -Search
   -RestaurantContainer
     - Restaurant Card
3. Footer
   - Copyright
   - Links
   - Address
   - Contact        
*/

Two types of Export/Import

- Default Export/Import

export default component;
import component from "path";

- Named Export/Import

export const component;
import {component} from "path";

---
#React Hooks
{Normal JS Utility Functions}
- useState() - Superpowerful variable
- useEffect()

# React Fiber Architecture

# Virtual DOM

# Reconciliation

# React is very fast due to virtual dom because it has a diff algorithm to do dom manipulation so fast.

# find the difference between virtual and actual dom and then re render the component so fast.