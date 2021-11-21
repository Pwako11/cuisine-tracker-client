// synchronous action creators
export const updateMatchForm = formData => {
    console.log("Step 1",  formData)
    return {
      type: "UPDATE_MATCH_FORM",
      formData
    }
  }
  
  export const resetMatchForm = () => {
    return {
      type: "RESET_MATCH_FORM"
    }
  }