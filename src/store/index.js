import { createStore } from 'vuex';

const store = createStore({
    state: {
        switch3D: false,
    },
    mutations: {
        toggleSwitch3D(state) {
            state.switch3D = !state.switch3D;
        },
    },
    actions: {
        
    }
});

export default store;
