| Color         |               |
| ------------- | ------------- |
| Pink  | #ED4C67  |
| Gray  | #F2F2F2  |

# uuid
```
import uuid from 'react-native-uuid';
```
```
uuid.v4()
```
# loading
```
  import Spinner from 'react-native-loading-spinner-overlay';

  const [loading, setLoading] = useState(false);

```
```
<Spinner
          visible={loading}
          textStyle={{color: '#FFF',}}
/>
```