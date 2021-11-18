// synchronous action creators
export const updateDishForm = formData => {
    return {
      type: "UPDATE_DISH_FORM",
      formData
    }
  }
  
  export const resetDishForm = () => {
    return {
      type: "RESET_DISH_FORM"
    }
  }