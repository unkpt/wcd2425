/*
//Get user data from login and check if admin
const checkAdmin = async (username,password) =>{
    //You'll need to implement a mechanism for password storage
    //This implementation is highly insecure and should NOT be used for production
    const usersRef = db.collection('users')
    const querySnapshot = await usersRef.where('username','==',username).get()
    if(querySnapshot.empty){
      return false
    } else {
        const userData = querySnapshot.docs[0].data()
        //Insecure password check for demonstration purposes only
        if(userData.password === password){
          return true
        } else {
          return false
        }
    }
  }
  */
  
  // ... functions to update job status ('approved', 'rejected') ...
  
