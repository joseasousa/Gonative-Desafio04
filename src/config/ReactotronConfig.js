import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';

import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'Desafio04 E-Comerce' })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  global.tron = tron;
}
