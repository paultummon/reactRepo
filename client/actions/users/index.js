export const selectUser = (user) => {
    //action creator
    console.log('THIS IS THE SELECTEDUSER ====>', user)
    return {
        type: "USER_SELECTED",
        payload: user
    }
}