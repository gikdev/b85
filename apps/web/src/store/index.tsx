import { combineReducers, configureStore } from "@reduxjs/toolkit"
import type { PropsWithChildren } from "react"
import { Provider, useDispatch, useSelector, useStore } from "react-redux"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  persistReducer,
  persistStore,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import storage from "redux-persist/lib/storage"
import { loggingDevtoolsSlice } from "#/logging/slice"
import { namoratabSlice } from "#/pages/apps/namoratab/store"
import { nebulaSlice } from "#/pages/apps/nebula/store"
import { rakatSlice } from "#/pages/apps/rakat/store"
import { workTimerSlice } from "#/pages/apps/work-timer/store"

const rootReducer = combineReducers({
  apps: combineReducers({
    namoratab: namoratabSlice.reducer,
    nebula: nebulaSlice.reducer,
    rakat: rakatSlice.reducer,
    workTimer: workTimerSlice.reducer,
  }),
  loggingDevtools: loggingDevtoolsSlice.reducer,
})

const persistConfig = { key: "root", storage }

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export const AppStoreProvider = (p: PropsWithChildren) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {p.children}
    </PersistGate>
  </Provider>
)

export type AppStore = typeof store
export const useAppStore = useStore.withTypes<AppStore>()

export type AppState = ReturnType<typeof rootReducer>
export const useAppSelector = useSelector.withTypes<AppState>()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
