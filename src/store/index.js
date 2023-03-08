import {createStore} from 'vuex';
import { mainModule } from './MainModule';

export default createStore({
    modules: {
/*         post: postModule,
        todo: todoModule, */
        main: mainModule
    }
})