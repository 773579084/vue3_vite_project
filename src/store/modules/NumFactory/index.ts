import { Module } from 'vuex'
import NumFactoryStateTypes from './types'
import RootStateTypes from '../../types'

// Create a new store Modules.
const numFactoryModule: Module<NumFactoryStateTypes, RootStateTypes> = {
  namespaced: true,
  state: <any>{},
  mutations: {},
  actions: {}
}

export default numFactoryModule
