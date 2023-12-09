import { createStore } from "vuex";
import { userModule } from "./userModule";
import { postsModule } from "./postModule";


export default createStore({
   modules:{
    user: userModule,
    posts: postsModule
   }
})