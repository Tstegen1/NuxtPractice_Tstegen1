export const state = () => ({
  message: 'Vuexの世界へようこそ!'
})

export const mutations = {
  updateMessage: function(state, payload) {
    state.message = payload;
  }
}

export const actions = {
  updateMessageAction(context, payload) {
    context.commit('updateMessage', payload)
  }
}